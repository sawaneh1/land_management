import { useEffect, useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";
import Teamwork from "assets/img/teamwork.jpeg";
import DefaultNavbar from "components/DefaultNavbar";
import BuyModal from "./BuyModal";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SinglePage({ id }) {
  const route = useParams();
  const [house, setHouse] = useState({});
  console.log("route...", route.id);
  // const id = route.id
  const path = "https://ancient-temple-33424.herokuapp.com/";

  const fetchHouse = async () => {
    const url = `https://ancient-temple-33424.herokuapp.com/house/${id}`;
    const { data } = await axios.get(url);
    console.log("datttt", data.data.title);
    setHouse(data.data);
  };

  useEffect(() => {
    fetchHouse();
  }, []);

  return (
    <section className="pb-20 bg-gray-800 ">
      <DefaultNavbar />
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="home" size="3xl" />
            </div>

            <H4 color="white">Property Information</H4>
            {/* {landData.map((land) => { */}

            <>
              <LeadText>
                <H6 color="white">{house.title}</H6>
                <p className="text-gray-400">
                  Location {house.street_address} | {house.city}
                </p>
                <p className="text-gray-400">Country : {house.country}</p>
                <p className="text-gray-400">Price: {house.price}</p>
              </LeadText>
              <LeadText color="white">{house.description}</LeadText>
            </>

            {/* })} */}
            <BuyModal houseId={house._id} amount={house.price} />
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage alt="Card Image" src={`${path}${house.imagePath}`} />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
