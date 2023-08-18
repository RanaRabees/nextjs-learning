/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Size = ({ size }: { size: string }) => {
    function changeBg(event: any) {
        // Get the current background color of the div
        const backgroundColor = event.target.style.backgroundColor;

        // Generate a random new background color
        const randomColor = Math.floor(Math.random() * 256);

        // Set the new background color of the div
        event.target.style.backgroundColor = `rgb(${randomColor}, ${randomColor}, ${randomColor})`;
    }
    return (
        <div
            onClick={changeBg}
            className="hover:cursor-pointer p-2 px-3 mt-[10px] font-bold hover:shadow-black hover:shadow-lg text-orange-400 rounded-full"
        >
            {size}
        </div>
    );
};

export default function AllProducts({ params }: any) {
    // const [amount, setAmount] = useState(0);
    const [num, setNum] = useState(1);

    function Addtocart() {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="/my.jpg"
                                alt=""
                            />
                        </div>
                        <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                Rana Rabees
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Yeah! {params.product}
                                Is Added In Your Cart!
                                Please check your cart!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        **Thanks**
                    </button>
                </div>
            </div>
        ))
    }


    return (
        <>
            <div className="w-full flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-center items-center my-20 px-4">
                <div>
                    <Image
                        src="/collage.png"
                        width={500}
                        height={900}
                        alt="Items Pic"
                    />
                </div>
                <div className="p-4">
                    <h1 className="text-3xl my-4">{params.product}</h1>
                    <div>
                        <div className="pt-4">
                            <p className="font-bold">SELECT SIZE</p>
                        </div>
                        <div className="flex gap-3">
                            <Size size="XS" />
                            <Size size="S" />
                            <Size size="M" />
                            <Size size="L" />
                            <Size size="XL" />
                        </div>
                    </div>
                    <div className="my-4">
                        <div>
                            <div className="pt-4">
                                <p className="font-bold">Quantiy:</p>
                            </div>
                            <div>
                                <button
                                    // onClick={() => amountplus()}
                                    onClick={() => {
                                        setNum(num + 1);
                                    }}
                                    className="text-xl p-2 m-5 px-3 mt-[10px] font-bold hover:shadow-black hover:shadow-lg text-gray-500 rounded-full"
                                >
                                    +
                                </button>
                                <span className="font-bold">{num}</span>
                                <button
                                    // onClick={() => amountminus()}
                                    onClick={() => {
                                        setNum(num <= 1 ? 1 : num - 1);
                                    }}
                                    className="text-xl p-2 m-5 px-3 mt-[10px] font-bold hover:shadow-black hover:shadow-lg text-gray-500 rounded-full"
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap my-4">
                        <Toaster position="top-center" reverseOrder={true} />
                        <button onClick={Addtocart}
                            className="text-center tracking-wider p-[10px] transition-all hover:bg-[#212121] hover:text-white text-[1rem] rounded-xl hover:rounded-3xl hover:shadow-[#a19996] shadow-lg hover:shadow-2xl w-full"
                            type="button">
                            <a href="#">Add to Cart</a>
                        </button>
                        <div className="ml-4 text-2xl font-bold">
                            <p className="mb-4">$000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 lg:p-14 border-2 mt-6">
                <div className="relative">
                    <p className="text-5xl lg:text-8xl font-bold tracking-wider opacity-10">
                        {params.product}
                    </p>
                    <p className="top-[27%] lg:top-[40%] absolute text-2xl ml-4 font-bold">
                        Items Information
                    </p>
                </div>
                <div className="w-full h-[3px] mt-7 bg-gray-400 border-gray " />
                <div className="mt-10">
                    <div className="flex lg:flex-row flex-col ">
                        <p className="font-bold text-lg lg:text-xl">Product Details</p>
                        <p className="text-md lg:text-lg lg:w-[700px] text-justify  lg:ml-[150px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="flex mt-10 lg:flex-row flex-col ">
                        <p className="font-bold ">Product Care</p>
                        <div className="ml-[20px] lg:ml-[210px]">
                            <ul className="list-disc">
                                <li>Hand wash using cold water.</li>
                                <li>Do not using bleach.</li>
                                <li>Hang it to dry.</li>
                                <li>Iron on low temperature.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}