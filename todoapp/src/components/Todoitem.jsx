import styles from "./todoitem.module.css";
export default function Todoitem({item,todos,setTodos})//destructing a prop.
{
    function handleDelete(item)
    {
        console.log("Delete button clicked for item",item); 
        setTodos(todos.filter((todo)=>todo !== item));//the todo.filter is also same like a map in react it first retrives all the elements in the list if the list item matches to the todo it deletes.         
    }
    function handleClick(name)//we are writing parameter name as name because when we click on the partcular item in the todolist it should appear like item clicked on name of the todo list item.
    {
        
    
    setTodos(todos.map((todo)=>
        todo.name === name? {...todo,done:!todo.done}:todo))
    
    }
    const className = item.done ? styles.completed : "";
    return (
    <div className={styles.item}> 
        <div className={styles.itemName}>
            <span className={className} onClick={()=>handleClick(item.name)}>
                {item.name}
                </span>
            
        <span>
            <button 
            onClick={() => handleDelete(item)}  
            className={styles.deletebutton}
            >
                x
            </button>
        </span>
        </div>
       
        <hr className={styles.line}/>
    </div>
    );
}