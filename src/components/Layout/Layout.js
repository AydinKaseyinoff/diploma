import Nav from "../Nav/Nav";
import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
      </header>
      <aside className="aside">
        <img
          className="in-img"
          src="https://cdn.onlinewebfonts.com/svg/download_221204.png"
          alt="category"
        />
        <CategoryList className="CategoryList" />
      </aside>
      <main>{props.children}</main>
      <footer></footer>
    </div>
  );
}
