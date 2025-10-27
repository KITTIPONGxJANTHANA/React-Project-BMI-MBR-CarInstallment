import React, { useState } from "react";
import { Link } from "react-router-dom";

const Car = () => {

  const [buyerName, setBuyerName] = useState("");
  const [price, setPrice] = useState("");              
  const [annualInterest, setAnnualInterest] = useState(""); 
  const [downPercent, setDownPercent] = useState(20);       
  const [months, setMonths] = useState(24);                  


  const [monthlyPay, setMonthlyPay] = useState(0);

  const fmt = (n) =>
    isNaN(n) ? "-" : n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });


  const handleCalculate = () => {
    const p = Number(price);
    const r = Number(annualInterest);
    const dp = Number(downPercent) / 100;
    const m = Number(months);

    if (!p || p <= 0) return alert("กรุณากรอกราคารถให้ถูกต้อง");
    if (isNaN(r) || r < 0) return alert("กรุณากรอกอัตราดอกเบี้ยต่อปีให้ถูกต้อง");
    if (!m || m <= 0) return alert("กรุณาเลือกจำนวนเดือนที่ผ่อน");

    const financed = p - p * dp;
    const years = m / 12;
    const interest = financed * (r / 100) * years;
    const total = financed + interest;
    setMonthlyPay(Number((total / m).toFixed(2)));
  };

  const handleReset = () => {
    setBuyerName("");
    setPrice("");
    setAnnualInterest("");
    setDownPercent(20);
    setMonths(24);
    setMonthlyPay(0);
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-xl bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-6">
      {}
      <div className="text-center">
        <h1 className="font-extrabold text-2xl">Car Installment Calculator</h1>
        <p className="text-slate-500">คำนวณ Car Installment</p>
        <img src="/car.png" alt="car" className="w-32 mx-auto mt-3" />
      </div>

      {}
      <label className="mt-6 block">ชื่อผู้คำนวณ</label>
      <input
        value={buyerName}
        onChange={(e) => setBuyerName(e.target.value)}
        type="text"
        className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:border-blue-500"
        placeholder="ชื่อของคุณ"
      />

      <label className="block">ราคารถ (บาท)</label>
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        step="0.01"
        min="0"
        className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:border-blue-500"
        placeholder="เช่น 600000"
      />

      <label className="block">ดอกเบี้ยต่อปี (%)</label>
      <input
        value={annualInterest}
        onChange={(e) => setAnnualInterest(e.target.value)}
        type="number"
        step="0.01"
        min="0"
        className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:border-blue-500"
        placeholder="เช่น 2"
      />

      <label className="block">เงินดาวน์ (%)</label>
      <div className="flex flex-wrap gap-4 mt-2 mb-4">
        {[15, 20, 25, 30, 35].map((v) => (
          <label key={v} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="downPercent"
              value={v}
              checked={Number(downPercent) === v}
              onChange={() => setDownPercent(v)}
            />
            {v}%
          </label>
        ))}
      </div>

      <label className="block">จำนวนเดือนที่ผ่อน</label>
      <select
        value={months}
        onChange={(e) => setMonths(Number(e.target.value))}
        className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 mb-4"
      >
        <option value={24}>24 เดือน</option>
        <option value={36}>36 เดือน</option>
        <option value={48}>48 เดือน</option>
        <option value={60}>60 เดือน</option>
        <option value={72}>72 เดือน</option>
        <option value={84}>84 เดือน</option>
      </select>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
        >
          คำนวณ
        </button>
        <button
          onClick={handleReset}
          className="flex-1 bg-slate-200 text-slate-900 py-2 rounded-lg hover:bg-slate-300"
        >
          ล้างข้อมูล
        </button>
      </div>

      {}
      <div className="mt-6 text-center font-bold">
        ผ่อนชำระต่อเดือน: {fmt(monthlyPay)} บาท
      </div>

      <Link to="/" className="block">
        <button className="mt-5 w-full bg-slate-100 text-slate-900 py-2 rounded-lg hover:bg-black hover:text-white">
          กลับหน้าหลัก
        </button>
      </Link>
    </div>
  );
};

export default Car;
