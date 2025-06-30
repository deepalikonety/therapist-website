'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SubmissionsPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');

interface Submission {
  name: string;
  email: string;
  phone: string;
  message: string;
  time: string;
  submittedAt: string;
}

const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    if (unlocked) {
      const stored = JSON.parse(localStorage.getItem('submissions') || '[]');
      setSubmissions(stored);
    }
  }, [unlocked]);

  const handleUnlock = () => {
    if (password === 'deepali123') {
      setUnlocked(true);
    } else {
      alert('Incorrect password');
    }
  };

  const BackButton = () => (
    <div className="p-4">
      <Link href="/">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded">
          ← Back to Home
        </button>
      </Link>
    </div>
  );

  if (!unlocked) {
    return (
      <>
        <BackButton />
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
          <div className="bg-white p-6 rounded shadow max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Enter Password</h2>
            <input
              type="password"
              className="w-full mb-4 px-4 py-2 border rounded"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleUnlock}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Unlock
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <BackButton />
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Consultation Submissions</h2>
        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <ul className="space-y-4">
            {submissions.map((s, i) => (
              <li key={i} className="border-b pb-2">
                <p><strong>Name:</strong> {s.name}</p>
                <p><strong>Email:</strong> {s.email}</p>
                <p><strong>Phone:</strong> {s.phone}</p>
                <p><strong>Message:</strong> {s.message}</p>
                <p><strong>Time:</strong> {s.time}</p>
                <p><strong>Submitted At:</strong> {new Date(s.submittedAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
