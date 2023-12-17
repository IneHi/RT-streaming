import { useSession, signIn, signOut } from "next-auth/react"



export default function LoginBtn() {

  const { data: session } = useSession()

  if (session) {

    return (

      <>
        <img className="rounded-full h-10 w-10" src={session.user.image} alt={session.user.name} />
        <span>{session.user.name}</span>
        <button className="lk-button bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out" 
        onClick={() => signOut()}>Sign Out</button>
        

      </>

    )

  }

  return (

  

    <button className="lk-button bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => signIn()}>Sign in via Github</button>

  )

}