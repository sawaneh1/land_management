import H3 from "@material-tailwind/react/Heading3";
import Paragraph from "@material-tailwind/react/Paragraph";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [message, setMessage] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");

  const handleContact = async () => {
    const url = "https://ancient-temple-33424.herokuapp.com/contact";

    const { data } = await axios.post(url, {
      fname,
      lname,
      message,
      email,
    });
    console.log("data", data);
    alert("you message has successfully been sent");
  };
  return (
    <div className="flex flex-wrap justify-center mt-24">
      <div className="w-full lg:w-8/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
          <div className="flex-auto p-5 lg:p-10">
            <div className="w-full text-center">
              <H3 color="gray">Want to work with us?</H3>
              <Paragraph color="blueGray">
                Complete this form and we will get back to you in 24 hours.
              </Paragraph>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-8 mt-16 mb-12">
                <Input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFName(e.target.value)}
                  color="lightBlue"
                />
                <Input
                  type="text"
                  onChange={(e) => setLName(e.target.value)}
                  placeholder="Last name"
                  color="lightBlue"
                />
              </div>
              <div className="flex gap-8 mt-16 mb-12">
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  color="lightBlue"
                />
              </div>

              <Textarea
                onChange={(e) => setMessage(e.target.value)}
                color="lightBlue"
                placeholder="Message"
              />

              <div
                className="flex justify-center mt-10"
                onClick={handleContact}
              >
                <Button color="lightBlue" ripple="light">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
