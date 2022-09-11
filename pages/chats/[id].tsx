import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout title="ChatAI" canGoBack>
      <div className="px-4 py-10 space-y-4">
        <Message message="how is going?" />
        <Message message="hah???" reversed />
        <Message message="im repiting" />

        {/* 채팅 입력 텍스트칸 */}
        <form className="fixed bg-white py-2 bottom-0 inset-x-0">
          <div className="relative flex max-w-md w-full mx-auto items-center">
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
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
