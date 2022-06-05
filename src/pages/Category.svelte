<script>
  import navigation from "/src/assets/map.png";
  import PlacemarkList from "../components/PlacemarkList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import CategoryMap from "../components/CategoryMap.svelte";
  import PlacemarkForm from "../components/PlacemarkForm.svelte";
  import CategoryChart from "../components/CategoryChart.svelte";

  let categoryMap = null;

  function placemarkAdded(event) {
    categoryMap.addPlacemarkMarker(event.detail.placemark);
  }
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Categories so far..."} title={"The Placemark Application"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">

  <div class="column box has-text-centered">
    <h1 class="title is-4">Placemarks to date</h1>
    <PlacemarkList/>
  </div>
</div>
<div class="columns">
  <div class="column has-text-centered">
   <CategoryMap bind:this={categoryMap}/>
  </div>
  <div class="column has-text-centered">
   <PlacemarkForm on:message={placemarkAdded}/>
  </div>
</div>

<CategoryChart/>




