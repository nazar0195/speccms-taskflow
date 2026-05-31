"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react';

interface CommentFormProps {
  onSubmit: (comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    onSubmit(comment.trim());
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <textarea
        value={comment}
        onChange={handleChange}
        rows={4}
        placeholder="Add a comment..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="self-end px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        disabled={!comment.trim()}
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
