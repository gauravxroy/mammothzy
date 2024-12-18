import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider"
// import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>

      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>

  );
}
