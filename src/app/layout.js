import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/colors.css";
import "./css/typography.css";
import "./css/globals.css";
import { ToastContainer } from "react-toastify";
import { CustomProvider } from "@/store/customProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Kervin Heart",
  description: "Coaching, meditation and personal growth — all in one calm space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <CustomProvider>
          <ToastContainer position="top-right" hideProgressBar newestOnTop />
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
