import React, { useState } from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const [count, setCount] = useState<number>(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
    if (count >= 10) {
      setCount(0)
    }
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(0)
    }
  };


  return (
    <div>
      {/* Regular button */}
      <Button
        label="Click Me"
        onClick={handleClick}
        style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px' }}
        disabled={false}
        type="button"  // Explicitly setting type as 'button'
      />

      {/* Submit button */}
      <Button
        label="decerement"
        onClick={decrement}
        style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px' }}
        disabled={false}
        type="submit"  // Submit type button
      />

      {/* Reset button */}
      <Button
        label="Increment"
        onClick={increment}
        style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px' }}
        disabled={false}
        type="reset"  // Reset type button
      />
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default App;
