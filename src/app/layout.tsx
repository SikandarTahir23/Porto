import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";
import Script from 'next/script'; // Importing the Script component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Folio the best Portfolio or Personal Website",
  description:
    "Folio is the best portfolio or personal website for developer, creator or businessman.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeSwitch />
          <Sidebar />
          {children}
        </Providers>
        <Analytics />
        
        {/* Adding the Kommunicate script */}
        <Script
          id="kommunicate-script"
          strategy="afterInteractive" // Load script after the page is interactive
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, m){
                  var kommunicateSettings = 
                      {"appId":"1d30e58d8cff7b528419909c0bb6bdd00","popupWidget":true,"automaticChatOpenOnNavigation":true};
                  var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                  var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                  window.kommunicate = m; m._globals = kommunicateSettings;
              })(document, window.kommunicate || {});
            `,
          }}
        />
      </body>
    </html>
  );
}
