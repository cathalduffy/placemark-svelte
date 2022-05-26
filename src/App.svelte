<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Report from "./pages/Report.svelte";
  import Donate from "./pages/Donate.svelte";
  import Router from "svelte-spa-router";
  import {PlacemarkService} from "./services/placemark-service";
  import {setContext} from "svelte"; //context object to be retrieved from any component in our application

  setContext("PlacemarkService", new PlacemarkService("http://localhost:4000")); //import instance of class on other server

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/donate": Donate,
    "/report": Report,
    "/logout": Main
  } 
</script>

<div class="container">
  <Router {routes}/>
</div>
