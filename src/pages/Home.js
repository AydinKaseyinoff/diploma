import "./Home.css";
import Slider from "../components/Slider/Slider";

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to our store!</h1>
      <Slider />
      <h2>Recommended Products:</h2>
    </div>
  );
}

export default Home;
