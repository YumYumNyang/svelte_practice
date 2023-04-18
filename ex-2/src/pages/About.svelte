<script>

	import { Route } from "tinro";
	import SubContent from "./SubContent.svelte";

</script>
<h1>About Page</h1>
<a href="/about/sub/123">Sub</a>
    
<hr>

<Route path="/sub/:_id">
    <SubContent/>
</Route>

