import { useState } from "react";

import "./App.css";
import "./pages/home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      hello abeebeb
      <home />
    </>
  );
}

export default App;
