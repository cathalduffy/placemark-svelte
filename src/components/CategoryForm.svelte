<script>
  import { push } from "svelte-spa-router";
  import { getContext } from "svelte";

  let title = "";
  let errorMessage = "";

  const categoryService = getContext("CategoryService");

  async function createCategory() {
    let success = await categoryService.createCategory(title)
    if (success) {
      push("/");
    } else {
      errorMessage = "Error creating category";
    }
  }
</script>

<form on:submit|preventDefault={createCategory}>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label for="title" class="label">Category Title</label>
          <input bind:value={title} id="title" class="input" type="text" placeholder="Enter Category Title" name="title">
        </div>
    <div class="field is-grouped">
      <button class="button is-link">Create Category</button>
    </div>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}