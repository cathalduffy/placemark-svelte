<script>
  import {getContext, onMount} from 'svelte'
  import {category} from "../stores";
  import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';

  const placemarkService = getContext("PlacemarkService");
  let placemarkList = [];
    
    const mapConfig = {
    location: {lat: 52.160858, lng: -7.152420},
    zoom: 7,
    minZoom: 1,
  };

  let url = ``;

  onMount(async (request) => {
    const map = new LeafletMap("placemark-map", mapConfig);
    map.showZoomControl();
    map.showLayerControl();

    url = window.location.href
    let parsedURL = url.substring(33)
    placemarkList = await placemarkService.getPlacemarks(parsedURL);
      placemarkList.forEach(placemark => {
      map.addMarker({lat: placemark.latitude, lng: placemark.longitude});
    });

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

<div class="box" id="placemark-map" style="height:500px">
</div>


