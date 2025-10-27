import React from "react";
import CardMenu from "./CardMenu";

export default function Home() {
  const menus = [
    { img: "/bmi.png", name: "BMI (ดัชนีมวลกาย)", namex: "คำนวณค่าดัชนีมวลกายของคุณและสรุปเป็นข้อมูลระดับ", to: "/bmi" },
    { img: "/bmr.png", name: "BMR (อัตราการเผาผลาญ)", namex: "คำนวณพลังงานที่ใช้ในหนึ่งวันสำหรับการเผาผลาญ", to: "/bmr" },
    { img: "/car.png", name: "การผ่อนชำระรถยนต์", namex: "คำนวณค่างวดต่อเดือนและออกตารางผ่อน", to: "/car" },
  ];

  return (
    <main className="min-h-dvh bg-slate-50 grid place-items-center">
      <div className="w-full max-w-6xl px-6 py-6">
        {}
        <div className="flex flex-col items-center mb-10 text-center">
          <img src="/logo.png" alt="Calculator" className="w-16 h-16 mb-3" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            เครื่องมือคำนวณออนไลน์
          </h1>
          <p className="mt-2 text-slate-500 text-sm sm:text-base">
            เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง
          </p>
        </div>

        {}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map((m) => (
            <CardMenu key={m.to} {...m} />
          ))}
        </div>
      </div>
    </main>
  );
}
