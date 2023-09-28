/** Box: individual box with CSS styling.
 *
 * Props -
 * width: width of box in px
 * height: height of box in px
 * bgColor: background-color
 * id: unique identifier
 * removeBox: function to remove box with specific id
 *
 * BoxList -> Box
 */

function Box({ width, height, bgColor, id, removeBox }) {
  console.log("background color", bgColor)
  return (
    <div className="Box">
      <div style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor
      }}>
      </div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>

  );

}

export default Box;