import { derived, writable } from "svelte/store";



function setSearchText(){
    const searchText = ''

    const {subscribe, set} = writable(searchText);

    const resetForm = () => {
        set('');
    }

    return {
        subscribe, set, resetForm
    }
}

function setMapList(){
    let mapList = [];

    const {subscribe, update} = writable(mapList);

    return {
        subscribe, update
    }
}

// function setFetchMapList(){
//     const fetch = derived(

//     )
// }

export const searchText = setSearchText(); 
export const mapList = setMapList();