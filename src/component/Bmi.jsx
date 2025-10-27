import React, { useState } from "react";
import { Link } from "react-router-dom";

const Bmi = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");    
  const [heightCm, setHeightCm] = useState(""); 
  const [bmi, setBmi] = useState(0);

  const calc = () => {
    const w = Number(weight);
    const hcm = Number(heightCm);

    if (!w || w <= 0) return alert("กรุณากรอกน้ำหนัก (กก.) ให้ถูกต้อง");
    if (!hcm || hcm <= 0) return alert("กรุณากรอกส่วนสูง (ซม.) ให้ถูกต้อง");

    const h = hcm / 100; 
    const result = w / (h * h);
    setBmi(Number(result.toFixed(2)));
  };

  const reset = () => {
    setName("");
    setWeight("");
    setHeightCm("");
    setBmi(0);
  };

  const fmt = (n) =>
    isNaN(n) ? "0.00" : n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <main className="min-h-dvh bg-slate-50 py-10 flex items-start sm:items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-6">
        {}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold">BMI Calculator</h1>
          <p className="text-slate-500">คำนวณ BMI</p>
          <img src="/bmi.png" alt="bmi" className="w-16 h-16 mx-auto mt-2" />
        </div>

        {}


        <label className="block text-sm font-medium">น้ำหนัก (กิโลกรัม)</label>
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
          step="0.1"
          min="0"
          className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 mb-3 focus:outline-none focus:border-blue-500"
          placeholder="เช่น 65"
        />

        <label className="block text-sm font-medium">ส่วนสูง (เซนติเมตร)</label>
        <input
          value={heightCm}
          onChange={(e) => setHeightCm(e.target.value)}
          type="number"
          step="0.1"
          min="0"
          className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 mb-5 focus:outline-none focus:border-blue-500"
          placeholder="เช่น 170"
        />

        {}
        <div className="flex gap-3">
          <button
            onClick={calc}
            className="flex-1 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
          >
            คำนวณ BMI
          </button>
          <button
            onClick={reset}
            className="flex-1 bg-slate-200 text-slate-900 py-2 rounded-lg hover:bg-slate-300"
          >
            ล้างค่า
          </button>
        </div>

        {}
        <div className="mt-4 text-center">
          <div className=" rounded-lg py-2 font-semibold">
            ค่า BMI ที่คำนวณได้: {fmt(bmi)}
          </div>
        </div>

        <Link to="/" className="block">
          <button className="mt-5 w-full bg-slate-100 text-slate-900 py-2 rounded-lg hover:bg-black hover:text-white">
            กลับหน้าหลัก
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Bmi;
