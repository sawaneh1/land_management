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
import LandList from "./LandList";
import { Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
const data = [
  {
    id: 1,
    title: "Test Land",
    img: Teamwork,
    description:
      "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
  },
  {
    id: 2,
    title: "Test Land 2",
    img: Teamwork,
    description:
      " Keep you user engaged by providing meaningful information Remember that by this time, the user is curious.",
  },
  {
    id: 3,
    title: "40 x 50 Land",
    img: Teamwork,
    description:
      "  Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!",
  },

  {
    id: 4,
    title: "20 x 20 Land",
    img: Teamwork,
    description:
      "  Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!",
  },
  {
    id: 5,
    title: "70 x 50 Land",
    img: Teamwork,
    description:
      "  Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!",
  },
  {
    id: 6,
    title: "40 x 40 Land",
    img: Teamwork,
    description:
      "  Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!",
  },
];

export default function Lands() {
  const history = useHistory();
  const handleRoute = (id) => {
    console.log("id", id);
    history.push(`land/${id}`);
  };

  return (
    <section className="pb-20 bg-gray-100 sm:-mt-32 -mt-20">
      <div className="container max-w-7xl  mx-auto px-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-5 w-full  relative z-50">
          {data.map((land) => (
            <div onClick={() => handleRoute(land.id)}>
              <LandList
                className="w-full"
                //   icon="stars"

                img={land.img}
                title={land.title}
              >
                {land.description}
              </LandList>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
