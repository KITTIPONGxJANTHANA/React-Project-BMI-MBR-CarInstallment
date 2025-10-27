import React from "react";
import { Link } from "react-router-dom";

export default function CardMenu({ img, name, namex, to }) {
    return (
        <Link to={to} className="group block">
            <div className="rounded-2xl bg-white shadow ring-1 ring-slate-200 p-5 transition
                      hover:-translate-y-0.5 hover:shadow-xl hover:ring-slate-300">
                <div className="flex flex-col items-center text-center">
                    <img src={img} alt={name} className="w-28 h-28 object-contain mb-4" />
                    <h3 className="font-semibold text-slate-800 group-hover:text-slate-900">{name}</h3>
                    <p className="mt-1 text-xs text-slate-500">{namex}</p>
                </div>
            </div>
        </Link>
    );
}
