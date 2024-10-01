import { useContext } from "react";
import { UserContext } from "./../context/UserContext";

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="profile">
      <h2>Perfil</h2>
      {user ? (
        <>
          <p>Email: {user}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <p>No hay usuario autenticado.</p>
      )}
    </div>
  );
};

export default Profile;
