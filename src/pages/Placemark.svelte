<script>
  import navigation from "/src/assets/map.png";
  import PlacemarkList from "../components/PlacemarkList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import {getContext, onMount} from 'svelte'
  import {placemark} from "../stores";
  import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';
  import PlacemarkMap from "../components/PlacemarkMap.svelte";
  import PlacemarkChart from "../components/PlacemarkChart.svelte";

  const placemarkService = getContext("PlacemarkService");
  let placemarkById = [];

  let url = ``;
  let weather = '';
  
  onMount(async (request) => {
    url = window.location.href
    console.log(url)
    let parsedURL = url.substring(34)
    placemarkById = await placemarkService.getPlacemarkById(parsedURL);
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

<div class="column box has-text-centered">
<h1 class="title is-4"><h1>{$placemark.name} Current Weather Readings</h1>
</div>

<table class="table is-fullwidth">
  <thead>
    <th>Temperature</th>
    <th>Clouds</th>
    <th>Wind Speed</th>
    <th>Wind Direction</th>
    <th>Visibility</th>
    <th>Humidity</th>
  </thead>
  <tbody>
      <tr>
        <td>
          {$placemark.temperature}
        </td>
        <td>
          {$placemark.clouds}
        </td>
        <td>
          {$placemark.windSpeed}
        </td>
        <td>
          {$placemark.windDirection}
        </td>
        <td>
          {$placemark.visibility}
        </td>
        <td>
          {$placemark.humidity}
        </td>
      </tr>
  </tbody>
  </table>
<br><br>
<PlacemarkMap/>