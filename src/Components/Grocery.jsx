import React from "react"
import { v4 as uuid } from "uuid";
import { Todoinput } from "./GroceryInput";
import { Todoitem } from "./GroceryList";
 
const Todo = ()=>{
  const [data,setData] = React.useState([]);
  const [showAll, setShowAll] = React.useState(true);

  const handleClick =(title)=> {
    let payload = {
      title:title,
      status: false,
      id: uuid()
};
setData([...data,payload]);
  };

  const handleToggle = (id)=>{
    const updatedData = data.map((item) =>
    item.id === id ? { ...item, status: !item.status } : item
  );
  setData(updatedData)
  }
const handleDelete = (id)=>{
  const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
}
return <div>
    <Todoinput handleClick ={handleClick}/>
    {
      data
      .filter((item) => (showAll ? true : !item.status))
      .map((item)=>(
        <Todoitem
            key={item.id}
            {...item}
            handleToggle = {handleToggle}
            handleDelete = {handleDelete}
            />
      ))
      
    }
    <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Only unfinished tasks" : "Show All Tasks"}
      </button>
  </div>
}

export default Todo