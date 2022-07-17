import { useState, useEffect } from "react";
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
import axios from "axios";

export default function Lands() {
  const history = useHistory();
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleRoute = (id) => {
    console.log("id", id);
    history.push(`land/${id}`);
  };

  const path = "https://ancient-temple-33424.herokuapp.com/";
  const fetchHouses = async () => {
    setError(false);
    setLoading(true);
    try {
      const url = "https://ancient-temple-33424.herokuapp.com/houses";

      const { data } = await axios.get(url);
      setHouses(data);
      console.log("data", data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <section className="pb-20 bg-gray-100 sm:-mt-32 -mt-20">
      <div className="container max-w-7xl  mx-auto px-4 ">
        <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-5 w-full  relative z-50 ">
          {houses.map((house, i) => (
            <div onClick={() => handleRoute(house._id)}>
              <LandCard
                key={house._id}
                loading={loading}
                error={error}
                className="w-full cursor-pointer"
                //   icon="stars"
                img={`${path}${house.imagePath}`}
                title={house.title}
              >
                {house.description}
              </LandCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
