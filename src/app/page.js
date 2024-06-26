import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="">
            <section className="px-[100px] py-5 flex flex-row gap-[72px] border-y-2 border-[#e7e7e7]">
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
                <div className="flex flex-col"></div>
                <div className="flex flex-col px-6 py-9 border border-[#000] ml-auto">
                    <div className="flex flex-row gap-4">
                        <Link
                            href="#"
                            className="flex flex-row text-accent bg-[#fef4f2] border border-accent rounded-lg font-medium text-base px-[45px] py-[12px] gap-[10px]"
                        >
                            <Image
                                src="/trash-03.svg"
                                width={20}
                                height={20}
                                alt="trash"
                            />
                            Delete
                        </Link>
                        <Link href="#" className="flex flex-row bg-accent rounded-lg border-2 border-accent_secondary text-[#fff] px-[45px] py-[12px] gap-[10px]">
                            <Image
                                src="/edit-02.svg"
                                width={16}
                                height={16}
                                alt="edit"
                            />
                            Edit job
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
