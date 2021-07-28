import { useState, useEffect } from "react";
import "./App.css"

export default function App() {
  const [count, setCount] = useState(0);

  // console.log(count)s

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      <p>Bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Click vào tôi</button>
    </div>
  );
}