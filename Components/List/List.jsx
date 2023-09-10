import React from "react";
import Link from "next/link";

export default function List() {
    const list = ['About', 'Projects', 'Contact']
    return (
        <ul className="m-5 mt-10">
            {list.map((l, i) =>
                <li className="text-white text-xl flex" key={i}>
                    <Link href={l === 'About' ? '/' : `/${l.toLowerCase()}`}>
                        <p>{l}</p>
                    </Link>
                </li>)}
        </ul>
    )
}