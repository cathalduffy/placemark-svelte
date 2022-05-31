<script>
  import {getContext, onMount} from 'svelte'
  import {category} from "../stores";

  const placemarkService = getContext("PlacemarkService");
  let placemarkList = [];

  let url = ``;

  onMount(async (request) => {
    url = window.location.href
    console.log(url)
    let parsedURL = url.substring(33)
    placemarkList = await placemarkService.getPlacemarks(parsedURL);
    console.log(placemarkList)
  });
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Title</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th></th>
  </thead>
  <tbody>
    {#each placemarkList as placemarks}
      <tr>
        <td>
          {placemarks.name}
        </td>
        <td>
          {placemarks.latitude}
        </td>
        <td>
          {placemarks.longitude}
        </td>
        <td>
          {placemarks.categoryid}
        </td>
      </tr>
    {/each}
  </tbody>
</table>


