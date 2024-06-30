import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="">
            <section className="px-[100px] py-[20px] h-[67px] flex flex-row gap-[72px] border-y-2 border-[#e7e7e7]">
                <h1 className="text-xl text-accent font-black">Job preview</h1>
                <h1 className="text-xl text-inactive font-semibold">
                    Applicants
                </h1>
                <h1 className="text-xl text-inactive font-semibold">Match</h1>
                <h1 className="text-xl text-inactive font-semibold">
                    Messages
                </h1>
            </section>
            <section className="flex flex-row w-full">
                {/* Left Side */}
                <div className="flex flex-col border-r-2 border-[#e7e7e7] w-full  pt-[38px]">
                    {/* Heading */}
                    <div className="flex flex-col mb-8 pl-[100px]">
                        <div className="flex flex-row gap-3 items-center">
                            <h1 className="text-4xl font-bold text-primary">
                                Senior Product Designer
                            </h1>
                            <Image
                                src="Ellipse 11.svg"
                                width={4}
                                height={4}
                                alt="dot"
                            ></Image>
                            <h1 className="text-[#888888] text-sm font-medium">
                                posted 2 days ago
                            </h1>
                            <p className="border flex flex-row items-center bg-[#ecfdf3] text-[12px] border-[#ABEFC6] text-[#067647] rounded-full font-medium leading-[18px] gap-1 px-[6px]">
                                <Image
                                    src="/Dot.svg"
                                    width={6}
                                    height={6}
                                    alt=""
                                />
                                Open
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-4 mt-6">
                            <div className="flex flex-row gap-2 items-center">
                                <Image
                                    src="/marker-pin-01.svg"
                                    width={20}
                                    height={20}
                                    alt=""
                                ></Image>
                                <h1 className="text-[#5d5d5d] text-[20px] font-medium">
                                    Delaware,USA
                                </h1>
                            </div>
                            <Image
                                src="Ellipse 11.svg"
                                width={4}
                                height={4}
                                alt="dot"
                            ></Image>
                            <div className="flex flex-row gap-2 items-center">
                                <Image
                                    src="/coins-stacked-03.svg"
                                    width={20}
                                    height={20}
                                    alt=""
                                ></Image>
                                <h1 className="text-[#5d5d5d] text-[20px] font-medium">
                                    $300k-$400k
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* second section below heading */}
                    <div className="py-8 border-y-2 gap-16 border-[#e7e7e7] pl-[100px] flex flex-row">
                        <div className="flex flex-col gap-2 min-w-[170px]">
                            <h1 className="text-[14px] text-secondary font-medium">
                                Skills Required
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-1 rounded-md border border-[#D0D5DD] w-fit px-[6px] py-[4px] items-center">
                                    <Image
                                        src="/image 1.svg"
                                        width={16}
                                        height={16}
                                        alt=""
                                    />
                                    <h1 className="font-medium leading-none text-[#344054] text-[12px]">
                                        Figma
                                    </h1>
                                </div>
                                <div className="flex flex-row gap-1 rounded-md border border-[#D0D5DD] w-fit px-[6px] py-[4px] items-center">
                                    <Image
                                        src="/image 2.svg"
                                        width={16}
                                        height={16}
                                        alt=""
                                    />
                                    <h1 className="font-medium leading-none text-[#344054] text-[12px]">
                                        Adobe Illustrator
                                    </h1>
                                </div>

                                <div className="flex flex-row gap-1 rounded-md border border-[#D0D5DD] w-fit px-[6px] py-[4px] items-center">
                                    <Image
                                        src="/image 6.svg"
                                        width={16}
                                        height={16}
                                        alt=""
                                    />
                                    <h1 className="font-medium leading-none text-[#344054] text-[12px]">
                                        Adobe XD
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 min-w-[170px]">
                            <h1 className="text-[14px] text-secondary font-medium">
                                Preferred Language
                            </h1>
                            <h1 className="font-semibold text-primary text-[!6px]">
                                English
                            </h1>
                        </div>
                        <div className="flex flex-col gap-2 min-w-[170px]">
                            <h1 className="text-[14px] text-secondary font-medium">
                                Type
                            </h1>
                            <h1 className="font-semibold text-primary text-[16px]">
                                Full time
                            </h1>
                        </div>
                        <div className="flex flex-col gap-2 min-w-[170px]">
                            <h1 className="text-[14px] text-secondary font-medium">
                                Year of Experience
                            </h1>
                            <h1 className="font-semibold text-primary text-[16px]">
                                3+ Years of Experience
                            </h1>
                        </div>
                    </div>
                    {/* third section about job*/}
                    <div className="leading-7 text-primary pl-[100px] font-medium pt-8 pb-9">
                        <h1 className="text-sm mb-2 text-secondary">
                            About the job
                        </h1>
                        <ol className="list-decimal list-inside">
                            <li>Handle the UI/UX research desing</li>
                            <li>
                                Work on researching on latest web applications
                                designs & trends
                            </li>
                            <li>Work on conceptializing and visualizing</li>
                            <li>
                                Work on creating graphics content and other
                                graphic related works
                            </li>
                        </ol>
                        <h1>Benefits:</h1>
                        <ul className="list-disc list-inside pl-2">
                            <li>
                                <span className="relative -left-2">
                                    Health insurance
                                </span>
                            </li>
                            <li>
                                <span className="relative -left-2">
                                    Provident Fund
                                </span>
                            </li>
                        </ul>
                        <h1>Schedule:</h1>
                        <ul className="list-disc list-inside pl-2">
                            <li>
                                <span className="relative -left-2">
                                    Day shift
                                </span>
                            </li>
                        </ul>
                        <h1>Supplemental pay types:</h1>
                        <ul className="list-disc list-inside pl-2">
                            <li>
                                <span className="relative -left-2">
                                    Performance bonus
                                </span>
                            </li>
                            <li>
                                <span className="relative -left-2">
                                    Yearly bonus
                                </span>
                            </li>
                        </ul>
                        <h1>Work Location: In person</h1>
                    </div>
                    {/* company description */}
                    <div className="flex flex-col pl-[100px] gap-4 mb-9 border-t-2 border-[#e7e7e7] pt-8">
                        <div className="flex flex-row py-[10px] items-center gap-3 pr-[10px]">
                            <Image
                                src="/logo.svg"
                                width={40}
                                height={40}
                                alt=""
                            />
                            <h1 className="text-xl font-medium text-[#4f4f4f]">
                                Atlassian
                            </h1>
                        </div>
                        <div className="flex flex-row gap-12 ">
                            <div className="flex flex-col gap-6">
                                <div className="gap-2 flex flex-col min-w-[344px]">
                                    <h1 className="text-secondary text-sm font-medium">
                                        Company size
                                    </h1>
                                    <h1 className="font-medium text-[16px] text-primary">
                                        1k - 2k Employees
                                    </h1>
                                </div>
                                <div className="gap-2 flex flex-col min-w-[344px]">
                                    <h1 className="text-secondary text-sm font-medium">
                                        Sector
                                    </h1>
                                    <h1 className="font-medium text-[16px] text-primary">
                                        Information Technology, Infrastructure
                                    </h1>
                                </div>
                                <div className="gap-2 flex flex-col min-w-[344px]">
                                    <h1 className="text-secondary text-sm font-medium">
                                        Founded In
                                    </h1>
                                    <h1 className="font-medium text-[16px] text-primary">
                                        2019
                                    </h1>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="gap-2 flex flex-col min-w-[344px]">
                                    <h1 className="text-secondary text-sm  font-medium">
                                        Type
                                    </h1>
                                    <h1 className="font-medium text-[16px] text-primary">
                                        Private
                                    </h1>
                                </div>
                                <div className="gap-2 flex flex-col min-w-[344px]">
                                    <h1 className="text-secondary text-sm font-medium">
                                        Funding
                                    </h1>
                                    <h1 className="font-medium text-[16px] text-primary">
                                        Bootstrapped
                                    </h1>
                                </div>
                                <div className="gap-2 flex flex-col min-w-[344px]">
                                    <h1 className="text-secondary text-sm font-medium">
                                        Founded By
                                    </h1>
                                    <h1 className="font-medium text-[16px] text-primary">
                                        Scott Farquhar, Mike Cannon-Brookes
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flex w-[409px] flex-col font-general px-[24px] py-9 ml-auto bg-[#fcfcfc]">
                    {/* buttons */}
                    <div className="flex flex-row gap-4 max-w-[360px]">
                        <Link
                            href="#"
                            className="flex flex-row text-accent min-w-max items-center bg-[#fef4f2] border border-accent rounded-lg font-medium text-[16px] px-[35px] py-[12px] gap-[10px]"
                        >
                            <Image
                                src="/trash-03.svg"
                                width={20}
                                height={20}
                                alt="trash"
                            />
                            Delete job
                        </Link>
                        <Link
                            href="#"
                            className="flex flex-row bg-accent items-center min-w-max rounded-lg border-2 border-accent_secondary text-[#fff] px-[45px] py-[12px] gap-[10px]"
                        >
                            <Image
                                src="/edit-02.svg"
                                width={16}
                                height={16}
                                alt="edit"
                            />
                            Edit job
                        </Link>
                    </div>
                    {/* Text below buttons */}
                    <div className="flex flex-col gap-4 p-3 mt-6">
                        <div className="flex flex-row items-center px-[10px] mb-4">
                            <Image
                                src="/users-01.svg"
                                height={20}
                                width={20}
                                alt=""
                            />
                            <h1 className="font-medium ml-[10px] text-[16px] text-[#4f4f4f]">
                                Applicants
                            </h1>
                            <h1 className="ml-auto text-xl text-primary font-bold">400</h1>
                        </div>
                        <hr className="border-[#E7E7E7]" />
                        <div className="flex flex-row items-center px-[10px] my-4">
                            <Image
                                src="/user-check-01.svg"
                                height={20}
                                width={20}
                                alt=""
                            />
                            <h1 className="font-medium ml-[10px] text-[16px] text-[#4f4f4f]">
                                Matches
                            </h1>
                            <h1 className="ml-auto text-xl text-primary font-bold">100</h1>
                        </div>
                        <hr className="border-[#E7E7E7]" />
                        <div className="flex flex-row items-center px-[10px] my-4">
                            <Image
                                src="/message-square-01.svg"
                                height={20}
                                width={20}
                                alt=""
                            />

                            <h1 className="font-medium ml-[10px] text-[16px] text-[#4f4f4f]">
                                Messages
                            </h1>
                            <h1 className="ml-auto text-xl text-primary font-bold">147</h1>
                        </div>
                        <hr className="border-[#E7E7E7]" />
                        <div className="flex flex-row items-center px-[10px] my-4">
                            <Image
                                src="/eye.svg"
                                height={20}
                                width={20}
                                alt=""
                            />
                            <h1 className="font-medium ml-[10px] text-[16px] text-[#4f4f4f]">
                                Views
                            </h1>
                            <h1 className="ml-auto text-xl text-primary font-bold">800</h1>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
