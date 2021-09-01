import { ITodo } from '../interfaces/ITodo'

interface IResponse {
  data: ITodo
}

const addTodoAsync = (text: string) => {
  return new Promise<IResponse>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: {
            id: Math.random().toString(),
            complete: false,
            text
          },
        }),
      2000,
    ),
  )
}

export default addTodoAsync
