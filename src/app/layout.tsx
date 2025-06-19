"use client";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isResponsive, setIsResponsive] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsResponsive(window.innerWidth >= 1380);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("resize", checkWidth);
      clearTimeout(timer);
    };
  }, []);

  if (!isResponsive) {
    return (
      <html lang="en" data-locator-target="vscode">
        <body className={`${poppins.variable} font-sans antialiased`}>
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow p-8 text-center animate-fade-in">
              <div className="animate-bounce mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Screen Size Adjustment Needed
              </h1>
              <p className="text-gray-600">
                For the best experience, please view this website on a screen
                width of 1380px or larger.
              </p>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" data-locator-target="vscode">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gray-50 flex flex-col sm:flex-row gap-8 p-4 sm:p-8">
          {/* Sidebar */}
          <div className="flex-shrink-0 w-full sm:w-72">
            <Sidebar />
          </div>
          {/* Main Content */}
          <main className="flex-1 w-[calc(100vw-70rem)]">
            <Header />
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-8 w-[-webkit-fill-available] available">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
