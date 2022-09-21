import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "../../components/floatingButton";
import Layout from "../../components/layout";

const Stream: NextPage = () => {
  return (
    <Layout title="Live" hasTabBar>
      <div className="space-y-4 divide-y-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <Link key={i} href={`/stream/${i}`}>
            <a className="pt-4 px-4">
              <div className="w-full bg-slate-400 aspect-video rounded-md" />
              <h1 className="mt-2 text-gray-700 text-lg">stream name</h1>
            </a>
          </Link>
        ))}
        <FloatingButton href="/stream/createstream">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Stream;
