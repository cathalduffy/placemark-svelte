<script>
  import { push } from "svelte-spa-router";
  import { getContext, onMount } from "svelte";
  import Coordinates from "./Coordinates.svelte";

    let categoryList = [];
    let name = "";
    let latitude = 53.350140;
    let longitude = -6.266155;
    let cleanlinessRating = "";
    let amenitiesRating = "";
    let foodRating = "";
    let errorMessage = "";
    let message = "Please enter all fields";

  const placemarkService = getContext("PlacemarkService");
  const categoryService = getContext("CategoryService");

  let url = ``;

  onMount(async () => {
    categoryList = await categoryService.getCategories();
  });

    url = window.location.href
    let parsedURL = url.substring(33)

  async function addPlacemark() {
    if (name && latitude && longitude) {
      const category = categoryList.find(category => category._id);
      const placemark = {
        name: name,
        latitude: latitude,
        longitude: longitude,
        amenitiesRating: amenitiesRating,
        foodRating: foodRating,
        cleanlinessRating,
        category: category._id,
      };
    const success = await placemarkService.addPlacemark(placemark, parsedURL)
        if (success) {
          console.log("placemark added");
        }
      }
  }
</script>

<form on:submit|preventDefault={addPlacemark}>
  <div class="field">
    <label class="label" for="name">Please Enter Placemark Details</label> 
    <input bind:value={name} class="input" id="name" name="name" placeholder="Placemark Name" type="text">
    <input bind:value={amenitiesRating} class="input" id="amenitiesRating" name="amenitiesRating" placeholder="Please Rate the Amenities" type="number">
    <input bind:value={foodRating} class="input" id="foodRating" name="foodRating" placeholder="Please Rate the Dining Facilities" type="number">
    <input bind:value={cleanlinessRating} class="input" id="cleanlinessRating" name="cleanlinessRating" placeholder="Please Rate the Cleanliness" type="number">
  </div>
   <div>
   <Coordinates bind:lat={latitude} bind:lng={longitude}/>
   </div>
    <div class="control">
      <button class="button is-link is-light">Add Placemark</button>
    </div>
  <div class="section">
    {message}
  </div>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}







