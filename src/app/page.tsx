import { scenes } from "@/components/data";
import { Scene } from "@/components/scene";
// import Image from "next/image";

export default function Page() {
  const data = scenes["intro"];

  return <Scene data={data} />;
}
