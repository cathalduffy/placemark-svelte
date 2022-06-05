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
    <TitleBar subTitle={"What we are about..."} title={"The Placemark Application"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="column box has-text-centered">
    <h1 class="title is-4">The Placemark Application</h1>
</div>
<div class="column box">
<h1 class="title is-4">What We Do</h1>
    <p>
    Have you ever wanted to remember something? A night out. A dinner with friends. A backpacking trip.
    Leave a placemark — and you’ll never forget.
    Life happens everywhere.
    The Placemark Application helps you keep track of where you go ad fun places that you have been.
    Capture a moment - how you feel & what you’re doing.
    See the placemarks your friends leave.
    Check-out what people are doing nearby.
    </p>
 <br><br><br>

<h1 class="title is-4">Features Of The Placemark Application</h1>
    <p>Sign up, log in, add & view placemarks left by others of their favourite areas.</p>
    <br>
    <p>Add your placemarks into different categories, for ease of access.</p>
    <br>
    <p>Add placemarks, including their latitude and longitude, along with the ratings of the different types of facilities.</p>
    <br>
    <p>When a placemark's latitude and longitude have been added, the user will be able to see weather live data at that particular moment on the placemark page.</p>
    <br>
    <p>View various types of interactive maps, including maps of a category level, a placemark level and as below, all placemarks added by all users.</p>

</div>
<br><br><br>

<div class="column box has-text-centered">
    <h1 class="title is-4">See All Placemarks</h1>
    <AllPlacemarksMap/>
</div>
