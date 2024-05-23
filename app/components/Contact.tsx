"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Envianos",
      className: "text-white",
    },
    {
      text: "tu",
      className: "text-white",
    },
    {
      text: "correo",
      className: "text-white",
    },
    {
      text: "para",
      className: "text-white",
    },
    {
      text: "ponernos",
      className: "text-white",
    },
    {
      text: "en",
      className: "text-white",
    },

    {
      text: "CONTACTO.",
      className: "text-blue-200 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="md:text-4xl text-2xl sm:text-base text-white  ">
        Desarrollemos nuevos negocios.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm md:text-lg md:w-60 border-white">
          ESCRIBENOS
        </button>
      </div>
    </div>
  );
}
