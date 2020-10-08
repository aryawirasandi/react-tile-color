import {ADD_TILE, REMOVE_TILE} from "./constants";
function addTile(color){
    return {
        type : ADD_TILE,
        created_at : Date.now(),
        color
    }
}

function removeTile(id){
    return {
        type : REMOVE_TILE,
        id : id
    }
}

function addTileWithChecking(color){
    return function(dispatch, getState){
        if(getState().grid.length < 5){
            dispatch(addTile(color))
        }
    }
}

export {addTile, removeTile, addTileWithChecking}