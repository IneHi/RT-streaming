import { useRouter } from 'next/navigation';
import React from 'react';
import { generateRoomId } from '../lib/client-utils';
import LoginBtn from '../components/login-btn';
import StartStreaming from '../components/start-streaming-btn';
export default function Home() {
  const router = useRouter();
  const startMeeting = () => {
    try {
      const roomId = generateRoomId();
      router.push(`/rooms/${roomId}`);
    } catch (err) {
    }
  };
  return (

    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
      />
      {/*Replace with your tailwind.css once created*/}
      <link
        href="https://unpkg.com/@tailwindcss/custom-forms/dist/custom-forms.min.css"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");\n\n      html {\n        font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n      }\n    '
        }}
      />
      <div className="h-full" style={{ backgroundImage: "url(/images/header.png" }}>
        {/*Nav*/}
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center justify-between">
            <a
              className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              NTUSTLIVE
              </span>
              .TECH
            </a>
            <div className="flex w-1/2 justify-end content-center">
              <a
                className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                href="https://twitter.com/intent/tweet?url=#"
              >
                <svg
                  className="fill-current h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
                </svg>
              </a>
              <a
                className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                href="https://www.facebook.com/sharer/sharer.php?u=#"
              >
                <svg
                  className="fill-current h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/*Main*/}
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/*Left Col*/}
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              Experience <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                ULTRA LOW LATENCY
              </span>
              <br />live streaming!
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              Using WebRTC technology, we provide the lowest latency live streaming
              service in the world.
            </p>
            <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
              <div className="flex items-center justify-between pt-4">
                <LoginBtn/>
              </div>
            </div>
            <StartStreaming/>
          </div>
          {/*Right Col*/}
          <div className="w-full xl:w-3/5 p-12 overflow-hidden">
            <img
              className="rounded-lg mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
              src="/images/live.jpg"
            />
          </div>
          {/*Footer*/}
          <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a className="text-gray-500 no-underline hover:no-underline" href="#">
              © NTUSTLIVE.TECH 2023 -
            </a>
            {' '}ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </>
  );
};
