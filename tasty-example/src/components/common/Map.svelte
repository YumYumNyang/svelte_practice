<script>
    import { onMount } from "svelte";
    import { locationList, mapInfo, markers } from "../../utils/store";
	import { onDestroy, subscribe } from "svelte/internal";

    onMount(() => {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        const mapOption = { 
            center: new kakao.maps.LatLng(37.401, 127.108), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };
        $mapInfo.map = new kakao.maps.Map(mapContainer, mapOption); 
    })
    
    const unsubscribe = markers.subscribe(value => console.log(value)); 
    
    onDestroy(unsubscribe);
</script>

<div id="map" style="width:100%;height:400px;"></div>