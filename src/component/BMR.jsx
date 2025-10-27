import React, { useState } from "react";
import { Link } from "react-router-dom";

const Bmr = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");   
  const [heightCm, setHeightCm] = useState(""); 
  const [age, setAge] = useState("");       
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState(0);

  const fmt = (n) =>
    isNaN(n) ? "0.00" : n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const calc = () => {
    const w = Number(weight);
    const h = Number(heightCm);
    const a = Number(age);

    if (!w || w <= 0) return alert("กรุณากรอกน้ำหนัก (กก.) ให้ถูกต้อง");
    if (!h || h <= 0) return alert("กรุณากรอกส่วนสูง (ซม.) ให้ถูกต้อง");
    if (!a || a <= 0) return alert("กรุณากรอกอายุ (ปี) ให้ถูกต้อง");

    let result = 0;
    if (gender === "male") {
 
      result = 66 + 13.7 * w + 5 * h - 6.8 * a;
    } else {
    
      result = 665 + 9.6 * w + 1.8 * h - 4.7 * a;
    }
    setBmr(Number(result.toFixed(2)));
  };

  const reset = () => {
    setName("");
    setWeight("");
    setHeightCm("");
    setAge("");
    setGender("male");
    setBmr(0);
  };

  return (
    <main className="min-h-dvh bg-slate-50 py-10 flex items-start sm:items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-6">
        {}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold">BMR Calculator</h1>
          <p className="text-slate-500">คำนวณ BMR</p>
          <img src="/bmr.png" alt="bmr" className="w-16 h-16 mx-auto mt-2" />
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
          className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 mb-3 focus:outline-none focus:border-blue-500"
          placeholder="เช่น 170"
        />

        <label className="block text-sm font-medium">อายุ (ปี)</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          min="0"
          className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="เช่น 22"
        />

        <label className="block text-sm font-medium">เพศ</label>
        <div className="flex items-center gap-6 mt-2 mb-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            ชาย
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            หญิง
          </label>
        </div>

        {}
        <div className="flex gap-3">
          <button
            onClick={calc}
            className="flex-1 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
          >
            คำนวณ BMR
          </button>
          <button
            onClick={reset}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            รีเซ็ต
          </button>
        </div>

        {}
        <div className="mt-4 text-center">
          <div className=" rounded-lg py-2 font-semibold">
            ค่า BMR ที่คำนวณได้: {fmt(bmr)}
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

export default Bmr;
