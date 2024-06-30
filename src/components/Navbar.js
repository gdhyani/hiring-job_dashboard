import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full h-[109px] flex flex-row justify-between py-[18px] items-center pl-10 pr-6">
            <div className="py-[17px] text-xl bg-[#e7e7e7] px-[26px]">
                <h1 className="text-accent font-bold font-satoshi">Logo</h1>
            </div>
            <div className="border rounded-full p-2 border-[#d1d1d1] flex flex-row gap-14 items-center pr-[23px]">
                <button className="font-medium flex flex-row gap-2 items-center bg-accent text-white text-xl border-2 rounded-full border-accent_secondary p-3.5">
                    <Image
                        src="/briefcase-02.png"
                        alt="icon"
                        width={24}
                        height={24}
                    />
                    <h1 className="text-[#fff]">Jobs</h1>
                </button>
                <button className="font-medium relative flex flex-row items-center gap-2 text-white text-xl p-4">
                    <Image
                        className=""
                        src="/message-square-01 (1).svg"
                        alt="icon"
                        width={24}
                        height={24}
                    ></Image>
                    <Image
                        className="absolute left-[35px] top-[19px]"
                        src="/Ellipse 4.svg"
                        width={6}
                        height={6}
                        alt=""
                    ></Image>
                    <h1 className="text-[#b0b0b0]">Messages</h1>
                </button>
                <button className="font-medium flex flex-row items-center gap-2 text-white text-xl">
                    <Image
                        src="/coins-hand.png"
                        alt="icon"
                        width={24}
                        height={24}
                    />
                    <h1 className="text-[#b0b0b0]">Payments</h1>
                </button>
            </div>
            <div className="flex relative flex-row items-center">
                <Image
                    className="mr-4"
                    src="/bell-02.svg"
                    width={32}
                    height={32}
                    alt="bell"
                />
                <Image
                        className="absolute left-[23px] top-[5px]"
                        src="/Ellipse 4.svg"
                        width={6}
                        height={6}
                        alt=""
                    ></Image>
                <Image
                    src="/Rectangle 5.png"
                    width={40}
                    height={40}
                    alt="Rectablge"
                />
                <Image
                    className="ml-[6px]"
                    src="/chevron-down.svg"
                    width={20}
                    height={20}
                    alt="down"
                />
            </div>
        </div>
    );
}
