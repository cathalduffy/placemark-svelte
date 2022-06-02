<script>
  import navigation from "/src/assets/map.png";
  import PlacemarkList from "../components/PlacemarkList.svelte";
  import {getContext, onMount} from 'svelte'
  import {placemark} from "../stores";
  import Chart from 'svelte-frappe-charts';
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
    let data = {
    labels: ["Amenities", "Food", "Cleanliness"],
    datasets: [
      {
        values: [$placemark.amenitiesRating, $placemark.foodRating, $placemark.cleanlinessRating]
      }
    ]
  };
</script>

<div class="columns">
  <div class="column box has-text-centered">
    <h1 class="title is-4">Placemark Ratings</h1>
    <Chart data={data} type="bar"/>
  </div>
</div>