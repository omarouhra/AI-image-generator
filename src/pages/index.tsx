import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className=" h-screen py-12">
      <main className=" flex h-full w-full flex-col items-center justify-start space-y-12 py-8">
        <form
          onSubmit={submitForm}
          className="flex w-full items-end justify-center space-x-6"
        >
          <input
            type="text"
            name="input"
            value={input}
            onChange={handleInputChange}
            placeholder="White cat in space"
            className=" w-1/2 border-b border-b-gray-300 bg-transparent py-3 text-3xl text-white outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-cyan-500 px-4 py-2 font-semibold duration-300 hover:bg-cyan-400 active:scale-95"
          >
            Generate
          </button>
        </form>
        <div>
          {isLoading && (
            <div className="flex h-[500px] w-[500px] items-center justify-center">
              <p className="animate-pulse text-2xl text-white">Loading ...</p>
            </div>
          )}
          <div className="relative h-[700px] w-[700px]">
            {image && (
              <Image
                // @ts-ignore
                src={image?.data[0].url}
                alt="generated image"
                className="rounded-md"
                fill
              />
            )}
          </div>
        </div>
      </main>

      <footer className=" w-full text-center">
        {" "}
        <p className="text-white duration-300 hover:scale-105">
          Build by{" "}
          <a href="https://twitter.com/OuhraOmar" className="font-semibold">
            Omar Ouhra
          </a>
        </p>
      </footer>
    </div>
  );
}
