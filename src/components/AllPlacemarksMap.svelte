<script>
  import {getContext, onMount} from 'svelte'
  import {category} from "../stores";
  import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';

  const placemarkService = getContext("PlacemarkService");
  let placemarkList = [];
    
    const mapConfig = {
    location: {lat: 53.350140, lng: -6.266155},
    zoom: 7,
    minZoom: 1,
  };

  let url = ``;

  onMount(async (request) => {
    const map = new LeafletMap("placemark-map", mapConfig);
    map.showZoomControl();
    map.showLayerControl();

    placemarkList = await placemarkService.getAllPlacemarks();
      placemarkList.forEach(placemark => {
      map.addMarker({lat: placemark.latitude, lng: placemark.longitude});
    });

  });
</script>


<div class="box" id="placemark-map" style="height:500px">
</div>