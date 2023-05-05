import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import "./Auth.css"
import { NavLink } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          <div className="img-container">
            <img
              src={
                user?.photoURL ||
                "https://th.bing.com/th/id/OIP.P3_9dcThQDWbJhAHh9UV9AHaHa?pid=ImgDet&rs=1"
              }
              alt="Placeholder"
            />
            <div className="img-menu">
              <NavLink to="/support">SupportPage</NavLink>
              <p>Menu item 2</p>
              <p>Menu item 3</p>
              <button onClick={logOut}>Sign out</button>
            </div>
          </div>
        </span>
      ) : (
        <span>
          <div>Hello guest!</div>
          <button onClick={logIn}>Sign in</button>
        </span>
      )}
    </div>
  );
}
