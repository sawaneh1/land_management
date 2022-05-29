import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";
import landData from "components/landing/LandDetails";

import LandCard from "./LandCard";
import { Router } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Lands() {
  const history = useHistory();
  const handleRoute = (id) => {
    console.log("id", id);
    history.push(`land/${id}`);
  };

  return (
    <section className="pb-20 bg-gray-100 sm:-mt-32 -mt-20">
      <div className="container max-w-7xl  mx-auto px-4 ">
        <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-5 w-full  relative z-50 ">
          {landData.map((land) => (
            <div onClick={() => handleRoute(land.id)}>
              <LandCard key={land.id}
                className="w-full"
                //   icon="stars"
                img={land.img}
                title={land.title}
              >
                {land.description}       
              </LandCard>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
