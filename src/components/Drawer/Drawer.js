import NavTwo from "../Nav/NavTwo";
import "./Drawer.css"

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <NavTwo />
      </div>
    </div>
  );
}

export default Drawer; 