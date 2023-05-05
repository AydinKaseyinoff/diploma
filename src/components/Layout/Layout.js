import Nav from "../Nav/Nav";
import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <aside className="aside">
        <img src="https://i.ya-wd.com/images/checklist-icon-png-3.png" alt="category" />
        <CategoryList className="CategoryList" />
      </aside>
      <main>{props.children}</main>
      <footer></footer>
    </div>
  );
}
