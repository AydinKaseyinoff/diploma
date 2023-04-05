import Nav from "../Nav/Nav";
import "./Layout.css"

export default function (props) {
  return (
    <div className="Layout">
      <header>
        <Nav/ >
      </header>
      <aside>
        <nav>Nav catigories</nav>
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
