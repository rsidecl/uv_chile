"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden mt-16">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "",
    name: "",
    url: "/L2.png",
  },
  {
    quote: "",
    name: "",
    url: "/L3.png",
  },
  {
    quote: "",
    name: "",
    url: "/L4.png",
  },
  {
    quote: "",
    name: "",
    url: "/L5.png",
  },
  {
    quote: "",
    name: "",
    url: "/L6.png",
  },
  {
    quote: "",
    name: "",
    url: "/L7.png",
  },
  {
    quote: "",
    name: "",
    url: "/L8.png",
  },
];
