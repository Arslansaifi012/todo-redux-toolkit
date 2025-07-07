

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo,updateTodo,clearEditTodo } from '../features/todo/toddSlice';


import Todo from './Todo';


const AddTodo = () =>{

      const [input, setInput] = useState("") ;
      const [update, setUpdate] =  useState(false) ; 

      const edited = useSelector(state => state.counter.editTodo)
      // console.log(edited)
      const dispatch = useDispatch() ;


      function clickTod(e) {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Please enter todos");
      return;
    }

    if (edited) {
      dispatch(updateTodo({ todoId: edited.id, newText: input }));
      dispatch(clearEditTodo());
    } else {
      dispatch(addTodo(input));
    }

    setInput(""); 
  }


      

      useEffect(() =>{

        if (edited) {
      setInput(edited.text);   
    } else {
      setInput("");            
    }
    console.log("arslan useeffecty");
      },[edited])

  return (
    <div className="h-lvh flex items-center justify-center" style={{background: "linear-gradient(120deg, #1a1a2e, #16213e)", backdropFilter:" blur(15px)"}}>
      <div className="main bg-gray-800/40 backdrop-blur-sm w-full max-w-md p-6 text-center rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-white">Todo List</h1>

        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
            id="default-search"
            className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Add Todo's"
            required
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className="w-10 h-10 flex items-center justify-center text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
            onClick={clickTod}
            style={{borderRadius:"50%", fontSize:"x-larg"}}
          >
            +
          </button>
        </div>
      </form>

      <Todo />
    </div>
  </div>
)}

export default  AddTodo ;