/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/4EsKp0NjTK7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Cormorant_Garamond } from 'next/font/google'
import { Judson } from 'next/font/google'

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

judson({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";

interface Link {
  label: string;
  url: string;
}

export interface SceneProps {
  title: string;
  description: string;
  image?: string;
  links: Link[];
}

export function Scene(props: { data: SceneProps }) {
  const { data } = props;

  // console.info(data);

  return (
    <>
      <Title title={data.title} />
      <Image />
      <div className="space-y-4 text-center font-sans font-[Geist]">
        <Description description={data.description} />
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

const Image = (props: { src?: string; alt?: string }) => {
  const { src = "/placeholder.svg", alt = "Choose Your Adventure" } = props;

  return (
    <img
      alt={alt}
      className="rounded-xl object-cover"
      height="300"
      src={src}
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
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href={link.url}
          key={index}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
