<script lang="ts">
    import ButtonWide from "components/ButtonWide.svelte";

    function onButtonClicked() {
        alert('Clicked');
    }
</script>

<h1 class='text-black'>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="w-80">
    <ButtonWide on:click={onButtonClicked}>Click me</ButtonWide>
</div>

