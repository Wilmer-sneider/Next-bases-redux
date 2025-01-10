"use client";

import { useAppDispatch, useAppSelector } from "@/src/store/hooks/hook";
import { addTask } from "@/src/store/storeSlices/todoSlice";
import { useState } from "react";

export default function TodoPage() {
  const patch = useAppDispatch();
  const tasks = useAppSelector((state) => state.todo.task);
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    patch(addTask({ title }));
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="titulo de tarea"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={handleAddTask}
        className="bg-green-400 px-2 rounded-sm m-4"
      >
        Agregar Tarea
      </button>

      <div>
        {tasks.map((task) => (
          <p key={task.id}>{task.title}</p>
        ))}
      </div>
    </div>
  );
}
