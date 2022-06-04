import { useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H5 from "@material-tailwind/react/Heading5";
import InputIcon from "@material-tailwind/react/InputIcon";
import Checkbox from "@material-tailwind/react/Checkbox";
import Button from "@material-tailwind/react/Button";
import DefaultNavbar from "components/DefaultNavbar";
import SimpleFooter from "components/SimpleFooter";
import Page from "components/login/Page";
import Container from "components/login/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleLogin = async (e) => {
    console.log("ghgg", e);
    e.preventDefault();
    const url = "http://localhost:5000/login";
    const { data } = await axios.post(url, {
      email,
      password,
    });
    window.localStorage.setItem("user", JSON.stringify(data));
    history.push("/dashboard");
    console.log("data", data);
    console.log("data", data);
  };
  return (
    <Page>
      <DefaultNavbar />
      <Container>
        <Card>
          <CardHeader color="lightBlue">
            <H5 color="white" style={{ marginBottom: 0 }}>
              Login
            </H5>
          </CardHeader>

          <CardBody>
            <div className="mb-12 px-4 bg-bb">
              <InputIcon
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                color="lightBlue"
                placeholder="Email Address"
                iconName="email"
              />
            </div>
            <div className="mb-8 px-4">
              <InputIcon
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                color="lightBlue"
                placeholder="Password"
                iconName="lock"
              />
            </div>
            <div className="mb-4 px-4">
              <Checkbox color="lightBlue" text="Remember Me" id="remember" />
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex justify-center bg-bb">
              <Button
                color="lightBlue"
                buttonType="link"
                size="lg"
                ripple="dark"
                onClick={handleLogin}
              >
                Get Started
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Container>
      <SimpleFooter />
    </Page>
  );
}
