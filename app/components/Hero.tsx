import React from "react";
import { HeroParallax } from "./ui/paralaxx-hero";

const Hero = () => {
  const products = [
    {
      title: "Santiago",
      link: "/product1",
      thumbnail: "/p1.jpg",
    },
    {
      title: "Negocios",
      link: "/product2",
      thumbnail: "/p2.jpg",
    },
    {
      title: "Valor",
      link: "/product3",
      thumbnail: "/p3.jpg",
    },
    {
      title: "Ganancias",
      link: "/product4",
      thumbnail: "/p4.jpg",
    },
    {
      title: "Productividad",
      link: "/product5",
      thumbnail: "/p5.jpg",
    },
    {
      title: "Exito",
      link: "/product6",
      thumbnail: "/p6.jpg",
    },
  ];
  return (
    <div className="pb-12 pt-0 text-white" id="home">
      <HeroParallax products={products} />
    </div>
  );
};

export default Hero;
