'use client';

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";
import { Button } from "@headlessui/react";
import RootLayout from "./layout";
import { useState } from "react";

export default function Home() {
  const [accounts, setAccounts] = useState([
    { name: 'Main Account', amount: 6700.56, highlighted: true },
    { name: 'Expenses',     amount: 5134.63, highlighted: false },
    { name: 'Savings',      amount: 36500.12, highlighted: false },
  ])
  const [value, setValue] = useState();
  return (
      <main>
        <section className="flex justify-center gap-[15px] mt-[25px] text-3xl font-bold font-Inter">
          <Button className="w-[275px] h-[77px] bg-white rounded-[50px] border-[5px] border-[#FFA724] focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-400 data-open:bg-gray-400 cursor-pointer">Pay</Button>
          <Button className="w-[275px] h-[77px] bg-white rounded-[50px] border-[5px] border-[#FFA724] focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-400 data-open:bg-gray-400 cursor-pointer">Transfer</Button>
        </section>
        <section className="flex justify-center flex-col items-center">
          <h1 className="pr-[500px] mt-[42px] mb-[25px] font-bold font-Inter text-[40px]">Accounts</h1>
          <ul className="flex flex-col gap-4">
          {accounts.map(({ name, amount, highlighted }) => (
            <li
              key={name}
              className={
                `w-[600px] h-[100px] rounded-[10px] border-[5px] border-[#FFA724] flex items-center justify-between px-6` +
                (highlighted ? ' bg-[#FCD59F]' : ' bg-white')
              }
            >
              <span className="text-xl font-bold">{name}</span>
              <span className="text-xl font-bold">
                $ {amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </li>
          ))}
        </ul>
        </section>
      </main>      
  );
}
