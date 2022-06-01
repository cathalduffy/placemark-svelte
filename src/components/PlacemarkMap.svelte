<script>
  import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';
  import {onMount} from "svelte";


  const mapConfig = {
    location: {lat: 52.160858, lng: -7.152420},
    zoom: 8,
    minZoom: 1,
  };

  onMount(async () => {
    const map = new LeafletMap("donation-map", mapConfig);
  });
</script>

<div class="box" id="donation-map" style="height:800px">
</div>