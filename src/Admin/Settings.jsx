import React, { useContext } from "react";
import {
  Grid,
  Row,
  Col,
  Container,
  Header,
  Content,
  Panel,
  Form,
  Button,
  ButtonToolbar,
  IconButton,
  Notification,
  Modal,
} from "rsuite";
import LeftNav from "./LeftNav";
import Welcome from "./Welcome";
import { getAuth, updatePassword } from "firebase/auth";
// import { auth } from "./firebase-config";
import { AuthContext } from "../context/AuthContext";

const Settings = () => {
  const { currentUser } = useContext(AuthContext);
  const auth = getAuth();

  const user = auth.currentUser;
  // const newPassword = getASecureRandomPassword();

  // updatePassword(currentUser, newPassword)
  //   .then(() => {

  //   })
  //   .catch((error) => {

  //   });
  return (
    <>
      <Container>
        <LeftNav />
        <Container>
          <div className="adminboard">
            <Welcome />
            <Grid fluid>
              <div
                className="show-fake-browser sidebar-page adminboard"
                id="candidates"
              >
                <Container>
                  <Header>
                    <h3>Settings</h3>
                  </Header>

                  <Content>
                    <Row className="show-grid">
                      <Col xs={24} sm={24} md={24}>
                        <Panel bordered>Under Construction...</Panel>
                      </Col>
                    </Row>
                  </Content>
                </Container>
              </div>
            </Grid>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Settings;
