import type React from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "株式会社ミートパッカー久慈 - 高品質な食肉の卸売り",
  description:
    "株式会社ミートパッカー久慈は、創業50年の実績と信頼を持つ食肉卸売会社です。厳選された国産牛肉・豚肉・鶏肉を、飲食店様や小売店様へ安定供給しております。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
