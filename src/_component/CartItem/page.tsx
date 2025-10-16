"use client"
import { decrease, increase, removeItem } from "@/store/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function page({ data }: { data: any }) {
  const dispatch = useDispatch();

  const increasee = () => dispatch(increase(data.product));
  const decreseItems = () => dispatch(decrease(data.product));
  const remooveItem = () => dispatch(removeItem(data.product));

  return (
    
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-b ">
      <div className="flex items-center gap-4 w-full sm:w-1/4">
        <img
          src={data.product.img}
          alt={data.product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <p className="text-gray-800 font-medium">{data.product.name}</p>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-1/4 justify-center">
        <button
          onClick={decreseItems}
          className="w-8 h-8 border rounded-full text-gray-600 cursor-pointer"
        >
          −
        </button>
        <span className="min-w-[32px] text-center text-sm text-gray-700">
          {data.count}
        </span>
        <button
          onClick={increasee}
          className="w-8 h-8 border rounded-full text-gray-600 cursor-pointer"
        >
          +
        </button>
      </div>

      <div className="text-gray-800 font-semibold w-full sm:w-1/4 text-center sm:text-left">
        ${data.totalPrice.toFixed(2)}
      </div>

      <div className="w-full sm:w-1/4 text-center sm:text-right">
        <button
          onClick={remooveItem}
          className="text-red-500 text-sm hover:underline cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
