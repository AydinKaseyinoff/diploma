import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<h2>Home page</h2>} />
        <Route path="/about" element={<h2>About page</h2>} />
      </Routes>

    </div>
  );
}

export default App;
