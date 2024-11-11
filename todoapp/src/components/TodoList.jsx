import Todoitem from "./Todoitem";
import styles from "./todolist.module.css";
export default function TodoList({todos,setTodos})
{
    const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))

    return (
        <div className={styles.list}>
        {sortedTodos.map((item) => (
        <Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
        //creating a prop and destructuring the prop it means directly calling in the function paremeter
        //we are using key={item} beacuase to get rid of the unique key for each item beacause in react we cannot use same child name for two different things
    ))}
    </div>
    );
}