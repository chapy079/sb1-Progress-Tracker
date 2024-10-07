import React, { useState } from 'react';
import { Layers, BookOpen, Book, CheckSquare, DollarSign, Home } from 'lucide-react';
import ProjectCounter from './components/ProjectCounter';
import LessonLogger from './components/LessonLogger';
import DailyJournal from './components/DailyJournal';
import TaskManager from './components/TaskManager';
import DebtPayoffTracker from './components/DebtPayoffTracker';
import HomePage from './components/HomePage';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // TODO: Implement actual login logic
    setIsLoggedIn(true);
    setActiveTab('projects');
  };

  if (!isLoggedIn) {
    return <HomePage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Progress Tracker</h1>
      </header>
      <main className="flex-grow flex">
        <nav className="bg-gray-800 text-white w-64 p-4">
          <ul>
            <li className={`mb-2 ${activeTab === 'home' ? 'font-bold' : ''}`}>
              <button onClick={() => setActiveTab('home')} className="flex items-center">
                <Home className="mr-2" /> Home
              </button>
            </li>
            <li className={`mb-2 ${activeTab === 'projects' ? 'font-bold' : ''}`}>
              <button onClick={() => setActiveTab('projects')} className="flex items-center">
                <Layers className="mr-2" /> Projects
              </button>
            </li>
            <li className={`mb-2 ${activeTab === 'lessons' ? 'font-bold' : ''}`}>
              <button onClick={() => setActiveTab('lessons')} className="flex items-center">
                <BookOpen className="mr-2" /> Lessons
              </button>
            </li>
            <li className={`mb-2 ${activeTab === 'journal' ? 'font-bold' : ''}`}>
              <button onClick={() => setActiveTab('journal')} className="flex items-center">
                <Book className="mr-2" /> Journal
              </button>
            </li>
            <li className={`mb-2 ${activeTab === 'tasks' ? 'font-bold' : ''}`}>
              <button onClick={() => setActiveTab('tasks')} className="flex items-center">
                <CheckSquare className="mr-2" /> Tasks
              </button>
            </li>
            <li className={`mb-2 ${activeTab === 'debt' ? 'font-bold' : ''}`}>
              <button onClick={() => setActiveTab('debt')} className="flex items-center">
                <DollarSign className="mr-2" /> Debt Tracker
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex-grow p-8">
          {activeTab === 'home' && <HomePage onLogin={handleLogin} />}
          {activeTab === 'projects' && <ProjectCounter />}
          {activeTab === 'lessons' && <LessonLogger />}
          {activeTab === 'journal' && <DailyJournal />}
          {activeTab === 'tasks' && <TaskManager />}
          {activeTab === 'debt' && <DebtPayoffTracker />}
        </div>
      </main>
    </div>
  );
}

export default App;