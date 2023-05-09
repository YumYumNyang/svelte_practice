<script>
    import { onMount } from "svelte";

    onMount(() => {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        const mapOption = { 
            center: new kakao.maps.LatLng(37.401, 127.108), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };
        const map = new kakao.maps.Map(mapContainer, mapOption); 
        const ps = new kakao.maps.services.Places(); 
    })

</script>
<svelte:head>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey={import.meta.env.VITE_KAKAOMAPKEY}"></script>
</svelte:head>
<div id="map" style="width:100%;height:400px;"></div>