import GlobalStyles from "@/providers/GlobalStyle";
import StyledComponentsRegistry from "@/providers/styledRegistry";
import StateProvider from "@/context/StateContext";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Pritakpol's Portfolio",
  description:
    "Welcome to Pritakpol's portfolio — showcasing modern web apps and full-stack projects. Let's build something great together.",
  keywords: [
    "Pritakpol",
    "Web Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "TypeScript",
    "JavaScript",
  ],
  authors: [{ name: "Pritakpol", url: "https://personal-gan-web.vercel.app" }],
  creator: "Pritakpol",
  openGraph: {
    title: "Pritakpol's Portfolio",
    description:
      "Discover Pritakpol's work in web development — from frontend finesse to backend logic. Built with Next.js and a passion for great UI.",
    url: "https://personal-gan-web.vercel.app",
    siteName: "Pritakpol Portfolio",
    images: [
      {
        url: "https://drive.google.com/file/d/15BiUe6RM1qZ2aOHtpUrh8_q6nHdHcBT4/view?usp=sharing", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Pritakpol Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://personal-gan-web.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <StateProvider>{children}</StateProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
