
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, setEditTodo } from "../features/todo/toddSlice";
import { useState } from "react";
import { rules } from "eslint-plugin-react-refresh";

const Todo = () =>{

     const [update, setUpdate] = useState(false)
     const todo = useSelector(state =>state.counter.todos) ;

      const dispatch = useDispatch() ;

      function clickToedit(e) {
        setUpdate(true) ;

      }


    return <div>

    <ul className="w-full max-w-md mx-auto  shadow-md rounded-lg  mt-3">

      {todo.map((item, ind) =>{
        // console.log(item.id)

        return (<li className="flex justify-between items-center text-white px-4 py-2 border-b border-gray-300 rounded-md w-full break-words">{item.text}

        <div className="flex gap-2 cursor-pointer">

                  <span class="material-symbols-outlined" onClick={(e) => dispatch(setEditTodo({id:item.id , text:item.text, udatedValue:clickToedit()})) }>
edit
</span>

<span class="material-symbols-outlined cursor-pointer" onClick={() => dispatch(removeTodo(item.id))}>
delete
</span>
        </div>

        </li>)
      })}
 
</ul>

    </div>
}

export default Todo ;