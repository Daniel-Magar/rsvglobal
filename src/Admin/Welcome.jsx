import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Header } from "rsuite";
import "../welcome.css";

const Welcome = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <Header bordered>
        <div className="welcome-flex">
          <div>
            {currentUser.photoURL ? (
              <>
                <img src={currentUser.photoURL} width="50" height="100" />
              </>
            ) : (
              <img src="../admin.png" width="50" height="50" />
            )}
          </div>
          <div>
            <h4>
              Welcome:
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email}
            </h4>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default Welcome;
