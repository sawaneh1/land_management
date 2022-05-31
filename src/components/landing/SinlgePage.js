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


export default function SinglePage({id,landData}) {
  
  const value =id;
  console.log("value is " + value); 
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
            {landData.map((land)=>{
              return(
               <>
            {(land.id === (id===1||id===2||id&3||id===4||id&5||id&6) )?
            <>
            <LeadText>
            <H6 color="white">{land.title}</H6>
            <p className="text-gray-400">Location {land.location}</p>
            <p className="text-gray-400">Price: {land.price}</p>
            <p className="text-gray-400">Dimension : {land.dimension}</p>
            </LeadText>
            <LeadText color="white">
            {land.description}
            </LeadText>
            </>:null}
            </>
               )
              })}
            <BuyModal />
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            {landData.map((land)=>{
             
              return(
               <>
            {(land.id === (id===1||id===2||id&3||id===4||id&5||id&6) )?

               <>
                <Card>
              <CardImage alt="Card Image" src={land.img} />
                    
            </Card>
               </>:null}
              
               </>
              )
            })}
            
          </div>
        </div>
      </div>
    </section>
  );
}
