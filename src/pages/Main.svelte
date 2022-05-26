<script>
  import homer from "/src/assets/logo.png";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import {getContext} from "svelte";

  const placemarkService = getContext("PlacemarkService");
  placemarkService.logout();
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Donation Services Inc."} subTitle={"Sign up or Log in"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <img width="300" src="{homer}" alt="homer">
  </div>
  <div class="column">
    <h1 class="title">Leave Your Mark</h1>
    <p>Leave a Placemark and share the beauty that you've seen</p>
  </div>
</div>
