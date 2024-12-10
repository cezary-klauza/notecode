import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const OutfitFont = Outfit({ weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "NoteCode",
  description: "Your online code editor. Want to share some code?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OutfitFont.className} antialiased text-black`}>
        <div className="relative bg-hero bg-no-repeat bg-cover lg:bg-contain min-[1500px]:bg-cover bg-top min-h-screen pt-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 px-2">
            <Image
              src="./NoteCodeLogo.svg"
              alt="NoteCode"
              width={120}
              height={21.61}
            />
            <h1 className="font-semibold text-[2rem] text-center ">
              Create & Share <br />
              <span className="text-[2.5rem] leading-relaxed">
                Your Code easily
              </span>
            </h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
