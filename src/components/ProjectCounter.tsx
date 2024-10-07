import React, { useState, useEffect } from 'react';

const ProjectCounter: React.FC = () => {
  const [projects, setProjects] = useState<{ created: number; shipped: number }>({ created: 0, shipped: 0 });

  useEffect(() => {
    // TODO: Fetch project data from Supabase
  }, []);

  const handleIncrement = (type: 'created' | 'shipped') => {
    setProjects(prev => ({ ...prev, [type]: prev[type] + 1 }));
    // TODO: Update project count in Supabase
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Project Counter</h2>
      <div className="flex justify-between">
        <div>
          <p className="text-lg">Created: {projects.created}</p>
          <button
            onClick={() => handleIncrement('created')}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Created Project
          </button>
        </div>
        <div>
          <p className="text-lg">Shipped: {projects.shipped}</p>
          <button
            onClick={() => handleIncrement('shipped')}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Shipped Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCounter;