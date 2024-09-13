import Navbar from "@/components/global/Navbar";
import "./globals.css";
import Footer from "@/components/global/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
