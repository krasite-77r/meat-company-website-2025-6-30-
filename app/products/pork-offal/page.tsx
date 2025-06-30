"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Soup } from "lucide-react" // Soup icon remains

export default function PorkOffal() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-16">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>豚モツ</h1>
          <p>新鮮な国産豚の内臓類を豊富に取り揃えております</p>
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
            <span className="breadcrumb-current">豚モツ</span>
          </nav>
        </div>
      </section>

      {/* 商品説明セクション */}
      <section className="product-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-image">
              <img src="/images/pork-offal.png" alt="豚モツ" className="intro-img" />
            </div>
            <div className="intro-text">
              <p className="intro-main">ミートパッカー久慈では、新鮮な国産豚の内臓類を豊富に取り揃えております。</p>
              <p className="intro-sub">
                もつ焼き、もつ鍋、ホルモン焼きなど専門店様にも対応した高品質な内臓をご提供。
                <br />
                下処理済みの商品もご用意しており、調理時間の短縮にも貢献いたします。
              </p>
              <div className="intro-features">
                <div className="feature-badge">
                  <span className="badge-icon">🐷</span>
                  <span>新鮮な国産豚内臓</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">🔪</span>
                  <span>下処理済み商品</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">🍲</span>
                  <span>専門店対応</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 豚内臓カテゴリーセクション */}
      <section className="pork-category section-padding bg-light">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">国産豚内臓</h2>
            <p className="category-description">
              新鮮な国産豚の内臓類を豊富に取り揃えております。もつ焼き、もつ鍋、ホルモン焼きなど専門店様にも対応いたします。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>カシラ</h3>
              <p>豚の頬肉部分。適度な脂肪で旨味が濃く、焼肉やもつ焼きに人気の部位です。コリコリとした食感が特徴。</p>
            </div>
            <div className="product-item">
              <h3>コメカミ</h3>
              <p>豚のこめかみ部分。柔らかく上品な味わいで、焼肉や炒め物に適しています。脂肪が少なくヘルシーな部位。</p>
            </div>
            <div className="product-item">
              <h3>レバー</h3>
              <p>鉄分豊富な肝臓。レバニラ炒め、焼き鳥、パテなどに使用される栄養価の高い部位です。ビタミンAも豊富。</p>
            </div>
            <div className="product-item">
              <h3>ハラミ</h3>
              <p>横隔膜の筋肉部分。柔らかく脂肪が少なく、焼肉で人気の高い部位です。赤身に近い味わいが特徴。</p>
            </div>
            <div className="product-item">
              <h3>上白（大腸）</h3>
              <p>大腸の上質な部分。プリプリとした食感で、もつ鍋やもつ焼きに最適です。脂肪の甘みが楽しめます。</p>
            </div>
            <div className="product-item">
              <h3>テッポウ（直腸）</h3>
              <p>
                直腸部分で筒状の形が特徴。コリコリとした食感で、もつ焼きに人気です。見た目がテッポウに似ていることから命名。
              </p>
            </div>
            <div className="product-item">
              <h3>切白</h3>
              <p>小腸やガツをカットし、食べやすく、もつ鍋や炒め物に適しています。下処理済みで調理が簡単。</p>
            </div>
            <div className="product-item">
              <h3>タン</h3>
              <p>豚の舌。柔らかく上品な味わいで、焼肉や煮込み料理に使用されます。牛タンより柔らかいのが特徴。</p>
            </div>
            <div className="product-item">
              <h3>ハツ</h3>
              <p>心臓部分。歯ごたえがあり、焼肉やもつ焼きに人気。鉄分も豊富で栄養価が高い部位です。</p>
            </div>
            <div className="product-item">
              <h3>ガツ</h3>
              <p>胃袋部分。独特の食感があり、もつ鍋や炒め物に使用されます。下処理が重要な部位です。</p>
            </div>
            <div className="product-item">
              <h3>ダンゴ（小腸）</h3>
              <p>小腸を丸めた状態。プリプリとした食感で、もつ鍋に最適です。脂肪の甘みと独特の食感が楽しめます。</p>
            </div>
            <div className="product-item">
              <h3>ひも（小腸）</h3>
              <p>小腸をひも状にした状態。柔らかく、もつ鍋や炒め物に人気です。調理しやすい形状が特徴。</p>
            </div>
            <div className="product-item">
              <h3>コブクロ</h3>
              <p>子宮部分。独特の食感と旨味があり、もつ焼きの定番部位です。希少部位として珍重されています。</p>
            </div>
            <div className="product-item">
              <h3>豚足</h3>
              <p>
                コラーゲンたっぷりで美容効果も期待。煮込み料理や沖縄料理のテビチに使用されます。長時間煮込むことで絶品に。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 豚モツの特徴セクション */}
      <section className="offal-features section-padding">
        <div className="container">
          <div className="features-content">
            <h2 className="features-title">豚モツの特徴とメリット</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cd5e3c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"></path>
                  </svg>
                </div>
                <h3>栄養価が豊富</h3>
                <p>鉄分、ビタミンA、ビタミンB群、亜鉛などの栄養素が豊富に含まれており、健康維持に効果的です。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cd5e3c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12,6 12,12 16,14"></polyline>
                  </svg>
                </div>
                <h3>コラーゲン豊富</h3>
                <p>腸類や豚足にはコラーゲンが豊富に含まれており、美容効果や関節の健康維持に役立ちます。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cd5e3c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h3>独特の食感</h3>
                <p>部位ごとに異なる食感が楽しめ、プリプリ、コリコリ、柔らかなど多様な味わいを提供します。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cd5e3c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3>経済的</h3>
                <p>精肉と比較してリーズナブルな価格で、ボリュームのある料理を作ることができます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 調理方法セクション */}
      <section className="cooking-methods section-padding bg-light">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">おすすめ調理方法</h2>
          </div>
          <div className="cooking-grid">
            <div className="cooking-item">
              <div className="cooking-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cd5e3c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <h3>もつ焼き</h3>
              <p>
                炭火で焼くことで香ばしさが増し、各部位の旨味を最大限に引き出します。タレや塩で味付けして楽しめます。
              </p>
            </div>
            <div className="cooking-item">
              <div className="cooking-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cd5e3c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3>もつ鍋</h3>
              <p>
                野菜と一緒に煮込むことで、コラーゲンが溶け出し美容効果も期待できます。味噌や醤油ベースで楽しめます。
              </p>
            </div>
            <div className="cooking-item">
              <div className="cooking-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cd5e3c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h3>炒め物</h3>
              <p>野菜と一緒に炒めることで、栄養バランスの良い一品に。ニラレバ炒めなどが代表的な料理です。</p>
            </div>
            <div className="cooking-item">
              <div className="cooking-icon">
                <Soup size={48} color="#cd5e3c" />
              </div>
              <h3>煮込み料理</h3>
              <p>
                時間をかけて煮込むことで、硬い部位も柔らかくなり、深い味わいが楽しめます。カレーやシチューにも最適。
              </p>
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
                    src="/images/organ-processing-icon.png"
                    alt="内臓処理"
                    width="40"
                    height="40"
                    style={{ filter: "none" }}
                  />
                </div>
                <h3>下処理サービス</h3>
                <p>
                  新鮮な内臓の下処理を承ります。もつ焼き用、もつ鍋用など用途に応じた処理を行い、調理時間を短縮できます。
                </p>
              </div>
              <div className="processing-item">
                <div className="processing-icon">
                  <img
                    src="/images/knife-icon-new.png"
                    alt="カット加工"
                    width="40"
                    height="40"
                    style={{ filter: "none" }}
                  />
                </div>
                <h3>カット加工</h3>
                <p>
                  お客様のご要望に応じたサイズでのカット加工を承ります。食べやすいサイズや調理に適したサイズに調整いたします。
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
                <h3>特注対応</h3>
                <p>
                  もつ焼き専門店様向けの特殊な処理や、特別なご要望にも柔軟に対応いたします。お気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="product-cta section-padding bg-pattern">
        <div className="container">
          <div className="cta-content">
            <h2>豚モツに関するお問い合わせ</h2>
            <p>
              豚モツの詳細や加工サービスについて、ご不明な点がございましたら
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
