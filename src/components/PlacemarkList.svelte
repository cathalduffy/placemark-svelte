<script>
  import {getContext, onMount} from 'svelte'

  const placemarkService = getContext("PlacemarkService");
  let placemarkList = [];

  onMount(async () => {
    placemarkList = await placemarkService.getPlacemarks();
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

        </td>
      </tr>
    {/each}
  </tbody>
</table>
