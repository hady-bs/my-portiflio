import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page Not Found</p>
        <p className="text-gray-400">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-3 bg-aura text-primary font-bold rounded-lg hover:bg-aura/50 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
