import { derived, writable } from "svelte/store";



function createLocationList(){

    const {subscribe, update, set} = writable([]); 

    const fetchLocationList = (data, status) => {
        if(status === kakao.maps.services.Status.OK){
            set([...data]);
        }
    }
    return {
        subscribe, update, set, fetchLocationList
    }
    
} 

function createSearchText(){
    
    const {set, subscribe} = writable('');

    const resetSearchText = () => {
        set('');
    }

    return {
        subscribe, set, resetSearchText,
    }
}

function createMap(){
    const {subscribe, update, set} = writable({map: null, ps: null});
    
    return {
         subscribe, update, set,
	};
    
}

function createMakers(){
    const markers = derived([locationList, mapInfo], ([$locationList, $mapInfo], set)=> {
        let markerList = $locationList.reduce((acc, place) => {
            acc.push(addMarker(place, $mapInfo.map))
            return acc;
        }, []) 
        set(markerList);
        return () => {
            markerList.forEach(marker => marker.setMap(null))
        }         
    })

    function addMarker(place, map){
        const marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(place.y, place.x), // 마커의 위치
            });
        marker.setMap(map);
        return marker;
    }

    return markers
}

export const locationList = createLocationList();
export const searchText = createSearchText();
export const mapInfo = createMap()
export const markers = createMakers();