import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import React from 'react';
import { generateRoomId } from '../lib/client-utils';

export default function StartStreaming() {

  const { data: session } = useSession()
const router = useRouter();
  const startMeeting = () => {
    try {
      const roomId = generateRoomId();
      router.push(`/rooms/${roomId}`);
    } catch (err) {
    }
  };
  if (session) {

    return (

      <>
                <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
              <div className="flex items-center justify-between pt-4">
              <button className="lk-button bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  onClick={() => startMeeting()}>
                  Start Live Streaming!
                </button>
              </div>
            </div>
        

      </>

    )

  }


}