import { Scene } from "@/components/scene";
import { useState } from "react";
// import Image from "next/image";

const data = {
  title: "Choose Your Adventure",
  description:
    "You find yourself in a dimly lit forest, the trees casting long shadows across the path. The air is thick with the scent of damp earth and the distant call of a lone owl. Which way do you choose to go?",
  links: [
    {
      label: "Begin",
      url: "/1",
    },
  ],
};

export default function Page() {
  return <Scene data={data} />;
}
