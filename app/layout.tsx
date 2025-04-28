import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-center pb-[39px] pt-[39px]">
          <Image 
            src={Logo}
            alt="Logo BestBank"
          ></Image>
        </header>
        <nav className="w-full h-[66px] bg-[#FFD18C] pt-[18px]">
          <ul className="flex gap-[45px] justify-center font-normal text-[25px] font-Inter">
            <Link href="">
              <li>Home</li>
            </Link>
            <Link href="">
              <li>Payments</li>
            </Link>
            <Link href="">
              <li>Savings</li>
            </Link>
            <Link href="">
              <li>Financing</li>
            </Link>
            <Link href="">
              <li>Stocks</li>
            </Link>  
          </ul>
        </nav>       
        {children}
      </body>
    </html>
  );
}
