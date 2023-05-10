<script>
	import Map from "../components/common/Map.svelte";
    import RestaurantList from "../components/location-list/LocationList.svelte";
	import SearchResult from "../components/location-list/SearchResult.svelte";
</script>
<svelte:head>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey={import.meta.env.VITE_KAKAOMAPKEY}&libraries=services"></script>
</svelte:head>
<Map/>
<SearchResult/>
<RestaurantList/>
