<script>
  import {getContext, onMount} from 'svelte'
  import {category} from "../stores";
  import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';

  const placemarkService = getContext("PlacemarkService");
  let placemarkList = [];

  let url = ``;

  onMount(async (request) => {
    url = window.location.href
    let parsedURL = url.substring(33)
    placemarkList = await placemarkService.getPlacemarks(parsedURL);
  });
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Title</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Amenities</th>
    <th>Food</th>
    <th>Cleanliness</th>
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
          {placemarks.amenitiesRating}
        </td>
        <td>
          {placemarks.foodRating}
        </td>
        <td>
          {placemarks.cleanlinessRating}
        </td>
        <td>
         <a href="/#/placemark/{placemarks._id}" class="button">
          <span class="icon is-small">
           <i class="fas fa-folder-open"></i>
          </span>
         </a>
        </td>
      </tr>
    {/each}
  </tbody>
</table>




