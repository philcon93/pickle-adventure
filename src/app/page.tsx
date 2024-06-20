import { scenes } from "@/components/data";
import { Scene } from "@/components/scene";

const data = scenes["intro"];

export default function Page() {
  return <Scene data={data} />;
}
