import { removeTodo, selectTodos, toggleTodo } from '../../redux/features/todos'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const List = () => {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.complete ? <s>{todo.text}</s> : todo.text}
          <div>
            <button onClick={() => dispatch(toggleTodo(todo))}>Toggle</button>
            <button onClick={() => dispatch(removeTodo(todo))}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
