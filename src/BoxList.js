import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from './NewBoxForm';
import { useState } from 'react';


/** BoxList: Component to render all the boxes.
 *
 * State -
 * boxes: [] of box objects like { width, height, id, bgColor}
 *
 *  App -> BoxList -> (Box, NewBoxForm )
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);
  console.log("boxes in BoxList,", boxes)

  /** Add new box to state */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** Remove box with id from state */
  function removeBox(id) {
    setBoxes(boxes => boxes.filter((box) => box.id !== id));
  }

  /** Render Box for all objects in state */
  function renderBoxes() {
    return (
      boxes.map(box => (
        <Box
          key={box.id}
          width={box.width}
          height={box.height}
          bgColor={box.bgColor}
          id={box.id}
          removeBox={removeBox} />
      )
      )
    );
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;