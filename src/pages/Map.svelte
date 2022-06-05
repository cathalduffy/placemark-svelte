<script>
  import navigation from "/src/assets/map.png";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import {getContext, onMount} from 'svelte'
  import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';
  import AllPlacemarksMap from "../components/AllPlacemarksMap.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Categories so far..."} title={"The Placemark Application"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<AllPlacemarksMap/>

