import React from 'react'

const List = ({ todo, bin, setTodo }) => {

  function toggleTodo(id, completed) {
    setTodo(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        };

        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <ul className="max-h-96 overflow-y-auto">
      {todo.length === 0 && <h2 className="font-xl text-zinc-300 text-center">No Todos</h2>}
      {todo.map(todos => {
        return (
          <li className="flex justify-between mt-3" key={todos.id}>
            <label className="flex items-center text-base font-medium text-zinc-200">
              <input
                type="checkbox"
                checked={todos.completed}
                onChange={(e) => toggleTodo(todos.id, e.target.checked)}
                className="mx-3 border h-4 w-4" />
              {todos.title}
            </label>
            <button
              onClick={() => deleteTodo(todos.id)}
              className="border border-zinc-800 rounded-xs mr-1 px-5 py-1 text-zinc-300 bg-red-800 hover:bg-red-700 transition-all active:scale-[.95] origin-center">
              <img
                src={bin}
                alt="trash bin"
                className="w-5 h-auto" />
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default List