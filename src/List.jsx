import React, { useState, useMemo } from "react";

function List() {

  const [count, setCount] = useState(0);

  const numbers = Array.from({ length: 10000 }, (_, i) => i + 1);

  const evenNumbers = useMemo(() => {
    console.log("Filtering even numbers...");
    return numbers.filter((num) => num % 2 === 0);
  }, [numbers]);

  return (
    <div>

      <h2>Even Numbers Count</h2>

      <p>Total Even: {evenNumbers.length}</p>

      <button onClick={() => setCount(count + 1)}>
        Re-render {count}
      </button>

    </div>
  );
}

export default List;