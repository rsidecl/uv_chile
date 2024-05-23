import React from "react";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

function Clients() {
  return (
    <div className="pb-12 pt-0 text-white">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Empresas que confian en <br /> nosotros.
      </h1>
      <InfiniteMovingCardsDemo />
    </div>
  );
}

export default Clients;
