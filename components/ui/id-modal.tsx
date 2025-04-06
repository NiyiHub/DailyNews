'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

interface UserResponse {
  user_id: string;
  session_token: string;
  created_at: string;
  last_active: string;
}

export default function IdModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (id: string) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const userId = formData.get('id') as string;

    if (!userId) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        'https://daily-news-5k66.onrender.com/news/api/user/login/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: userId }),
        }
      );

      const data: UserResponse = await response.json();

      if (response.ok) {
        // Store both user ID and session token
        localStorage.setItem('myId', data.user_id);
        localStorage.setItem('sessionToken', data.session_token);

        onSubmit(data.user_id);
        toast.success('User created successfully');
      } else {
        toast.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error('Something went wrong while creating user');
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-auto">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Enter Your ID</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            className="w-full border p-2 mb-4 rounded"
            placeholder="Enter your ID"
            required
            disabled={isLoading}
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
