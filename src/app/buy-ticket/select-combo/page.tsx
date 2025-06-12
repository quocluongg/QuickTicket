'use client'
import { Card } from "@/@shared/components/ui/card";
import { useState } from "react";

const combo = {
    id: "combo1",
    name: "COMBO : MỘT MÌNH",
    description: "Gồm 1 nước Pepsi và 1 bắp các loại",
    price: 79000,
    image: "https://thumbs.dreamstime.com/b/singapore-january-tgv-cinema-hollywood-popcorn-p-pepsi-background-80518601.jpg"
  };

  export default function ComboItem() {
    const [quantity, setQuantity] = useState(0);
  
    const handleChange = (delta: number) => {
      setQuantity((prev) => Math.max(0, prev + delta));
    };
  
    return (
        <div className="max-w-sm mx-auto bg-white p-2 mt-6">
            <h2 className="text-center text-[20px] font-semibold text-[#761CBC] mb-4">
          Select Combo
        </h2>
 <Card className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-4 m-2">
 
        <div className="flex gap-4">
          <img
            src={combo.image}
            alt={combo.name}
            className="w-24 h-24 object-cover rounded-lg border"
          />
          <div className="flex-1">
            <h3 className="text-base font-semibold text-indigo-600 mb-1">{combo.name}</h3>
            <p className="text-sm text-gray-600 leading-snug">{combo.description}</p>
            <p className="text-sm font-bold text-black mt-2">
              Giá: {combo.price.toLocaleString()}đ
            </p>
          </div>
        </div>
  
        <div className="mt-5 flex justify-center items-center gap-6">
          <button
            onClick={() => handleChange(-1)}
            className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-xl font-bold text-gray-700"
          >
            −
          </button>
  
          <span className="text-xl font-semibold w-6 text-center">{quantity}</span>
  
          <button
            onClick={() => handleChange(1)}
            className="w-9 h-9 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold"
          >
            +
          </button>
        </div>
       
      </Card>
      <div className="p-4 fixed left-0 bottom-0 w-full">
        <button className="w-full rounded-[14px] bg-[#761cbc] px-4 py-3 text-zinc-950 font-bold hover:bg-white/90 !text-white mt-[30px]">
          Checkout
        </button>
      </div>
        </div>
     
    );
  }