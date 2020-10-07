import React from "react";
import Item from "./Item";

const Column = ({ columnData, updateColumnTasks, id }) => {
  function itemDragged(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("sourceColumnId", id);
    ev.dataTransfer.dropEffect = "move";
  }

  function itemDropStart(ev) {
    ev.preventDefault();
  }

  function itemDragOver(ev) {
    ev.preventDefault();
  }

  function itemDropped(ev) {
    ev.preventDefault();
    // get task id, source column id and target column id
    let targetColumnId = ev.target.id;

    let data = ev.dataTransfer.getData("text");
    let sourceColumnId = ev.dataTransfer.getData("sourceColumnId");
    // invoke the function to update column
    updateColumn(data, sourceColumnId, targetColumnId);
  }

  function updateColumn(taskId, sourceColumnId, targetColumnId) {
    updateColumnTasks(taskId, sourceColumnId, targetColumnId);
  }

  return (
    <div
      onDragEnter={(ev) => itemDropStart(ev)}
      onDragOver={(ev) => itemDragOver(ev)}
      onDrop={(ev) => itemDropped(ev)}
      className="bg-gray-300 px-2 rounded mr-2 w-64"
      id={id}
    >
      <div className="py-2 font-bold tracking-wide"> {columnData.name} </div>
      <div>
        {columnData.tasks.map((task) => (
          <Item
            itemDragged={itemDragged}
            key={task.id}
            id={task.id}
            task={task.task}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
