import { useContext } from "react";
import "./NavToggle.css";
import { AppContext } from "../../App";

function NavToggle({ callback }) {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);
  return (
    <button onClick={callback} className="NavToggle">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="total">
        {total > 0 ? total : null}
      </div>
    </button>
  );
}

export default NavToggle;
