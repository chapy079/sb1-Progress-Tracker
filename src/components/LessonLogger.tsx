import React, { useState, useEffect } from 'react';

interface Lesson {
  id: number;
  content: string;
  date: string;
}

const LessonLogger: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [newLesson, setNewLesson] = useState('');

  useEffect(() => {
    // TODO: Fetch lessons from Supabase
  }, []);

  const handleAddLesson = () => {
    if (newLesson.trim()) {
      const lesson: Lesson = {
        id: Date.now(),
        content: newLesson,
        date: new Date().toISOString(),
      };
      setLessons([lesson, ...lessons]);
      setNewLesson('');
      // TODO: Add lesson to Supabase
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Lesson/Mistake Logger</h2>
      <div className="mb-4">
        <textarea
          value={newLesson}
          onChange={(e) => setNewLesson(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="What did you learn today?"
          rows={3}
        />
        <button
          onClick={handleAddLesson}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Lesson
        </button>
      </div>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="border-b pb-2">
            <p>{lesson.content}</p>
            <small className="text-gray-500">{new Date(lesson.date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonLogger;