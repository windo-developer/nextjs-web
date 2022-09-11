import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="Chats" hasTabBar>
      <div className="divide-y-2">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a className="flex py-3 cursor-pointer items-center space-x-3">
              <div className="w-12 h-12 bg-slate-400 rounded-full" />
              <div>
                <p className="font-medium">ChatAI</p>
                <p className="text-sm text-gray-500">Hello I am Chatbot</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
