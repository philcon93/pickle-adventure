import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center h-14 px-4 lg:px-6 border-b bg-gray-300">
      <Link className="flex items-center justify-center text-gray-500" href="/">
        Home
        <span className="sr-only">Home</span>
      </Link>
    </header>
  );
};
