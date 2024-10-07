import React, { useState, useEffect } from 'react';

interface JournalEntry {
  id: number;
  content: string;
  date: string;
}

const DailyJournal: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');

  useEffect(() => {
    // TODO: Fetch journal entries from Supabase
  }, []);

  const handleAddEntry = () => {
    if (newEntry.trim()) {
      const entry: JournalEntry = {
        id: Date.now(),
        content: newEntry,
        date: new Date().toISOString(),
      };
      setEntries([entry, ...entries]);
      setNewEntry('');
      // TODO: Add entry to Supabase
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Daily Journal</h2>
      <div className="mb-4">
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Write your daily journal entry..."
          rows={5}
        />
        <button
          onClick={handleAddEntry}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Entry
        </button>
      </div>
      <ul className="space-y-4">
        {entries.map((entry) => (
          <li key={entry.id} className="border-b pb-4">
            <p className="whitespace-pre-wrap">{entry.content}</p>
            <small className="text-gray-500">{new Date(entry.date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyJournal;