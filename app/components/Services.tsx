"use client";
import React from "react";
import { StickyScroll } from "./ui/scroll";
import Image from "next/image";
import {
  FaIndustry,
  FaTshirt,
  FaShieldAlt,
  FaHardHat,
  FaSms,
  FaTruck,
  FaBoxes,
} from "react-icons/fa";

const content = [
  {
    title: "Venta de insumos Industriales",
    description:
      "Suministramos productos de alta calidad para la industria manufacturera y de construccion",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaIndustry size={100} />
      </div>
    ),
  },
  {
    title: "Ropa Corporativa",
    description:
      "Contamos con una amplia gama de prendas corporativas personalizadas para mejorar la imagen de su empresa.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <FaTshirt size={100} />
      </div>
    ),
  },
  {
    title: "Seguridad Corporativa",
    description:
      "Nuestra empresas de seguridad y escoltas, también brindan servicios de seguridad corporativa. Esto implica proteger las instalaciones, activos y personal de una empresa contra amenazas internas y externas.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <FaShieldAlt size={100} />
      </div>
    ),
  },
  {
    title: "Construcción",
    description:
      "Contamos con una amplia y vasta experiencia en mantenimiento y remodelación de casas, locales comerciales.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaHardHat size={100} />
      </div>
    ),
  },
  {
    title: "Mensajería de Texto Masiva",
    description:
      "Facilitamos la comunicación e información efectiva con sus clientes a través de servicios de mensajería de texto.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaSms size={100} />
      </div>
    ),
  },
  {
    title: "Transporte",
    description:
      "Contamos servicios de transporte y distribución punto a punto en Santiago, con el compromiso de ofrecer soluciones adaptando nuestros recursos a las necesidades de nuestros clientes, logrando con ello un valor agregado.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaTruck size={100} />
      </div>
    ),
  },
  {
    title: "Logística y forwarder",
    description:
      "Contamos con una amplia y vasta experiencia en mantenimiento y remodelación de casas, locales comerciales.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaBoxes size={100} />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="pb-12 pt-0 text-white">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Conoce Nuestros
        <br /> Servicios
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}
