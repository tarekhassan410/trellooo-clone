import React from "react";

const Item = ({ task, itemDragged, id }) => {
  return (
    <div
      id={id}
      draggable="true"
      onDragStart={(event) => itemDragged(event)}
      className="rounded bg-white my-2 p-2 shadow text-sm cursor-pointer"
    >
      {task}
    </div>
  );
};

export default Item;
