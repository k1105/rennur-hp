import { Suspense } from "react";
import Image from "next/image";
import type {Metadata} from "next";
import "./globals.css";
import s from "./layout.module.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LenisProvider from "./components/LenisProvider";
import GridOverlay from "./components/GridOverlay";

export const metadata: Metadata = {
  title: "rennur",
  description: "xxx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Suspense>
          <GridOverlay />
        </Suspense>
        <div className={s.hero}>
          <div className={s.logoWrap}>
            <Image
              src="/logo.svg"
              alt="rennur"
              width={474}
              height={87}
              className={s.logo}
              priority
            />
          </div>
        </div>
        <LenisProvider>
          <div className="root">
            <Nav />
            <div className="page">{children}</div>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
