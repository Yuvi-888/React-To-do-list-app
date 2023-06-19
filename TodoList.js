import React, { useState } from "react";

export default function TodoList() {
  const [task, settask] = useState('');
  const [list, setlist] = useState([]);

  function add_btn() {
    setlist((list) => {
      const list_data = [...list, task]
      settask('')
      return list_data
    })
  }
  
  function remove_btn(i){
    const updated_list=list.filter((element,id)=>{
      return i!=id
    })
    setlist(updated_list)
  }
  return (
    <>
      <div className="container">
        <h1 className="app_heading">📝To-Do List</h1>

        <input
          type="text"
          placeholder="Enter your task:"
          onChange={(e) => settask(e.target.value)}
        />
        <button className="add_btn" onClick={add_btn}>
          +
        </button>

          <h2 className="list_heading">Task/Tasks</h2>
          <div className="list_container">
          {list!=[] &&
            list.map((data, i) => {
              return (
                <>
                  <div className="list_items" key={i}> {data}  <button onClick={()=>remove_btn(i)} className="remove_btn">x</button></div>
                
                </>
                
              );
            })}
      </div>
      </div>
    </>
  );
}
