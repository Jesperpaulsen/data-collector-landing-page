import Head from "next/head";
import { NextPage } from 'next'


const Index: NextPage = () => {
  return <div className="flex flex-col justify-center h-screen items-center text-center p-4 text-gray-800">
    <div className="text-5xl text-black pb-10">
      You just polluted.
    </div>
    <div>
      Every time you enter a website you pollute. Every time you stream a video you pollute. You don't know where, and you don't know how much.
    </div>
    <div className="text-black">
      Soon you will be able to sign up to get a better understanding of your digital climate footprint.
    </div>
  </div>
}

export default Index