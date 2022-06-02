<script>
  import { push } from "svelte-spa-router";
  import { getContext, onMount } from "svelte";
  import Coordinates from "./Coordinates.svelte";

    let categoryList = [];
    let name = "";
    let latitude = 52.160858;
    let longitude = -7.152420;
    let cleanlinessRating = 0;
    let amenitiesRating = 0;
    let foodRating = 0;
    let errorMessage = "";
    let message = "Enter All fields to add a spot";

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
 /*          await push("/category/*");    //display the placemark list upon addition of new placemark
      } else {
            errorMessage = "Addition of Placemark not completed - some error occurred";
        }
    } */
  }
</script>

<form on:submit|preventDefault={addPlacemark}>
  <div class="field">
    <label class="label" for="name">Enter Placemark Name</label> 
    <input bind:value={name} class="input" id="name" name="name" placeholder="Placemark Name" type="text">
    <input bind:value={amenitiesRating} class="input" id="amenitiesRating" name="amenitiesRating" placeholder="amenitiesRating" type="number">
    <input bind:value={foodRating} class="input" id="foodRating" name="foodRating" placeholder="foodRating" type="number">
    <input bind:value={cleanlinessRating} class="input" id="cleanlinessRating" name="cleanlinessRating" placeholder="cleanlinessRating" type="number">
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







