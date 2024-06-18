import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center h-14 px-4 lg:px-6 border-b bg-gray-300">
      <Link className="flex items-center justify-center text-gray-700" href="/">
        Home
        <span className="sr-only">Home</span>
      </Link>
      <div className="ml-auto">
        <Link
          href="https://github.com/philcon93/pickle-adventure"
          target="_blank"
          className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-50 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          <GithubIcon className="h-5 w-5" />
          <span className="sr-only">Github</span>
        </Link>
      </div>
    </header>
  );
};

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
