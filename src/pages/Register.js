import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import { useState } from 'react';

export default function Register() {
    const [fullName,setFullName]  = useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const details ={fullName,password,email};
        if(email === ""|| password === ""||fullName ===""){
            setError("Please enter complete")
            return}
    }
    return (
        <Page>
            <DefaultNavbar />
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Register
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="Full Name"
                                iconName="account_circle"
                                value={fullName}
                                onChange={(e) =>setFullName(e.target.value)}
                            />
                        </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                                value={password}
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                                onClick={handleSubmit}
                            >
                                Register
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
