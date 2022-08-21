import React from "react";

const Todoinput = ({ handleClick }) => {
  const [title, setTitle] = React.useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Add Grocery"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => handleClick(title)}>Add</button>
    </div>
  );
};
export { Todoinput };
