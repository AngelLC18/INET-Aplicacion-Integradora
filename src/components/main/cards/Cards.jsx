import React from "react";
import Card from "./card";

const Cards = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col gap-4 overflow-x-auto items-center w-[93%] h-56 bg-slate-300 dark:bg-slate-950 p-4 rounded-lg ">
        <Card
          //Ingresar los atributos necesarios para configurar cara tarjeta
          text="Robotica"
          img="https://imgs.search.brave.com/VOZwSL96n-H4bcLLDaeMKyVpvnv5td3ZASVGrkOAbxI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2JkZjIu/cG5n"
          alt="android"
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export default Cards;
