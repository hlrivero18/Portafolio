import React from "react";
import Name from "@/Components/Name/Name";

export default function Page() {

    return (
        <div className="text-white">
            <div className="grid w-full h-screen place-content-center gap-10">
                <div>
                   <Name /> 
                </div>
                <div className="font-oswald text-lg text-center">
                    <p>I am a javascript developer and my mission is overcome myself.
                    </p>
                </div>
            </div>
        </div>
    )
}