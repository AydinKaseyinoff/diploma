import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Deliver from "./pages/Deliver";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/deliver" element={<Deliver />} />
            <Route path="/category" element={<Category />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
