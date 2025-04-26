"use client";
import React from "react";

import { Card, CardHeader, CardBody, Image } from "@heroui/react";
const CardSlider = () => {
  return (
    <Card className="mt-32">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center"></CardHeader>

      <CardBody className="overflow-visible py-2 ">
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 relative top-12 z-50 bg-amber-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
            />
          </svg>
      
        <Image
          alt="Card background"
          className="object-cover rounded-4xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
          height={260}
        />
        <h2 className="relative bottom-10 left-48 text-white "> اپارتمانی</h2>
      </CardBody>
    </Card>
  );
};

export default CardSlider;
