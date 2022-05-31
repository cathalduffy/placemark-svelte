<script>
  import {getContext, onMount} from 'svelte'

  let id = ""
  let title = "";

  const categoryService = getContext("PlacemarkService");
  let categoryList = [];

  onMount(async () => {
    categoryList = await categoryService.getCategories();
  });
</script>


  <thead>
    <th>Category Title</th>
  </thead>
    {#each categoryList as category}
  <div class= "box box-link-hover-shadow">
      <h2 class="title">
          {category.title}
      </h2>
    <a href="/#/category/{category._id}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
  </div>
    {/each}

    