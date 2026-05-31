import React from 'react';

type Comment = {
  id: string;
  author: string;
  timestamp: string;
  message: string;
};

type CommentListProps = {
  comments: Comment[];
};

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (comments.length === 0) {
    return <div className="text-center text-gray-500 italic">No comments yet.</div>;
  }

  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <li key={comment.id} className="flex flex-col bg-white p-4 rounded shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-800">{comment.author}</span>
            <span className="text-sm text-gray-500">{comment.timestamp}</span>
          </div>
          <p className="text-gray-700 whitespace-pre-wrap">{comment.message}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;