<script>
  import navigation from "/src/assets/map.png";
  import PlacemarkList from "../components/PlacemarkList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import {getContext, onMount} from 'svelte'
  import {placemark} from "../stores";


  const placemarkService = getContext("PlacemarkService");
  let placemarkById = [];

  let url = ``;
  let name = $placemark.name;


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

<p>{$placemark.id}</p>
<p>{$placemark.name}</p>
<p>{$placemark.latitude}</p>
<p>{$placemark.longitude}</p>












