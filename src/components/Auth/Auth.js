import { useContext, useState } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import "./Auth.css";



export default function Auth() {
  const { user } = useContext(AppContext);
  const [showProfile, setShowProfile] = useState(false);

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
          <p>Имя: {user?.displayName}</p>
          <p>Фото: <img src={user?.photoURL || "https://th.bing.com/th/id/OIP.P3_9dcThQDWbJhAHh9UV9AHaHa?pid=ImgDet&rs=1"} alt="User avatar" /></p>
          <button onClick={handleProfileClose}>Закрыть</button>
          {user ? <button onClick={logOut}>Sign out</button> : null}
        </div>
      )}
    </div>
  );
}
