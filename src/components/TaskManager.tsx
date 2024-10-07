import React, { useState, useEffect } from 'react';

interface Task {
  id: number;
  content: string;
  category: 'prompting' | 'coding' | 'youtube';
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState<'prompting' | 'coding' | 'youtube'>('coding');

  useEffect(() => {
    // TODO: Fetch tasks from Supabase
  }, []);

  const handleAddTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        content: newTask,
        category,
        completed: false,
      };
      setTasks([...tasks, task]);
      setNewTask('');
      // TODO: Add task to Supabase
    }
  };

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    // TODO: Update task in Supabase
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Add a new task..."
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as 'prompting' | 'coding' | 'youtube')}
          className="mt-2 p-2 border rounded"
        >
          <option value="prompting">Prompting</option>
          <option value="coding">Coding</option>
          <option value="youtube">YouTube</option>
        </select>
        <button
          onClick={handleAddTask}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              className="mr-2"
            />
            <span className={task.completed ? 'line-through' : ''}>
              {task.content} - <small className="text-gray-500">{task.category}</small>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;