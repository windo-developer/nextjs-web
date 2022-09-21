import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const Steam: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-4 space-y-4">
        <div className="w-full bg-slate-400 aspect-video rounded-md shadow-sm" />
        <h1 className="mt-2 text-gray-700 text-2xl font-semibold">
          stream name
        </h1>
        <span className="block mt-3 text-gray-800 text-xl">price 000$</span>
        <p className="my-10 text-gray-700">
          sksldfjllejrlsdjfldjfldsjflkjeejelskdegjieowgjlsdglsg
          easdfjdsfljdslkfjdslkfklsdjfkl ek395klwa535939asd
          39s93939a-3a-jfjsldfjlsfj
        </p>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Live Chat</h2>
          <div className="px-4 py-10 pb-16 h-[50vh] space-y-4 overflow-y-scroll">
            <Message message="how much are they?" />
            <Message message="how much are they?" />
            <Message message="how much are they?" />
          </div>
        </div>
        <div className="fixed py-2 bg-white bottom-0 inset-x-0">
          <div className="relative flex w-full max-w-md mx-auto items-center">
            <input
              type="text"
              className="pr-12 shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Steam;
