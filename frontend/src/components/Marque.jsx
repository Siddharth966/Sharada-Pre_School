import React from "react";

const Marque = () => {
  return (
    <>
      <style>{`
        .announcement-bar {
          background: #e63946;
          font-weight: bold;
        }
      `}</style>

      <div className="announcement-bar text-white py-2">
        <marquee scrollamount="6">
          🎉 Admission Open 2025–26 | 📞 Contact: +91 9011240081 | 🏫 Shri Sharada Pre-School (C.B.S.E), Pune | 🌟 Play Group · Nursery · Jr. KG · Sr. KG
        </marquee>
      </div>
    </>
  );
};

export default Marque;
