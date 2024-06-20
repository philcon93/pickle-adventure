import { scenes } from "@/components/data";
import { Scene } from "@/components/scene";

export default function Page(props: { params: { id: string } }) {
  const { params } = props;
  const data = scenes[params.id];

  return <Scene data={data} />;
}
