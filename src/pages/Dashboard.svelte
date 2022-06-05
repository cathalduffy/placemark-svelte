<script>
  import navigation from "/src/assets/map.png";
  import CategoryForm from "../components/CategoryForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import CategoryList from "../components/CategoryList.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Please leave a Category"} title={"The Placemark Application"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    <img alt="Homer" src={navigation} width="350"/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Add A Category</h1>
    <CategoryForm/>
  </div>
</div>

<div class="column box has-text-centered">
    <h1 class="title is-4">Categories to date</h1>
    <CategoryList/>
</div>

