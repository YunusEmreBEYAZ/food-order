import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-5xl mx-auto p-4">
        <Header />
        {children}
        <footer className="text-center my-6 border-t text-gray-700 p-4 text-sm">
          <p>&copy; 2024 Pizza Place</p>
        </footer> 
        </main>
      </body>
    </html>
  );
}
