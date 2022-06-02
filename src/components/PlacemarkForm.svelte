<script>
  import { push } from "svelte-spa-router";
  import { getContext, onMount } from "svelte";
  import Coordinates from "./Coordinates.svelte";

    let categoryList = [];
    let name = "";
    let latitude = 52.160858;
    let longitude = -7.152420;
    let errorMessage = "";
    let message = "Enter All fields to add a spot";

  const placemarkService = getContext("PlacemarkService");
  const categoryService = getContext("CategoryService");


  onMount(async () => {
    categoryList = await categoryService.getCategories();
  });

  async function addPlacemark() {
    if (name && latitude && longitude) {
      const category = categoryList.find(category => category.title && category._id);
      const placemark = {
        name: name,
        latitude: latitude,
        longitude: longitude,
        category: category._id,
      };
    const success = await placemarkService.addPlacemark(placemark)
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

<form on:click|preventDefault={addPlacemark}>
  <div class="field">
    <label class="label" for="name">Enter Placemark Name</label> 
    <input bind:value={name} class="input" id="name" name="name" placeholder="Placemark Name" type="text">
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







