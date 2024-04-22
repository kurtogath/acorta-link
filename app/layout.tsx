import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Statics/Footer";
import NavBar from "./components/Statics/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Acorta Link",
    description: "Acorta tu link",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`min-h-screen flex flex-col items-center ${inter.className}`}
            >
                <NavBar />
                <main className="h-full p-24 ">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
