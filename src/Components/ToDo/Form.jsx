import { useState, useEffect } from "react";
/* eslint-disable react/prop-types */

function Form({ onAddItems, editItem, updateItem }) {
  const [task, setTask] = useState("");

  // Effect to populate the task when editing
  useEffect(() => {
    if (editItem) {
      setTask(editItem.task); // Set the task to the current item's task
    } else {
      setTask(""); // Reset task if no item is being edited
    }
  }, [editItem]);

  function handleSubmit(e) {
    e.preventDefault();
    const taskName = {
      id: editItem ? editItem.id : Date.now(), // Use existing ID if editing
      task: task,
    };

    if (editItem) {
      updateItem(taskName); // Call update function if editing
    } else {
      onAddItems(taskName); // Call add function if not editing
    }

    setTask(""); // Reset the input field after adding or editing
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-form">
          <input
            type="text"
            className="input-field"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button className="add-button">{editItem ? "Update" : "Add"}</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
