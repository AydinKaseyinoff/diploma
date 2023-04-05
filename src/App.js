import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/contacts" element={<h1>Contactcs</h1>} />
          <Route path="/delivery" element={<h1>Delivery</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
