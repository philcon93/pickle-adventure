import { scenes } from "@/components/data";
import { Scene } from "@/components/scene";
import Link from "next/link";

export default function Page(props: { params: { id: string } }) {
  const { params } = props;
  const data = scenes[params.id];

  return <Scene data={data} />;
}
