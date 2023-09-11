import React from "react";
import Name from "@/Components/Name/Name";
import 'tailwindcss/tailwind.css'
//GOOGLE FONT
import {Oswald} from "next/font/google"

const oswald = Oswald({
    weight:["400"],
    subsets: ["latin"]
})

export default function Page() {

    return (
        <div className="text-white">
            <div className="grid w-full h-screen place-content-center gap-10">
                <div>
                   <Name /> 
                </div>
                <div className={`${oswald.className} text-lg text-center`}>
                    <p>I am a javascript developer and my mission is overcome myself.
                    </p>
                </div>
            </div>
        </div>
    )
}