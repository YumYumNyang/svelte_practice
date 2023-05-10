<script>
    import { searchText }from '../../utils/store'
</script>
{#if $searchText}
    <div class="info">
        <span>"{$searchText}"에 대한 검색 결과: </span>
    </div>
{/if}
  
<style>
    .info {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        background-color: #ffffff;
        box-shadow: 10px 5px 5px #e7e7e7;   
        border-bottom: 1px solid #EAE9EA;
    }

    .info span {
    color: #444444;
    }
</style>