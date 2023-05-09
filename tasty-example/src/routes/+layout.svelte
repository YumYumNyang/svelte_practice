<script>
	import { writable } from "svelte/store";
	import Header from "../components/common/Header.svelte";
	import { setContext } from "svelte";

</script>

<div class="app">
<Header/>
<main>
    <slot></slot>
</main>

</div>