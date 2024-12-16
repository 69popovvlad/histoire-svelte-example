<script lang="ts">
  import { logEvent } from 'histoire/client';
  import type { Hst } from '@histoire/plugin-svelte';
  import ButtonWide from '$lib/components/button/ButtonWide.svelte';

  export let Hst: Hst;

  let text;
  $: text = text && text != '' ? text : undefined;
  let disabled = false;

  let source;

  $: {
    source = `<ButtonWide`;
    if (disabled) {
      source += ` disabled`;
    }
    if (text) {
      source += ` text='${text}'`;
    }
    source += `/>`;
  }
</script>

<Hst.Story title="ButtonWide" {source}>
  <ButtonWide {disabled} {text} on:click={(event) => logEvent('click', event)}
  ></ButtonWide>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={text} title="Text" />

    <Hst.Checkbox bind:value={disabled} title="Disabled" />

    <pre>{JSON.stringify({ disabled, text }, null, 2)}</pre>
  </svelte:fragment>
</Hst.Story>
