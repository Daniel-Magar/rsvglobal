import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Row,
  Col,
  Container,
  Header,
  Content,
  Panel,
  List,
  Form,
  Button,
  ButtonToolbar,
  IconButton,
  Notification,
  Modal,
} from "rsuite";
import LeftNav from "./LeftNav";
import Welcome from "./Welcome";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { Message } from "rsuite";
import toaster from "rsuite/toaster";
import "rsuite/dist/rsuite.min.css";

const Settings = () => {
  const { currentUser } = useContext(AuthContext);
  const [type, setType] = React.useState("info");
  const [typeError, setTypeError] = React.useState("error");
  const [placement, setPlacement] = React.useState("topCenter");

  const [email, setEmail] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const user = currentUser;

    // if (user !== null) {
    //   const displayName = user.displayName;
    //   const email = user.email;
    //   const photoURL = user.photoURL;
    //   const emailVerified = user.emailVerified;

    //   const uid = user.uid;

    //   console.log("User Name:", displayName);
    //   console.log("Email:", email);
    //   console.log("Photo URL:", photoURL);
    //   console.log("Email Verified:", emailVerified);
    //   console.log("Uid:", uid);
    // }
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        setEmail(profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
  }, [currentUser]);

  const showMessage = () => {
    toaster.push(
      <Message showIcon type={type} duration={5000}>
        {type}: Password Reset Email Sent Successfully! <br />
        Please check your inbox or spam.
      </Message>
    );
  };
  const showError = () => {
    toaster.push(
      <Message showIcon type={typeError} duration={5000}>
        {typeError}: Too many request, Please try some other time!
      </Message>
    );
  };

  const updatepwd = () => {
    const user = currentUser;
    const auth = getAuth();
    let email = user.email;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password Reset Email Sent Successfully!");
        showMessage();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        showError();
      });
  };
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
                        <Panel bordered>
                          <h6>Edit your password: </h6>
                          <br />
                          <List bordered>
                            <List.Item>Email Id: {email}</List.Item>
                          </List>
                          <br />
                          <Button className="btn-submit" onClick={updatepwd}>
                            Edit Password
                          </Button>
                        </Panel>
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
