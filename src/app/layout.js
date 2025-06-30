import { Montserrat } from "next/font/google";
import "./global.css";
import { ThemeProviderContext } from "../utils/themeContext.jsx";
import AppHeader from "../components/AppHeader/index.jsx";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sparsh Jain",
  description:
    "Sparsh Jain is an AI researcher at IIT Madras, specializing in multilingual NLP, speech translation, and Indian language technologies. His work with AI4Bharat includes large-scale datasets, LLMs, and state-of-the-art models like IndicSeamlessM4T. He has received awards at ACL and contributes significantly to open-source AI for Bharat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProviderContext>
          <AppHeader />
          {children}
        </ThemeProviderContext>
      </body>
    </html>
  );
}
