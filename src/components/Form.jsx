import { useEffect, useState } from "react";
import bin from "../assets/bin.svg";
import List from "./List";

const Form = () => {
  const [newItem, setNewItem] = useState('');
  const [todo, setTodo] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return []

    return JSON.parse(localValue);
  });


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo))
  }, [todo])

  function handleSubmit(e) {
    e.preventDefault();

    if (!newItem) {
      alert('Please add new Item');
      return
    }

    setTodo(currentTodo => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(), title: newItem, completed: false
        },
      ]
    });

    setNewItem('');
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-stone-950">
      <div className="h-4/5 md:w-[40%] sm:w-[70%] w-[90%] flex flex-col gap-8 p-6">
        <form onSubmit={handleSubmit}>
          <label htmlFor="item" className="text-white font-semibold text-3xl">To do list</label>
          <p className="leading-6 text-zinc-500 text-xs">Set To Dos</p>
          <div className="h-5/6 w-full mt-8 b rounded m-0 self-center">
            <div className="flex w-full items-center rounded bg-transparent border border-zinc-700">
              <input
                id="item"
                type="text"
                placeholder="To Do..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                className="w-full border-none bg-transparent px-4 py-2 text-stone-300 focus:outline-none placeholder:text-zinc-500 text-sm" />
              <button className="border border-zinc-800 rounded-xs mr-1 px-5 py-1 text-zinc-300 font-semibold text-[12px] bg-zinc-900 hover:bg-zinc-800 transition-all active:scale-[.95] origin-center">add</button>
            </div>
          </div>
        </form>
        <List
          todo={todo}
          bin={bin}
          setTodo={setTodo} />
      </div>
    </main>
  );
};



export default Form;