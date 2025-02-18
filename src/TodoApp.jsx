import { useState } from "react";

function TodoApp() {
  
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // konstanta untuk nambah todo
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // sedangkan ini untuk menghapus
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
          {/* Header Konten */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            📝 To-Do List
          </h1>

          {/* Input & Tombol */}
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Tambahkan tugas..."
              className="flex-1 px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTask}
              className="px-6 py-3 bg-green-500 text-white rounded-md text-lg hover:bg-green-600 transition"
            >
              ➕ Tambah
            </button>
          </div>
  
          {/* Grid List Tugas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.length === 0 ? (
              <p className="text-gray-500 text-center col-span-3">
                📌 Belum ada tugas, tambahkan sekarang!
              </p>
            ) : (
              tasks.map((t, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <span className="text-gray-800 text-lg font-medium">{t}</span>
                  <button
                    onClick={() => removeTask(index)}
                    className="text-red-500 text-lg hover:text-red-700 transition"
                  >
                    ❌
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
  );
}

export default TodoApp;
