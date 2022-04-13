import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import {connect} from "react-redux"
import { markDone, deleteTodo } from "../../store/actions/TodoActions";
import FilterTodo from "../../utilities/filterTodo";

const TodoList = (props)=>{
    let {todos, markDone, status, deleteTodo} = props;
    // console.log('todos', todos)
    let filteredTodos = FilterTodo(todos,status)
    return(
        <ListGroup>
            {
                filteredTodos.map(todo=>
                    <TodoItem
                    todo={todo}
                    key={todo.id}
                    mark={markDone}
                    remove={deleteTodo}
                    />
                    )
            }
        </ListGroup>
    )
}

const mapDispatchToProps = state =>({
    todos:state.todos.todos,
    status: state.todos.filter
})

export default connect(mapDispatchToProps,{markDone,deleteTodo})(TodoList)