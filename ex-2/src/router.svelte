<script>
	import { Route } from "tinro";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import NotFound from "./pages/NotFound.svelte";
	import SubContent from "./pages/SubContent.svelte";
	import Contacts from "./pages/Contacts.svelte";
	import Transition from "./components/Transition.svelte";

</script>
<Transition>
    <Route path="/" redirect="/home" ><Home/></Route>
    <Route path="/home" ><Home/></Route>
    <Route path="/about/*" >
        <About/>
        <!-- <Route path="/sub">
            <SubContent/>
        </Route> -->
    </Route>
    <Route path="/contacts" active-class="custom-active"><Contacts/></Route>
    <Route fallback><NotFound/></Route>
</Transition>