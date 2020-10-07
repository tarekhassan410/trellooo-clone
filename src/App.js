import React from "react";
import Nav from "./Comps/Nav";
import "./App.css";
import Column from "./Comps/Columns/Column";

function App() {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "To do",
      tasks: [
        {
          id: 11,
          task: "Add tasks to terllo clone",
        },
        {
          id: 12,
          task: "Check email",
        },
      ],
    },
    {
      id: 2,
      name: "Doing",
      tasks: [
        {
          id: 21,
          task: "Add new tasks",
        },
      ],
    },
    {
      id: 3,
      name: "Review",
      tasks: [
        {
          id: 31,
          task: "Terllo clone",
        },
      ],
    },
    {
      id: 4,
      name: "Done",
      tasks: [
        {
          id: 42,
          task: "Dividing in columns",
        },
        {
          id: 43,
          task: "Design",
        },
        {
          id: 44,
          task: "Building with React",
        },
        {
          id: 45,
          task: "Celebrate",
        },
      ],
    },
  ]);

  function updateColumnTasks(taskId, sourceColumnId, targetColumnId) {
    let currentTasks = [...data];
    let returnedItemToPush;

    if (sourceColumnId == targetColumnId) {
      return;
    }

    returnedItemToPush = currentTasks[sourceColumnId - 1].tasks.filter(
      (task) => task.id == taskId
    );

    currentTasks[sourceColumnId - 1].tasks = currentTasks[
      sourceColumnId - 1
    ].tasks.filter((task) => {
      return task.id != taskId;
    });
    currentTasks[targetColumnId - 1].tasks.push(...returnedItemToPush);

    setData([...currentTasks]);
  }

  return (
    <main className="bg-blue-400">
      <Nav />
      <div className="min-h-screen p-6 flex flex-row scrolling-auto overflow-x-scroll whitespace-no-wrap">
        {data.map((column) => (
          <Column
            updateColumnTasks={updateColumnTasks}
            id={column.id}
            key={column.id}
            columnData={column}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
