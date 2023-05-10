<script>
	import { onMount } from 'svelte';
    import { locationList, mapInfo, searchText } from '../../utils/store.js'

    onMount(() => {
        $mapInfo.ps = new kakao.maps.services.Places(); 

    })
    let timer;

    const onInput = e => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            $searchText = e.target.value;
            if($mapInfo.ps){
                if($searchText.length){
                    $mapInfo.ps.keywordSearch($searchText, locationList.fetchLocationList, {category_group_code :'FD6', useMapBounds: true})
                    console.log($locationList, "!")
                }else{
                    $locationList = [];
                }
            }
        }, 1000); 
    };
    
    
</script>

<input placeholder="식당 이름으로 검색하세요." bind:value={$searchText} on:input={onInput} type="text">
