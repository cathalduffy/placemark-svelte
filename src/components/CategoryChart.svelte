<script>
  import navigation from "/src/assets/map.png";
  import PlacemarkList from "../components/PlacemarkList.svelte";
  import {getContext, onMount} from 'svelte'
  import Chart from 'svelte-frappe-charts';
  const placemarkService = getContext("PlacemarkService");
  const categoryService = getContext("CategoryService");


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

  let totalByCategory = {
    labels: [],
    datasets: [
      {
        values: []
      }
    ]
  }

  onMount(async (request) => {
    url = window.location.href
    console.log(url)
    let parsedURL = url.substring(33)
    placemarkList = await placemarkService.getPlacemarks(parsedURL);
    placemarkList.forEach(placemark => {
      if (placemark.name == "Tramore") {
        data.datasets[0].values[0] += placemark.amenitiesRating
      } else if (placemark.name == "Dunmore") {
        data.datasets[0].values[1] += placemark.amenitiesRating
      }
    });

    let categories = await categoryService.getCategories();
    totalByCategory.labels = [];
    categories.forEach(category => {
      totalByCategory.labels.push(`${category.title}`)
      totalByCategory.datasets[0].values.push(0);
    })
    categories.forEach((category, i) => {
      placemarkList.forEach(placemark => {
        if (placemark.categoryid == category._id) {
          totalByCategory.datasets[0].values[i] += placemark.amenitiesRating;
        }
        console.log(placemark.categoryid._id)
      });
    });
  });


</script>

<div class="columns">
  <div class="column box has-text-centered">
    <h1 class="title is-4">Placemark Ratings</h1>
    <Chart data={data} type="bar"/>
  </div>
    <div class="column has-text-centered">
    <h1 class="title is-4">By Category</h1>
    <Chart data={totalByCategory} type="bar"/>
  </div>
</div>