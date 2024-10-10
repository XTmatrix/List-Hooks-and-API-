import { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./style.css";

function Todo() {
  const [names, setNames] = useState([]);
  const [editItem, setEditItem] = useState(null); // Add state for editing

  function handleAddItems(name) {
    setNames([...names, name]);
  }

  function handleDelete(id) {
    setNames((names) => names.filter((name) => id !== name.id));
  }

  function handleEdit(id) {
    const itemToEdit = names.find((name) => id === name.id); // Find the item to edit
    setEditItem(itemToEdit); // Set it to edit
  }

  function updateItem(updatedItem) {
    const updatedNames = names.map((name) =>
      name.id === updatedItem.id ? updatedItem : name
    );
    setNames(updatedNames);
    setEditItem(null); // Reset edit item after update
  }

  return (
    <div className="container">
      <p>Grocery Shopping</p>
      <Form
        onAddItems={handleAddItems}
        editItem={editItem}
        updateItem={updateItem}
      />
      <List item={names} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default Todo;
