
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text:"hello world", }],
    editTodo:null 
    
}


const todoslice = createSlice({
    name:'todo' ,
    initialState ,
    reducers:{

        addTodo: (state, action) =>{
            const todo = {
                id:nanoid(), 
                text:action.payload,
            }
            state.todos.push(todo) ;
        } ,
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) =>{
             return   todo.id !== action.payload
            })
        },

        updateTodo: (state, action) => { 

            const  {todoId, newText, } = action.payload ;
         
            const updateTodo = state.todos.find(todo => todo.id === todoId) ;
        
            if (updateTodo) {
                updateTodo.text = newText ;

            }else   console.warn("Todo not found for ID:", todoId);

        },

           setEditTodo: (state, action) => {
      state.editTodo = action.payload; 
    },

    
    clearEditTodo: (state) => {
      state.editTodo = null;
    }
 
    }

    
})

export const {addTodo, removeTodo, updateTodo, setEditTodo, clearEditTodo} = todoslice.actions ;

export  default todoslice.reducer ;