import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <Image src="/images/logo.png" alt="株式会社ミートパッカー久慈" width={126} height={32} className="mb-4" />
          </div>
          <p>
            株式会社ミートパッカー久慈
            <br />
            〒270-0023
            <br />
            千葉県松戸市八ヶ崎二丁目３番地の１
            <br />
            TEL: （代表）　047‐341-5041
            <br />
            FAX: 047‐347-6970
          </p>
        </div>
        <div className="footer-section">
          <h4>サイトマップ</h4>
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
        </div>
        <div className="footer-section">
          <h4>営業時間</h4>
          <p>
            平日: 8:30〜17:30
            <br />
            土日祝: 休業
          </p>
        </div>
      </div>
      <div className="container copyright">
        <p>&copy; 2025 株式会社ミートパッカー久慈 All Rights Reserved.</p>
      </div>
    </footer>
  )
}
