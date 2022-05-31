import Title from "components/landing/Title";
import TeamCard from "components/landing/TeamCard";
import Image1 from "assets/img/team-1-800x800.jpg";
import Image2 from "assets/img/team-2-800x800.jpg";
import Image3 from "assets/img/team-3-800x800.jpg";
import Image4 from "assets/img/team-4-470x470.png";

export default function TeamSection() {
  return (
    <section className="pt-20 pb-48">
      <div className="container max-w-7xl mx-auto px-4">
        <Title heading="Here are our heroes">
          A team of dedicated, motivated and experienced developers that help to make this
          project a successful.
        </Title>
        <div className="flex flex-wrap">
          <TeamCard img={Image1} name="Ahmed Eyan Jeng" position="Web Developer" />      
          <TeamCard
            img={Image1}
            name="Sulayman Sawanneh"
            position="Backend Developer"
          />
          <TeamCard img={Image1} name="Fabala Dibassey" position="UI/UX Designer" />
          <TeamCard
            img={Image1}
            name="Sarjo Jaiteh"
            position="Founder and CEO"
          />
        </div>
      </div>
    </section>
  );
}
