<script>
	import { locationList, searchText } from "../../utils/store";
    
</script>
<section class="list-container">
    {#if !$searchText.length}
        <h2 class="title">추천 맛집 리스트</h2>
        
    {:else if $searchText.length && !$locationList.length}
        <h2 class="title">검색 결과가 없습니다. </h2>
    {:else}
    <ul>
        {#each $locationList as location (location.id)}
        <li>
            <h2><a href="{location.place_url}">{location.place_name}</a></h2>
            <span>주소: {location.road_address_name}</span>
            <span>카테고리: {location.category_name}</span>
            <span>전화번호: {location.phone}</span>
        </li>
        {/each}
    </ul>
    {/if}
</section>

<style>
    .list-container {
        width: 600px;
        /* 최상단 메뉴 있을 경울 - 50*/
        max-height: calc(100vh - 680px); 
        min-height: 310px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 10px 5px 5px #e7e7e7;   

        overflow-y: scroll;
        /* 스크롤 숨기고 스크롤은 되게: IE, Edge, Firefox */
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */       
    }

    .list-container::-webkit-scrollbar  {
        display: none;
    }

    .list-container .title{
        padding: 15px;
    }

    .list-container ul {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .list-container ul li {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 15px 20px;
        background-color: #ffffff;
        font-size: 0.8rem;
        color: #444444;
        border-bottom: 1px solid #eaeaea;    
    }

    .list-container ul li:last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;  
    }

    .list-container ul li span, h2 {
        padding: 7px;
    }

</style>