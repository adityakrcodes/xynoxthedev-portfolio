import Navbar from "@/components/navbar/page"
import Link from "next/link"
import Image from "next/image"
import { Heart } from 'lucide-react'


export default function Sponsorships(){
    return <>
        <Navbar />
        <div className="flex flex-col mt-32 items-center justify-center mx-auto w-10/12 md:w-5/12">
            <p className="text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Sponsorship Program
            </p>
            <div className="w-full bg-black/70 text-white rounded-xl shadow-md overflow-hidden p-3 border">
                <div className="p-3 flex-col items-start space-x-4 mb-5">
                    <div className="flex items-center gap-5">
                        <Image
                        src={"https://avatars.githubusercontent.com/u/51535331?v=4"}
                        alt={`Arindams's avatar`}
                        width={80}
                        height={80}
                        className="rounded-full"
                        />
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-2xl font-semibold">
                                Sponsor Me
                            </h2>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-2">📍| Who Am I?</h2>
                            <p className="text-sm text-gray-300 mb-4">
                                I'm a freelance fullstack developer from India 🇮🇳, I have been into coding since 2018, looking into small things how it happens, how does it works, and grasping knowledge about all the things. Also, I'm always itchy for things to learn and getting everything done!
                            </p>
                            <h2 className="text-xl font-bold mb-2">📍| What Am I working On?</h2>
                            <p className="text-sm text-gray-300 mb-4">
                                For now, the only thing I do is contribute to Open Source projects! Currently, I'm working on nothing that specific but yeah, soon there gonna be something which I'm planning to come with it in the future.
                            </p>
                            <h2 className="text-xl font-bold mb-2">📍| Why should you support me?</h2>
                            <p className="text-sm text-gray-300 mb-4">
                                Not really asking for it but thou it really appreciates our efforts, your support, and your concern. Really appreciated that you read the whole page and thank you for the concern from your side.
                            </p>
                            <p className="text-sm text-gray-300">
                                ~ Arindam Hazra | XynoxTheDev.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center space-x-2 transition duration-300">
                        <Heart className="h-4 w-4 fill-pink-500" />
                        <span>Sponsor me on GitHub</span>
                    </button>
                    <a href='https://ko-fi.com/I2I715AP90' target='_blank'><img height='36' className="border-0 h-9" src='https://storage.ko-fi.com/cdn/kofi2.png?v=6' alt='Buy Me a Coffee at ko-fi.com' /></a>
                </div>
            </div>
        </div>
    </>
}