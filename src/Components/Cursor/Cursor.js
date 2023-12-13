import React, { useState, useEffect } from 'react';
import '../../Styles/Style.css'; // Import your CSS file with cursor styles

const Cursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const updateCursorPosition = (event) => {
    setCursorX(event.clientX);
    setCursorY(event.clientY);
  };

  useEffect(() => {
    // Add event listener for mouse movement
    document.addEventListener('mousemove', updateCursorPosition);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="cursor">
      <div className="outer-cursor" style={{ top: cursorY, left: cursorX }}><div className="inner-cursor"></div></div>
    </div>
  );
};

export default Cursor;