<script>
  import navigation from "/src/assets/map.png";
  import PlacemarkList from "../components/PlacemarkList.svelte";
  import {getContext, onMount} from 'svelte'
  import Chart from 'svelte-frappe-charts';
  const placemarkService = getContext("PlacemarkService");
  const categoryService = getContext("CategoryService");

  let url = ``;

  let placemarkList = [];
  let placemarkData = {
    labels: [],
    datasets: [
      {
        values: []
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
    placemarkList.forEach((placemark,i) => {
      placemarkData.labels.push(`${placemark.name}`)
      placemarkData.datasets[0].values.push(0);
      placemarkData.datasets[0].values[i] += placemark.amenitiesRating
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
      });
    });
  });
</script>

<div class="columns">
  <div class="column box has-text-centered">
    <h1 class="title is-4">Amenity Ratings</h1>
    <Chart data={placemarkData} type="bar"/>
  </div>
    <div class="column has-text-centered">
    <h1 class="title is-4">By Category</h1>
    <Chart data={totalByCategory} type="bar"/>
  </div>
</div>