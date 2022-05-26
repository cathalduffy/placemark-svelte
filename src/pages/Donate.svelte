<script>
  import navigation from "/src/assets/map.png";
  import DonateForm from "../components/DonateForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Please leave a Placemark"} title={"The Placemark Application"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    <img alt="Homer" src={navigation} width="300"/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Give Generously!</h1>
    <DonateForm/>
  </div>
</div>
