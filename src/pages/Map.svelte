<script>
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import PlacemarkMap from "../components/PlacemarkMap.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Map of Placemark Locations"} title={"Placemark Services Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

