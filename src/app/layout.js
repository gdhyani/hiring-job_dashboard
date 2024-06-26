import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
    title: "Job Dashboard",
    description: "Hiring Challenge from Clade",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
            <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
