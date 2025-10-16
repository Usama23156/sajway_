"use client"
import CartItem from "@/_component/CartItem/page";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const Page = () => {
  const items = useSelector((state : any) => state.cart.products);

  const totalPrice = useMemo(() => {
    let totalNumbers = 0;
    items.forEach((object : any) => {
      totalNumbers += object.totalPrice;
    });
    return totalNumbers;
  }, [items]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
      {items.length < 1 ? (
        <div className="flex justify-center items-center py-40 text-mainColor text-center h-[85vh]">
          <h1 className="text-2xl sm:text-3xl text-black">Cart Is Empty</h1>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 space-y-4 mt-28 mb-10 min-h-[70vh]">
          {items?.map((item : any) => (
            <CartItem key={item.product.id} data={item} />
          ))}

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
              <div className="text-lg sm:text-2xl font-medium">
                Total Price:
              </div>
              <div className="text-lg sm:text-2xl text-mainColor font-semibold">
                EGP {totalPrice.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
