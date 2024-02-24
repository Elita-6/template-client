import { Inter } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "@/lib/query_client.provider"
import ReactSessionProvider from "@/lib/session.provider";
import SessionProvider from "@/lib/session.provider";
import {getServerSession} from "next-auth";

const inter = Inter({ subsets: ["latin"] });



export default async function RootLayout({
                                           children ,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()
  return (
      <html lang="en">
      <body className={inter.className} >
      <QueryClientProvider>
        <SessionProvider session={session}>
            <main>
                {children}
            </main>
        </SessionProvider>
      </QueryClientProvider>
      </body>
      </html>
  );
}
