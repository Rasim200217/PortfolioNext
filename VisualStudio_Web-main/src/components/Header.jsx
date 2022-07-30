import React from "react";

import { ImageCarousel } from "./ImageCarousel";

import image1 from "../assets/slide_1.jpg";
import image2 from "../assets/slide_2.jpg";
import image3 from "../assets/slide_3.jpg";

export const Header = () => {
  return (
    <div className="">
      <ImageCarousel images={[image1, image2, image3]} />
      <div className="hidden lg:flex justify-between h-496 px-12 items-center bg-black bg-opacity-70">
        <div>
          <div>
            <p className="font-medium text-2xl text-white">Добро пожаловать</p>
            <h1 className="text-white font-bold text-6xl text-yellow-300 pt-4">
              The Visual Studio 21
            </h1>
            <p className="text-white pt-4 leading-6">
              <span className="font-medium">
                Универсальная фотостудия в Ташкенте
              </span>
              <span>
                {" "}
                подойдёт под <br /> любые виды съёмок от съемок одежды до
                портретных съемок
              </span>
            </p>
          </div>
          <button className="text-white px-12 py-5 border border-yellow-300 rounded-full text-base mt-6">
            Забронировать
          </button>
        </div>
        <div>World</div>
      </div>
    </div>
  );
};
