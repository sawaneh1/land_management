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

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error,setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginDetails = {email, password};
    if(email === ""|| password === ""){
      setError("Please enter complete")
      return}

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
                value={email}
              />
            </div>
            <div className="mb-8 px-4">
              <InputIcon
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                color="lightBlue"
                placeholder="Password"
                iconName="lock"
                value={password}
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
                onClick={handleSubmit}
              >
                Get Started
              </Button>
              
            </div>
            {error && (
                <div onClick={() => setError(null)} class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                <span class="font-medium">Failure alert!</span> Please provide your details
              </div>
              )}
          </CardFooter>
        </Card>
      </Container>

    </Page>
  );
}
