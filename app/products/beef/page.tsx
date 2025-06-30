"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function BeefProducts() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-16">
      {/* スクロールリセット用の非表示要素 */}
      <div id="page-top" style={{ position: "absolute", top: 0 }}></div>

      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>牛肉</h1>
          <p>和牛・国産牛・輸入牛の様々な部位を取り扱っております</p>
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
            <span className="breadcrumb-current">牛肉</span>
          </nav>
        </div>
      </section>

      {/* 商品説明セクション */}
      <section className="product-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-image">
              <img src="/images/beef.jpeg" alt="牛肉" className="intro-img" />
            </div>
            <div className="intro-text">
              <p className="intro-main">ミートパッカー久慈では、和牛、国産牛、輸入牛の様々な部位を取扱っております。</p>
              <p className="intro-sub">
                また、お客様のご要望に応じた加工も承っております。
                <br />
                ご質問等がございましたら、お気軽にお問い合わせください。
              </p>
              <div className="intro-features">
                <div className="feature-badge">
                  <span className="badge-icon">🥩</span>
                  <span>厳選された品質</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">✂️</span>
                  <span>カスタム加工対応</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">🚚</span>
                  <span>新鮮配送</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 和牛セクション */}
      <section className="beef-category section-padding bg-light">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">和牛</h2>
            <p className="category-description">
              最高級の和牛を各部位取り揃えております。A4・A5ランクの厳選された和牛をご提供いたします。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>和牛ネック</h3>
              <p>煮込み料理に最適な部位。コラーゲンが豊富で、じっくり煮込むことで柔らかく美味しくなります。</p>
            </div>
            <div className="product-item">
              <h3>和牛肩ロース</h3>
              <p>適度な霜降りで旨味が豊富。ステーキ、焼肉、すき焼きなど幅広い料理に使用できます。</p>
            </div>
            <div className="product-item">
              <h3>和牛ヒレ</h3>
              <p>最も柔らかい部位で、脂肪が少なくヘルシー。高級ステーキに最適な部位です。</p>
            </div>
            <div className="product-item">
              <h3>和牛バラ正肉</h3>
              <p>霜降りが美しく、焼肉やすき焼きに人気。濃厚な旨味が特徴の部位です。</p>
            </div>
            <div className="product-item">
              <h3>和牛ランプ</h3>
              <p>赤身が多く、適度な脂肪でバランスの良い部位。ステーキやローストビーフに最適。</p>
            </div>
            <div className="product-item">
              <h3>和牛スネ</h3>
              <p>コラーゲンが豊富で、煮込み料理やスープに最適。長時間煮込むことで絶品の味わいに。</p>
            </div>
            <div className="product-item">
              <h3>和牛リブロース</h3>
              <p>霜降りが美しく、ステーキの王様と呼ばれる部位。柔らかく濃厚な味わいが楽しめます。</p>
            </div>
            <div className="product-item">
              <h3>和牛サーロイン</h3>
              <p>最高級ステーキ用部位。きめ細かい霜降りと上品な味わいが特徴です。</p>
            </div>
            <div className="product-item">
              <h3>和牛内モモ</h3>
              <p>赤身が中心で、ローストビーフやステーキに適した部位。あっさりとした味わい。</p>
            </div>
            <div className="product-item">
              <h3>和牛外モモ</h3>
              <p>赤身肉で、薄切りにして焼肉やしゃぶしゃぶに最適。ヘルシーで旨味豊富。</p>
            </div>
            <div className="product-item">
              <h3>和牛スジ</h3>
              <p>コラーゲンたっぷりで、煮込み料理やカレーに最適。美容にも良い部位です。</p>
            </div>
            <div className="product-item">
              <h3>和牛挽肉</h3>
              <p>ハンバーグやミートソースに最適。和牛の旨味を手軽に楽しめます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 国産牛セクション */}
      <section className="beef-category section-padding">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">国産牛</h2>
            <p className="category-description">
              国産の高品質な牛肉を各部位取り揃えております。安心・安全な国産牛をお届けいたします。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>国産牛ネック</h3>
              <p>煮込み料理に最適。コラーゲンが豊富で、時間をかけて調理することで絶品の味わいに。</p>
            </div>
            <div className="product-item">
              <h3>国産牛肩ロース</h3>
              <p>適度な脂肪で旨味豊富。ステーキ、焼肉、すき焼きなど様々な料理に活用できます。</p>
            </div>
            <div className="product-item">
              <h3>国産牛ヒレ</h3>
              <p>柔らかく脂肪が少ない部位。ステーキやローストビーフに最適です。</p>
            </div>
            <div className="product-item">
              <h3>国産牛バラ正肉</h3>
              <p>脂肪と赤身のバランスが良く、焼肉やすき焼きに人気の部位です。</p>
            </div>
            <div className="product-item">
              <h3>国産牛ランプ</h3>
              <p>赤身中心でヘルシー。ステーキやローストビーフに適した部位です。</p>
            </div>
            <div className="product-item">
              <h3>国産牛スネ</h3>
              <p>コラーゲン豊富で、煮込み料理やスープストックに最適な部位です。</p>
            </div>
            <div className="product-item">
              <h3>国産牛リブロース</h3>
              <p>霜降りが美しく、ステーキに最適。柔らかく濃厚な味わいが特徴です。</p>
            </div>
            <div className="product-item">
              <h3>国産牛サーロイン</h3>
              <p>高級ステーキ用部位。きめ細かい肉質と上品な味わいが楽しめます。</p>
            </div>
            <div className="product-item">
              <h3>国産牛内モモ</h3>
              <p>赤身が中心で、ローストビーフやステーキに適しています。</p>
            </div>
            <div className="product-item">
              <h3>国産牛外モモ</h3>
              <p>赤身肉で、薄切りにして焼肉やしゃぶしゃぶに最適です。</p>
            </div>
            <div className="product-item">
              <h3>国産牛スジ</h3>
              <p>コラーゲンたっぷりで、煮込み料理に最適。美容効果も期待できます。</p>
            </div>
            <div className="product-item">
              <h3>国産牛挽肉</h3>
              <p>ハンバーグやミートソースに最適。国産牛の旨味を手軽に味わえます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 輸入牛セクション */}
      <section className="beef-category section-padding bg-light">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">輸入牛（オーストラリア産）</h2>
            <p className="category-description">
              オーストラリア産の高品質な牛肉を取り扱っております。コストパフォーマンスに優れた輸入牛をご提供いたします。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>ネック</h3>
              <p>煮込み料理に最適な部位。長時間の調理で柔らかく美味しくなります。</p>
            </div>
            <div className="product-item">
              <h3>テンダーロイン（ヒレ）</h3>
              <p>最も柔らかい部位で、高級ステーキに最適。脂肪が少なくヘルシーです。</p>
            </div>
            <div className="product-item">
              <h3>キューブロール（リブロース）</h3>
              <p>霜降りが美しく、ステーキに最適な部位。柔らかく濃厚な味わいが特徴です。</p>
            </div>
            <div className="product-item">
              <h3>チャックロール（肩ロース）</h3>
              <p>適度な脂肪で旨味豊富。ステーキ、焼肉、すき焼きなど様々な料理に活用できます。</p>
            </div>
            <div className="product-item">
              <h3>ストリップロイン（サーロイン）</h3>
              <p>高級ステーキ用部位。きめ細かい肉質と上品な味わいが楽しめます。</p>
            </div>
            <div className="product-item">
              <h3>ショートリブ・ナーベル（バラ肉）</h3>
              <p>脂肪と赤身のバランスが良く、焼肉やすき焼き、煮込み料理に人気の部位です。</p>
            </div>
            <div className="product-item">
              <h3>トップサイド（内モモ）</h3>
              <p>赤身が中心で、ローストビーフやステーキに適した部位です。</p>
            </div>
            <div className="product-item">
              <h3>シルバーサイド（外モモ）</h3>
              <p>赤身肉で、薄切りにして焼肉やしゃぶしゃぶに最適な部位です。</p>
            </div>
            <div className="product-item">
              <h3>輸入牛挽肉</h3>
              <p>ハンバーグやミートソースに最適。コストパフォーマンスに優れた挽肉です。</p>
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
                <p>
                  ご指定の厚さ・サイズでのカット加工を承ります。ステーキ用、焼肉用など用途に応じて最適にカットいたします。
                </p>
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
            <h2>牛肉に関するお問い合わせ</h2>
            <p>
              牛肉の詳細や加工サービスについて、ご不明な点がございましたら
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
