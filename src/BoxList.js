import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = newState([]);

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (

  );
}

export default BoxList;