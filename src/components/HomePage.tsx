import React from 'react';
import { LogIn } from 'lucide-react';

interface HomePageProps {
  onLogin: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Welcome to Progress Tracker</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Track your projects, lessons, tasks, and more to accelerate your growth as a developer and content creator.
      </p>
      <button 
        onClick={onLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-600 transition-colors"
      >
        <LogIn className="mr-2" />
        Login to Get Started
      </button>
    </div>
  );
};

export default HomePage;