import * as React from "react";
import AddTilebutton from "../AddTileButton/index";
import Tile from "../Tile";
import { useDispatch, useSelector } from "react-redux";
import { addTileWithChecking, removeTile } from "../../features/Grid/actions";

const colors = ["red", "blue", "pink", "yellow", "gray"];

export default function Grid() {
  const gridTiles = useSelector(state => state.grid);
  const dispatch  = useDispatch();
  return (
    <div>
      <div style={{maxWidth : 400, overflow : "hidden"}}>
        {
            gridTiles.map((tile, index) => {
                return <Tile {...tile} key={index} onDoubleClick={() => dispatch(removeTile(tile.id))}></Tile>
            })
        }
      </div>
      <div>
        {colors.map((color) => {
          return <AddTilebutton key={color} color={color} onClick={ () => dispatch(addTileWithChecking(color)) }/>;
        })}
      </div>
    </div>
  );
};
