import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";
import Teamwork from "assets/img/manson.jpeg";

export default function WorkingSection() {
  return (
    <section className="pb-20 bg-gray-100 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="red" icon="stars" title="Awarded Agency">
            Our business has been awarded by Gambia chamber of commerce and industry(GCCI) as the most established
            center of business in The Gambia.
          </StatusCard>
          <StatusCard color="lightBlue" icon="autorenew" title="Make your own">
            Our team of dedicated workers helps to ensure that all paper works to get your property at hand
            are accomplished in a short period of time.
          </StatusCard>
          <StatusCard color="teal" icon="fingerprint" title="Verified Company">
           Being a well established company over the past decades we help to ensure that you live in 
           a well furnished house with the help of our top notch architects.
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="people" size="3xl" />
            </div>
            <H4 color="gray">Working with us is a pleasure</H4>
            <LeadText color="blueGray">
              With the help of our well established agencies, we provide you with
              an experienced of a life-time in exploring our lands and houses.
          
            </LeadText>
            <LeadText color="blueGray">
              We provide you a 10 year guarantee of our houses, and with that also also get to live in a 
              comfortable environment.
            </LeadText>
            <a
              href="#pablo"
              className="font-medium text-light-blue-500 mt-2 inline-block"
            >
              Read More
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <img src={Teamwork} alt="main " className="h-96 w-96 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
