<script>
    
</script>

<section class="list-container">
    <ul>
        <li>식당 1</li>
        <li>식당 2</li>
        <li>식당 3</li>
    </ul>
</section>

<style>
    .list-container {
        width: 100%;
        /* 최상단 메뉴 있을 경울 - 50*/
        max-height: calc(100vh - 310px); 
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

    .list-container ul {
    width: 600px;
    }

    .list-container ul li {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px 20px;
    background-color: #ffffff;
    font-size: 1rem;
    color: #444444;
    border-bottom: 1px solid #eaeaea;    
    }

    .list-container ul li:last-child {

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;  
    }

    .list-container ul li span {
    padding: 7px;
    }

    .list-container ul li input[type="checkbox"] {
    width:20px;
    height: 20px;
    margin-right: 15px;
    }

    .list-container ul li input[type="text"] {
    padding: 10px;
    width: 600px;
    border: 1px solid #717171;
    z-index: 1000;
    font-size: 1rem;
    }

    .list-container ul li a {
    position: absolute;
    top: 25px;
    right: 20px;
    text-decoration: none;
    color: #444444;
    }

</style>