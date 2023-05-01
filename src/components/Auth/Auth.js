import { useContext, useState } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import "./Auth.css";
import { Link } from "react-router-dom";



export default function Auth() {
  const { user } = useContext(AppContext);
  const [showProfile, setShowProfile] = useState(false);
  const [showImage] = useState(!user);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleProfileClose = () => {
    setShowProfile(false);
  };


  return (
    <div className="Auth">
      <div>
        {showImage ? (
          <img onClick={handleProfileClick}  src={user?.photoURL || "https://th.bing.com/th/id/OIP.P3_9dcThQDWbJhAHh9UV9AHaHa?pid=ImgDet&rs=1"} alt="Placeholder" />
        ) : (
          <>
            <img onClick={handleProfileClick} src={user.photoURL || "https://th.bing.com/th/id/OIP.P3_9dcThQDWbJhAHh9UV9AHaHa?pid=ImgDet&rs=1"} alt="User avatar" />
          </>
        )}
        {!user && (
          <div>
            <button onClick={logIn}>Sign in</button>
          </div>
        )}
      </div>

      {showProfile && (
        <div className="Profile">
          <h2>Информация об аккаунте</h2>
          <p>Email: {user?.email}</p>
          <Link to="/orders">Имя: {user?.displayName}</Link>
          <p>Фото: <img src={user?.photoURL || "https://th.bing.com/th/id/OIP.P3_9dcThQDWbJhAHh9UV9AHaHa?pid=ImgDet&rs=1"} alt="User avatar" /></p>
          <div className="Btn-s">
            <button className="CloseBtn" onClick={handleProfileClose}>Close</button>
            {user ? <button className="S-Out-Btn" onClick={logOut}>Sign out</button> : null}
          </div>
          
        </div>
      )}
    </div>
  );
}
