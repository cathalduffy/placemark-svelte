<script>
  import navigation from "/src/assets/map.png";
  import PlacemarkList from "../components/PlacemarkList.svelte";
  import {getContext, onMount} from 'svelte'
  import {placemark} from "../stores";
  import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';

  const placemarkService = getContext("PlacemarkService");
  let placemarkById = [];
    const mapConfig = {
    location: {lat: 53.350140, lng: -6.266155},
    zoom: 7,
    minZoom: 1,
  };
  let map = null;
  let url = ``;

  onMount(async (request) => {
    map = new LeafletMap("placemark-map", mapConfig);
    map.showZoomControl();
    map.showLayerControl();

    url = window.location.href
    console.log(url)
    let parsedURL = url.substring(34)
    placemarkById = await placemarkService.getPlacemarkById(parsedURL);
    
    map.addMarker({lat: $placemark.latitude, lng: $placemark.longitude});
  });
</script>

<div class="box" id="placemark-map" style="height:400px; width:600px">
</div>