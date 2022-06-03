<script>
  import navigation from "/src/assets/map.png";
  import PlacemarkList from "../components/PlacemarkList.svelte";
  import {getContext, onMount} from 'svelte'
  import Chart from 'svelte-frappe-charts';
  const placemarkService = getContext("PlacemarkService");

  let url = ``;

  let placemarkList = [];
  let data = {
    labels: ["Tramore", "Dunmore"],
    datasets: [
      {
        values: [0,0]
      }
    ]
  };

  onMount(async (request) => {
    url = window.location.href
    console.log(url)
    let parsedURL = url.substring(33)
    placemarkList = await placemarkService.getPlacemarks(parsedURL);;
    placemarkList.forEach(placemark => {
      if (placemark.name == "Tramore") {
        data.datasets[0].values[0] += placemark.amenitiesRating
      } else if (placemark.name == "Dunmore") {
        data.datasets[0].values[1] += placemark.amenitiesRating
      }
    })
  });

</script>

<div class="columns">
  <div class="column box has-text-centered">
    <h1 class="title is-4">Placemark Ratings</h1>
    <Chart data={data} type="bar"/>
  </div>
</div>