"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container header-container">
        <div className="logo">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="株式会社ミートパッカー久慈"
              width={168}
              height={42}
              className="logo-image"
            />
          </Link>
        </div>

        {/* ハンバーガーメニューボタン（モバイルのみ表示） */}
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="メニューを開く">
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* デスクトップナビゲーション */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <Link href="/">トップページ</Link>
            </li>
            <li>
              <Link href="/company">会社の説明</Link>
            </li>
            <li>
              <Link href="/products">取扱商品</Link>
            </li>
            <li>
              <Link href="/faq">よくある質問</Link>
            </li>
            <li>
              <Link href="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </nav>

        {/* モバイルナビゲーション */}
        <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link href="/" onClick={closeMenu}>
                トップページ
              </Link>
            </li>
            <li>
              <Link href="/company" onClick={closeMenu}>
                会社の説明
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={closeMenu}>
                取扱商品
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={closeMenu}>
                よくある質問
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>

        {/* オーバーレイ */}
        {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  )
}
