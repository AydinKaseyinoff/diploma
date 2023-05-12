import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import OrderList from "../OrderList/OrderList";


export default function Profile() {
  const { user } = useContext(AppContext);

  return (
    <div className="Profile">
      {user ? (
        <div className="Profile-loggedIn">
          <div className="Profile-imgContainer">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="Profile-img"
            />
            <div className="Profile-menu">
              <NavLink to="/support">Support</NavLink>
              <NavLink to="/orders">Orders</NavLink>
              <p>Coming Soon!</p>
              <button onClick={logOut}>Log Out</button>
              <OrderList />
            </div>
          </div>
          <span className="Profile-username">{user?.displayName}</span>
        </div>
      ) : (
        <div className="Profile-loggedOut">
          <img
            src={
              "https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-3.jpg"
            }
            alt="Profile"
            className="Profile-img"
          />
          <div className="Profile-menu">
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <p>Coming Soon!</p>
            <button onClick={logIn}>Log In</button>
            <OrderList />
          </div>
        </div>
      )}
    </div>
  );
}
