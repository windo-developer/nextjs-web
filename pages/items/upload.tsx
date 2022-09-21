import type { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack title="Upload Product">
      <form className="p-4 space-y-4">
        <div>
          <label className="flex w-full py-6 h-48 items-center justify-center border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:text-orange-500 hover:border-orange-500 cursor-pointer">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" className="hidden" />
          </label>
        </div>
        <Input label="Product Name" name="name" type="text" required />
        <Input
          label="Price"
          name="price"
          type="text"
          kind="price"
          placeholder="0.00"
          required
        />
        <TextArea name="description" label="Description" />
        <Button text="Upload product" />
      </form>
    </Layout>
  );
};

export default Upload;
