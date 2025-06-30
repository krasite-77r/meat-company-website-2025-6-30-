"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function PorkProducts() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-16">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>豚肉</h1>
          <p>国産豚・輸入豚の様々な部位を取り扱っております</p>
        </div>
      </section>

      {/* パンくずナビ */}
      <section className="breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link href="/">トップページ</Link>
            <span className="breadcrumb-separator">›</span>
            <Link href="/products">取扱商品</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">豚肉</span>
          </nav>
        </div>
      </section>

      {/* 商品説明セクション */}
      <section className="product-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-image">
              <img src="/images/pork.jpeg" alt="豚肉" className="intro-img" />
            </div>
            <div className="intro-text">
              <p className="intro-main">ミートパッカー久慈では、国産豚・輸入豚の様々な部位を取り扱っております。</p>
              <p className="intro-sub">
                とんかつ用、生姜焼き用、角煮用など、料理に最適な部位をご用意。
                <br />
                お客様のご要望に応じた加工も承っております。
              </p>
              <div className="intro-features">
                <div className="feature-badge">
                  <span className="badge-icon">🐷</span>
                  <span>新鮮な国産・輸入豚</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">🔪</span>
                  <span>用途別カット対応</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 国産豚セクション */}
      <section className="pork-category section-padding bg-light">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">国産豚</h2>
            <p className="category-description">
              安心・安全な国産豚肉を各部位取り揃えております。銘柄豚も含め、高品質な豚肉をご提供いたします。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>豚肩ロース</h3>
              <p>適度な脂肪で旨味豊富。とんかつ、生姜焼き、焼肉など幅広い料理に使用できる人気部位です。</p>
            </div>
            <div className="product-item">
              <h3>豚ロース</h3>
              <p>柔らかく脂肪が少ない部位。とんかつ、ソテー、ステーキに最適で、上品な味わいが楽しめます。</p>
            </div>
            <div className="product-item">
              <h3>豚モモ</h3>
              <p>赤身が中心でヘルシー。薄切りにして生姜焼きや炒め物、ブロックで煮豚やローストポークに最適。</p>
            </div>
            <div className="product-item">
              <h3>豚コマ</h3>
              <p>様々な部位の切り落とし。炒め物、煮物、カレーなど日常料理に便利で経済的な部位です。</p>
            </div>
            <div className="product-item">
              <h3>豚ヒレ</h3>
              <p>最も柔らかく脂肪が少ない高級部位。ヒレカツ、ソテー、ローストポークに最適です。</p>
            </div>
            <div className="product-item">
              <h3>豚バラ</h3>
              <p>脂肪と赤身が層になった部位。角煮、焼肉、ベーコンの原料として人気の高い部位です。</p>
            </div>
            <div className="product-item">
              <h3>豚ひき肉</h3>
              <p>ハンバーグ、餃子、ミートボールに最適。国産豚の旨味を手軽に楽しめます。</p>
            </div>
            <div className="product-item">
              <h3>豚骨</h3>
              <p>ラーメンスープやシチューのダシ取りに最適。コラーゲンが豊富で濃厚なスープが作れます。</p>
            </div>
            <div className="product-item">
              <h3>豚軟骨</h3>
              <p>コリコリとした食感が特徴。煮込み料理や炒め物、軟骨唐揚げなどに使用されます。</p>
            </div>
            <div className="product-item">
              <h3>豚足</h3>
              <p>コラーゲンたっぷりで美容効果も期待。煮込み料理や沖縄料理のテビチに使用されます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 輸入豚セクション */}
      <section className="pork-category section-padding">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">輸入豚</h2>
            <p className="category-description">
              コストパフォーマンスに優れた輸入豚肉を取り扱っております。業務用から家庭用まで幅広くご利用いただけます。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>豚肩ロース</h3>
              <p>適度な脂肪で旨味豊富。とんかつ、生姜焼き、焼肉など様々な料理に活用できます。</p>
            </div>
            <div className="product-item">
              <h3>豚ロース</h3>
              <p>柔らかく使いやすい部位。とんかつ、ソテー、ステーキに最適です。</p>
            </div>
            <div className="product-item">
              <h3>豚モモ</h3>
              <p>赤身中心でヘルシー。生姜焼き、炒め物、煮豚など幅広い料理に使用できます。</p>
            </div>
            <div className="product-item">
              <h3>豚コマ</h3>
              <p>経済的で使いやすい部位。炒め物、煮物、カレーなど日常料理に最適です。</p>
            </div>
            <div className="product-item">
              <h3>豚ヒレ</h3>
              <p>柔らかく脂肪が少ない部位。ヒレカツ、ソテーに適しています。</p>
            </div>
            <div className="product-item">
              <h3>豚バラ</h3>
              <p>脂肪と赤身のバランスが良い部位。角煮、焼肉、炒め物に人気です。</p>
            </div>
            <div className="product-item">
              <h3>豚ひき肉</h3>
              <p>ハンバーグ、餃子、ミートソースに最適。コストパフォーマンスに優れた挽肉です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 加工サービス案内 */}
      <section className="processing-info section-padding">
        <div className="container">
          <div className="processing-content">
            <h2 className="processing-title">加工サービスのご案内</h2>
            <div className="processing-grid">
              <div className="processing-item">
                <div className="processing-icon">
                  <img
                    src="/images/knife-icon-new.png"
                    alt="用途別カット"
                    width="40"
                    height="40"
                    style={{ filter: "none" }}
                  />
                </div>
                <h3>用途別カット</h3>
                <p>とんかつ用、生姜焼き用、角煮用など、料理に応じた最適な厚さ・サイズでカット加工を承ります。</p>
              </div>
              <div className="processing-item">
                <div className="processing-icon">
                  <img
                    src="/images/organ-processing-icon.png"
                    alt="内臓処理"
                    width="40"
                    height="40"
                    style={{ filter: "none" }}
                  />
                </div>
                <h3>内臓処理</h3>
                <p>新鮮な内臓の下処理を承ります。もつ焼き用、もつ鍋用など用途に応じた処理を行います。</p>
              </div>
              <div className="processing-item">
                <div className="processing-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cd5e3c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <rect x="7" y="7" width="3" height="9"></rect>
                    <rect x="14" y="7" width="3" height="5"></rect>
                  </svg>
                </div>
                <h3>パッケージング</h3>
                <p>業務用から小分けパックまで、ご要望に応じたパッケージングを行います。真空パック包装も承ります。</p>
              </div>
              <div className="processing-item">
                <div className="processing-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cd5e3c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </div>
                <h3>特注加工</h3>
                <p>特殊な部位カットや調理用下処理など、お客様の特別なご要望にも柔軟に対応いたします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="product-cta section-padding bg-pattern">
        <div className="container">
          <div className="cta-content">
            <h2>豚肉に関するお問い合わせ</h2>
            <p>
              豚肉・内臓の詳細や加工サービスについて、ご不明な点がございましたら
              <br />
              お気軽にお問い合わせください。
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">
                お問い合わせフォーム
              </Link>
              <a href="tel:047-341-5041" className="btn btn-outline">
                電話で問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
