"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function ChickenProducts() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-16">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>鶏肉</h1>
          <p>国産鶏肉・輸入鶏肉の様々な部位と串焼き用商品を取り扱っております</p>
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
            <span className="breadcrumb-current">鶏肉</span>
          </nav>
        </div>
      </section>

      {/* 商品説明セクション */}
      <section className="product-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-image">
              <img src="/images/chicken.jpeg" alt="鶏肉" className="intro-img" />
            </div>
            <div className="intro-text">
              <p className="intro-main">
                ミートパッカー久慈では、国産鶏肉・輸入鶏肉の様々な部位と串焼き用商品を取り扱っております。
              </p>
              <p className="intro-sub">
                から揚げ用、照り焼き用、煮物用など、様々な調理法に対応した部位をご用意。
                <br />
                焼き鳥店様向けの串焼き商品も豊富に取り揃えております。
              </p>
              <div className="intro-features">
                <div className="feature-badge">
                  <span className="badge-icon">🐔</span>
                  <span>新鮮な国産・輸入鶏</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">🍢</span>
                  <span>串焼き商品充実</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">⚡</span>
                  <span>調理しやすい部位</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 国産鶏肉セクション */}
      <section className="chicken-category section-padding bg-light">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">国産鶏肉</h2>
            <p className="category-description">
              安心・安全な国産鶏肉を各部位取り揃えております。銘柄鶏も含め、高品質な鶏肉と串焼き商品をご提供いたします。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>丸鶏</h3>
              <p>鶏一羽まるごと。ローストチキン、水炊き、参鶏湯などに最適。特別な日の料理におすすめです。</p>
            </div>
            <div className="product-item">
              <h3>鶏もも</h3>
              <p>ジューシーで旨味豊富な人気部位。から揚げ、照り焼き、煮物など幅広い料理に使用できます。</p>
            </div>
            <div className="product-item">
              <h3>鶏むね</h3>
              <p>脂肪が少なくヘルシーな部位。蒸し鶏、チキンカツ、サラダチキンに最適です。</p>
            </div>
            <div className="product-item">
              <h3>ささみ</h3>
              <p>最も脂肪が少なく高タンパク。ダイエット食材として人気。蒸し物、フライに最適です。</p>
            </div>
            <div className="product-item">
              <h3>手羽先</h3>
              <p>コラーゲン豊富で美容効果も期待。手羽先揚げ、煮物、スープに人気の部位です。</p>
            </div>
            <div className="product-item">
              <h3>手羽元</h3>
              <p>食べ応えがあり、煮込み料理に最適。チューリップ唐揚げや煮物に使用されます。</p>
            </div>
            <div className="product-item">
              <h3>鶏レバー</h3>
              <p>鉄分豊富で栄養価が高い。レバニラ炒め、焼き鳥、パテなどに使用される健康食材です。</p>
            </div>
            <div className="product-item">
              <h3>砂肝</h3>
              <p>コリコリとした独特の食感。焼き鳥、炒め物、煮物に人気。低脂肪で高タンパクです。</p>
            </div>
            <div className="product-item">
              <h3>鶏皮</h3>
              <p>パリパリに焼くと絶品。焼き鳥、炒め物、スープの出汁取りにも使用されます。</p>
            </div>
            <div className="product-item">
              <h3>ヤゲン軟骨</h3>
              <p>胸骨の軟骨部分。コリコリとした食感で、焼き鳥や唐揚げに人気の部位です。</p>
            </div>
            <div className="product-item">
              <h3>鶏もも挽肉</h3>
              <p>ジューシーな鶏もも肉の挽肉。つくね、ハンバーグ、餃子に最適です。</p>
            </div>
            <div className="product-item">
              <h3>鶏むね挽肉</h3>
              <p>あっさりとした鶏むね肉の挽肉。ヘルシーな料理やダイエット食品に適しています。</p>
            </div>
            <div className="product-item">
              <h3>鶏もも串</h3>
              <p>焼き鳥店様向けの串焼き商品。ジューシーな鶏ももを串に刺した状態でご提供します。</p>
            </div>
            <div className="product-item">
              <h3>鶏皮串</h3>
              <p>焼き鳥店様向けの串焼き商品。パリパリに焼ける鶏皮を串に刺した状態でご提供します。</p>
            </div>
            <div className="product-item">
              <h3>鶏軟骨串</h3>
              <p>焼き鳥店様向けの串焼き商品。コリコリ食感の軟骨を串に刺した状態でご提供します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 輸入鶏肉セクション */}
      <section className="chicken-category section-padding">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">輸入鶏肉（ブラジル産）</h2>
            <p className="category-description">
              ブラジル産の高品質な鶏肉を取り扱っております。コストパフォーマンスに優れ、業務用から家庭用まで幅広くご利用いただけます。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>鶏もも</h3>
              <p>ジューシーで旨味豊富。から揚げ、照り焼き、煮物など様々な料理に活用できます。</p>
            </div>
            <div className="product-item">
              <h3>鶏むね</h3>
              <p>脂肪が少なくヘルシー。蒸し鶏、チキンカツ、サラダチキンに最適です。</p>
            </div>
            <div className="product-item">
              <h3>鶏皮</h3>
              <p>パリパリに焼くと美味しい。焼き鳥、炒め物、スープの出汁取りに使用されます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 鶏肉の特徴セクション */}
      <section className="chicken-features section-padding bg-light">
        <div className="container">
          <div className="features-content">
            <h2 className="features-title">鶏肉の特徴とメリット</h2>
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
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h3>高タンパク・低脂肪</h3>
                <p>鶏肉は高タンパクで低脂肪、特にむね肉やささみはダイエットや筋トレに最適な食材です。</p>
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
                <h3>調理しやすい</h3>
                <p>火の通りが早く、様々な調理法に対応。から揚げ、焼き鳥、煮物など幅広い料理に活用できます。</p>
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
                <h3>経済的</h3>
                <p>他の食肉と比較してリーズナブルな価格で、家計に優しい食材として人気があります。</p>
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
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"></path>
                  </svg>
                </div>
                <h3>美容・健康効果</h3>
                <p>コラーゲンやビタミンB群が豊富で、美肌効果や疲労回復に効果的な栄養素が含まれています。</p>
              </div>
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
                <p>から揚げ用、照り焼き用、煮物用など、料理に応じた最適なサイズでカット加工を承ります。</p>
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
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h3>串焼き加工</h3>
                <p>焼き鳥店様向けに、各部位を串に刺した状態でご提供。調理時間の短縮と品質の均一化を実現します。</p>
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
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <h3>挽肉加工</h3>
                <p>
                  つくね用、ハンバーグ用など、用途に応じた粗さでの挽肉加工を行います。部位別の挽肉もご用意可能です。
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
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="product-cta section-padding bg-pattern">
        <div className="container">
          <div className="cta-content">
            <h2>鶏肉に関するお問い合わせ</h2>
            <p>
              鶏肉の詳細や加工サービスについて、ご不明な点がございましたら
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
