import Head from "next/head";
import { NextPage } from 'next'


const Index: NextPage = () => {
  return <div className="flex flex-col justify-center h-screen items-center text-center p-4 text-gray-800">
    <div>
      Have you ever wondered how your internet habits are effecting the climate?
    </div>
    <div className="text-black">
      Soon you will be able to sign up to get a better understanding of your digital climate footprint.
    </div>
  </div>
}

export default Index