<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Report from "./pages/Report.svelte";
  import Placemark from "./pages/Placemark.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Router from "svelte-spa-router";
  import Category from "./pages/Category.svelte";
  import Map from "./pages/Map.svelte";
  import {PlacemarkService} from "./services/placemark-service";
  import {CategoryService} from "./services/category-service";
  import {setContext} from "svelte"; //context object to be retrieved from any component in our application

  setContext("PlacemarkService", new PlacemarkService("https://serene-shore-88421.herokuapp.com")); //import instance of class on other server
  setContext("CategoryService", new CategoryService("https://serene-shore-88421.herokuapp.com"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/placemark/*": Placemark,
    "/report": Report,
    "/map": Map,
    "/dashboard": Dashboard,
    "/category": Category,
    "/category/*": Category,
    "/logout": Main,
  } 
</script>

<div class="container">
  <Router {routes}/>
</div>
