import BackToTop from "../../components/common/BackToTop";
import CardSection from "../../components/Home/CardSection";
import Hero from "../../components/Home/Hero";
import Portfolio from "../../components/Home/Portfolio";
import Slider from "../../components/Home/Slider";
import VideoPart from "../../components/Home/VideoPart";
import Container from "../../utils/Container";

const Home = () => {
  return (
    <Container>
      <div className="">
        <Hero />
        <Portfolio
          imageDesktop="/Imgs/Home/Portfolio/portfolio-big-1.webp"
          imageMobile="/Imgs/Home/Portfolio/portfolio-small-1.webp"
          buttonPosition="items-end"
          buttonText="Explore"
        />

        <Portfolio
          imageDesktop="/Imgs/Home/Portfolio/portfolio-big-2.webp"
          imageMobile="/Imgs/Home/Portfolio/portfolio-small-2.webp"
          buttonPosition="items-start"
          buttonText="Explore"
        />

        <Portfolio
          imageDesktop="/Imgs/Home/Portfolio/portfolio-big-3.webp"
          imageMobile="/Imgs/Home/Portfolio/portfolio-small-3.webp"
          buttonPosition="items-center"
          buttonText="WORLD OF ZD"
        />

        <CardSection
          heading="DISCOVER BY OCCASSION"
          cards={[
            {
              image: "/Imgs/Home/CardSection/img-01.webp",
              buttonText: "NIKKAH",
              link: "#",
            },
            {
              image: "/Imgs/Home/CardSection/img-02.webp",
              buttonText: "WEDDING",
              link: "#",
            },
            {
              image: "/Imgs/Home/CardSection/img-03.webp",
              buttonText: "RECEPTION",
              link: "#",
            },
          ]}
        />

        <VideoPart />

        <CardSection
          heading="By Style"
          cards={[
            {
              image: "/Imgs/Home/CardSection/img-04.webp",
              buttonText: "Lehengas",
              link: "#",
            },
            {
              image: "/Imgs/Home/CardSection/img-05.webp",
              buttonText: "GOWNS",
              link: "#",
            },
            {
              image: "/Imgs/Home/CardSection/img-06.webp",
              buttonText: "Shararas",
              link: "#",
            },
          ]}
        />

        <Slider
          title="ACCESSORIES"
          viewAllLink="#"
          items={[
            {
              title: "SOL TIKKA",
              image: "/Imgs/Home/Accessories/front-pic-01.webp",
              hoverImage: "/Imgs/Home/Accessories/hidden-pic-01.webp",
              link: "#",
            },
            {
              title: "Rea Tikka",
              image: "/Imgs/Home/Accessories/front-pic-02.webp",
              hoverImage: "/Imgs/Home/Accessories/hidden-pic-02.webp",
              link: "#",
            },
            {
              title: "Terra Ring",
              image: "/Imgs/Home/Accessories/front-pic-03.webp",
              hoverImage: "/Imgs/Home/Accessories/hidden-pic-03.webp",
              link: "#",
            },
            {
              title: "Lipa Ring",
              image: "/Imgs/Home/Accessories/front-pic-04.webp",
              hoverImage: "/Imgs/Home/Accessories/hidden-pic-04.webp",
              link: "#",
            },
            {
              title: " Chihan Pouch",
              image: "/Imgs/Home/Accessories/front-pic-05.webp",
              hoverImage: "/Imgs/Home/Accessories/hidden-pic-05.webp",
              link: "#",
            },
            {
              title: "Elora Pouch",
              image: "/Imgs/Home/Accessories/front-pic-06.webp",
              hoverImage: "/Imgs/Home/Accessories/hidden-pic-06.webp",
              link: "#",
            },
            {
              title: " Arsia Pouch",
              image: "/Imgs/Home/Accessories/front-pic-07.webp",
              hoverImage: "/Imgs/Home/Accessories/hidden-pic-07.webp",
              link: "#",
            },
            {
              title: "Elaheh Pouch",
              image: "/Imgs/Home/Accessories/front-pic-08.webp",
              hoverImage: "/Imgs/Home/Accessories/hidden-pic-08.webp",
              link: "#",
            },
          ]}
        />
      </div>
      <BackToTop/>
    </Container>
  );
};

export default Home;
