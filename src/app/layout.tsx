'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "@/lib/query_client.provider"
import ReactSessionProvider from "@/lib/session.provider";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactSessionProvider>
          <QueryClientProvider>
            <Providers>
              {children}
            </Providers>
          </QueryClientProvider>
        </ReactSessionProvider>
      </body>s
    </html>
  );
}
