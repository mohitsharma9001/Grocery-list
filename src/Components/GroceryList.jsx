import React from "react";

const Todoitem = ({ title, id, status, handleToggle, handleDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <h1>{title}</h1>
      <h1>{status ? "Completed" : "Not Completed"}</h1>
      <button onClick={() => handleToggle(id)}>Update Todo</button>
      <button onClick={() => handleDelete(id)}>Delete Todo</button>
    </div>
  );
};
export { Todoitem };
