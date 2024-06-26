import Link from "next/link";
import Image from "next/image";

interface Link {
  label: string;
  url: string;
}

export interface SceneProps {
  title: string;
  description?: string;
  image?: { src?: string; alt?: string };
  links: Link[];
}

export function Scene(props: { data: SceneProps }) {
  const { data } = props;

  return (
    <>
      <Title title={data.title} />
      <ImageWrapper image={data.image} />
      <div className="space-y-4 text-center font-sans font-[Geist]">
        {data.description && <Description description={data.description} />}
        <Links links={data.links} />
      </div>
    </>
  );
}

const Title = (props: { title: string }) => {
  const { title } = props;

  return (
    <div className="space-y-4 text-center font-sans font-[Geist]">
      <h1 className="text-3xl font-bold text-gray-50">{title}</h1>
    </div>
  );
};

const ImageWrapper = (props: { image?: SceneProps["image"] }) => {
  return (
    <Image
      alt={props.image?.alt || "Choose Your Adventure"}
      className="rounded-xl object-cover"
      height="300"
      src={props.image?.src || "/placeholder.svg"}
      style={{
        aspectRatio: "500/300",
        objectFit: "cover",
      }}
      width="500"
    />
  );
};

const Description = (props: { description: string }) => {
  const { description } = props;

  return <p className="text-gray-300 text-lg md:text-xl">{description}</p>;
};

const Links = (props: { links: Link[] }) => {
  const { links } = props;

  return (
    <div className="flex flex-col gap-2">
      {links.map((link, index) => (
        <Link
          className="inline-flex min-h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href={link.url}
          key={index}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
