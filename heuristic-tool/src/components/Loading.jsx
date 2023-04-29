import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      navigate('/results');
    }, 3000);
  }, [navigate]);

  return isLoading ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : null;
}

export default Loading;
