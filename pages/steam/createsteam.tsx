import type { NextPage } from "next";

const Createsteam: NextPage = () => {
  return (
    <div className="px-4 py-10 space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Product Name
        </label>
        <div className="flex items-center rounded-md shadow-sm">
          <input
            id="name"
            type="text"
            className="appearance-none w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <div className="absolute flex left-0 pl-3 items-center pointer-events-none">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none w-full px-3 py-2 pl-7 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          rows={4}
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        />
      </div>
      <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Go Live
      </button>
    </div>
  );
};

export default Createsteam;
