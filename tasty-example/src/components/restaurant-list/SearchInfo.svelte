<div class="info">
    <span>검색 결과: </span>
    <div>
      <!-- <button class:selected={$todos.viewMode === Constant.ALL} class="btn" on:click={handleFetchTodoALL} >ALL</button>
      <button class:selected={$todos.viewMode === Constant.ACTIVE} class="btn" on:click={handleFetchTodoActive} >ACTIVE</button>
      <button class:selected={$todos.viewMode === Constant.DONE} class="btn" on:click={handleFetchTodoDone} >DONE</button> -->
    </div>  
  </div>
  
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