<script lang="ts">
  export let text: string = 'Button text';
</script>

<button on:click {...$$restProps}>
  <h5>{text}</h5>
</button>

<style lang="postcss">
  button {
    @apply min-h-[67px] w-full rounded-[14px] bg-dark-900;
  }
</style>

<!--
@component
[Go to docs](https://username.github.io/repository-name/components)
## Props
@prop export let text: string = 'Button text';
-->
