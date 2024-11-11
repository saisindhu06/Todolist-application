import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo()
{
   const [todos, setTodos]=useState([]);
   const completedTodos = todos.filter((todo)=>todo.done).length//This filter method is used to check how many items are done.
   const totalTodos = todos.length
   return (
   <div>
    <Form todos={todos} setTodos={setTodos} />
    <TodoList todos={todos} setTodos={setTodos}/>
    <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
   </div>
   );
}
