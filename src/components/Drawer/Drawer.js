import NavTwo from "../Nav/NavTwo";
import "./Drawer.css";

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  const handleNavigationClick = () => {
    toggle(); // Вызываем функцию toggle для скрытия меню
  };

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <NavTwo onNavigationClick={handleNavigationClick} />
      </div>
    </div>
  );
}

export default Drawer;
