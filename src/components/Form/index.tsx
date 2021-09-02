import { useState } from 'react'
import { addTodo, addTodoAsync } from '../../redux/features/todos'
import { useAppDispatch } from '../../redux/hooks'

const Form = () => {
  const dispatch = useAppDispatch()
  const [text, setText] = useState('')

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" onClick={() => dispatch(addTodo(text))}>
        Add
      </button>
      <button type="submit" onClick={() => dispatch(addTodoAsync(text))}>
        AddAsync
      </button>
    </div>
  )
}

export default Form
