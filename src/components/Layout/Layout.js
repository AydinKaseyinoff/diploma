import "./Layout.css"
import CategoryList from "../CategoryList/CategoryList";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}