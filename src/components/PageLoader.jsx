import React, { useState, useEffect } from 'react';
import '../styles/Loader.css'; // We will create this CSS file next

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust delay as needed (e.g., 500ms)

    return () => clearTimeout(timer);
  }, [children]); // Rerun effect when children (page component) changes

  return (
    <>
      {isLoading ? (
        <div className="page-loader-overlay">
          <div className="loader"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default PageLoader; 