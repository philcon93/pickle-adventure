import { Scene, SceneProps } from "@/components/scene";

type DataId = string;

type Scenes = Record<DataId, SceneProps>;

const allData: Scenes = {
  "1": {
    title: "Choose Your Adventure 01",
    description:
      "You find yourself in a dimly lit forest, the trees casting long shadows across the path. The air is thick with the scent of damp earth and the distant call of a lone owl. Which way do you choose to go?",
    links: [
      {
        label: "Venture Deeper",
        url: "/2",
      },
      {
        label: "Turn Back",
        url: "/1",
      },
    ],
  },
  "2": {
    title: "Choose Your Adventure 02",
    description:
      "You find yourself in a dimly lit forest, the trees casting long shadows across the path. The air is thick with the scent of damp earth and the distant call of a lone owl. Which way do you choose to go?",
    links: [
      {
        label: "Venture Deeper",
        url: "/2",
      },
      {
        label: "Turn Back",
        url: "/1",
      },
    ],
  },
};

export default function Page(props: { params: { id: string } }) {
  const { params } = props;
  const data = allData[params.id];

  return <Scene data={data} />;
}
