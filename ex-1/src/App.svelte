<script>
	import Modal from "./modal.svelte";
	let modalActive1 = false
	let modalActive2 = false
</script>
<button on:click={() => modalActive1 = true}>Modal POPUP 1</button>
<button on:click={() => modalActive2 = true}>Modal POPUP 2 </button>

<Modal bind:modalActive={modalActive1}>
	<h2 slot="header">
		Modal POPUP TITLE 1
	</h2>
	<p slot="content">
		MODAL POPUP <b> CONTENT 1 </b>
	</p>
</Modal>

<Modal bind:modalActive={modalActive2}>
	<h2 slot="header">
		Modal POPUP TITLE 2
	</h2>
	<p slot="content">
		MODAL POPUP <b> CONTENT 2</b>
	</p>
</Modal>

<style>
</style>