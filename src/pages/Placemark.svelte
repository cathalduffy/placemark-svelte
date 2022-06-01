<script>
  import navigation from "/src/assets/map.png";
  import PlacemarkList from "../components/PlacemarkList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import {getContext, onMount} from 'svelte'
  import {placemark} from "../stores";
  import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';


  const placemarkService = getContext("PlacemarkService");
  let placemarkById = [];

    const mapConfig = {
    location: {lat: 52.160858, lng: -7.152420},
    zoom: 7,
    minZoom: 1,
  };
  let map = null;

  let url = ``;
  let name = $placemark.name;


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

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Donations so far..."} title={"The Placemark Application"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<p>{$placemark.id}</p>
<p>{$placemark.name}</p>
<p>{$placemark.latitude}</p>
<p>{$placemark.longitude}</p>

<div class="box" id="placemark-map" style="height:500px">
</div>












