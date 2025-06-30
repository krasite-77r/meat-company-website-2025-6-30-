"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function ProcessedProducts() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-16">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>加工品</h1>
          <p>ハム・ベーコン・ソーセージなどの食肉加工品を幅広く取り扱っております</p>
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
            <span className="breadcrumb-current">加工品</span>
          </nav>
        </div>
      </section>

      {/* 商品説明セクション */}
      <section className="product-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-image">
              <img src="/images/processed-products-new.png" alt="加工品" className="intro-img" />
            </div>
            <div className="intro-text">
              <p className="intro-main">
                ミートパッカー久慈では、ハム、ベーコン、ソーセージなどの食肉加工品を幅広く取り扱っております。
              </p>
              <p className="intro-sub">
                朝食、お弁当、業務用まで幅広いニーズにお応えする商品をご用意。
                <br />
                国産・輸入問わず、品質にこだわった加工品をご提供いたします。
              </p>
              <div className="intro-features">
                <div className="feature-badge">
                  <span className="badge-icon">🥓</span>
                  <span>豊富な加工品</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">📦</span>
                  <span>業務用・家庭用対応</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">⭐</span>
                  <span>品質にこだわり</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ハムセクション */}
      <section className="processed-category section-padding bg-light">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">ハム</h2>
            <p className="category-description">
              様々な部位を使用したハムを取り揃えております。サンドイッチ、サラダ、お弁当など幅広い用途にご利用いただけます。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>ロースハム</h3>
              <p>
                豚ロース肉を使用した定番のハム。きめ細かい肉質で上品な味わい。スライスしてそのまま食べても美味しい高級ハムです。
              </p>
            </div>
            <div className="product-item">
              <h3>ボンレスハム</h3>
              <p>
                豚もも肉を使用した骨なしハム。あっさりとした味わいで、サンドイッチやサラダに最適。経済的で使いやすいハムです。
              </p>
            </div>
            <div className="product-item">
              <h3>ショルダーハム</h3>
              <p>
                豚肩肉を使用したハム。適度な脂肪で旨味が豊富。厚切りにしてハムステーキにしても美味しくお召し上がりいただけます。
              </p>
            </div>
            <div className="product-item">
              <h3>プレスハム</h3>
              <p>
                複数の部位を組み合わせたハム。リーズナブルな価格で、業務用としても人気。様々な料理にご活用いただけます。
              </p>
            </div>
            <div className="product-item">
              <h3>生ハム</h3>
              <p>
                塩漬けして熟成させた生ハム。そのまま食べて美味しく、ワインのおつまみやサラダのトッピングに最適です。
              </p>
            </div>
            <div className="product-item">
              <h3>ハム切り落とし</h3>
              <p>ハムの端材を集めた経済的な商品。炒め物、チャーハン、オムレツなどの具材として重宝します。</p>
            </div>
            <div className="product-item">
              <h3>スライスハム</h3>
              <p>使いやすくスライス済みのハム。サンドイッチやお弁当に便利。様々な厚さでご用意可能です。</p>
            </div>
            <div className="product-item">
              <h3>ブロックハム</h3>
              <p>塊のままのハム。お客様のご要望に応じてカットいたします。業務用として人気の商品です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ベーコンセクション */}
      <section className="processed-category section-padding">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">ベーコン</h2>
            <p className="category-description">
              豚バラ肉を塩漬け・燻製したベーコンを各種取り揃えております。朝食、パスタ、サラダなど様々な料理にご活用ください。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>ブロックベーコン</h3>
              <p>
                塊のままのベーコン。お好みの厚さにカットしてご利用いただけます。厚切りにしてステーキ風にも楽しめます。
              </p>
            </div>
            <div className="product-item">
              <h3>スライスベーコン</h3>
              <p>使いやすくスライス済みのベーコン。朝食やサンドイッチに便利。様々な厚さでご用意しております。</p>
            </div>
            <div className="product-item">
              <h3>ショルダーベーコン</h3>
              <p>
                豚肩肉を使用したベーコン。バラ肉より脂肪が少なく、あっさりとした味わい。ヘルシー志向の方におすすめです。
              </p>
            </div>
            <div className="product-item">
              <h3>ベーコンビッツ</h3>
              <p>小さくカットしたベーコン。サラダのトッピングやスープの具材として便利。時短調理にも最適です。</p>
            </div>
            <div className="product-item">
              <h3>ベーコン切り落とし</h3>
              <p>ベーコンの端材を集めた経済的な商品。炒め物、パスタ、チャーハンなどの具材として活用できます。</p>
            </div>
            <div className="product-item">
              <h3>厚切りベーコン</h3>
              <p>厚めにカットしたベーコン。食べ応えがあり、メイン料理としても楽しめます。BBQにも最適です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ソーセージセクション */}
      <section className="processed-category section-padding bg-light">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">ソーセージ</h2>
            <p className="category-description">
              ウインナー、フランクフルトなど様々なソーセージを取り扱っております。お弁当、BBQ、おつまみなど幅広くご利用いただけます。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>ウインナーソーセージ</h3>
              <p>定番のウインナーソーセージ。お弁当や朝食に人気。様々なサイズと味付けをご用意しております。</p>
            </div>
            <div className="product-item">
              <h3>フランクフルトソーセージ</h3>
              <p>
                太めのソーセージ。食べ応えがあり、BBQやビールのおつまみに最適。ボイルしても焼いても美味しくお召し上がりいただけます。
              </p>
            </div>
            <div className="product-item">
              <h3>チョリソーソーセージ</h3>
              <p>
                スパイシーな味付けのソーセージ。パエリアやパスタの具材としても人気。ピリッとした辛さがアクセントになります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* その他加工品セクション */}
      <section className="processed-category section-padding">
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">その他加工品</h2>
            <p className="category-description">
              ハム・ベーコン・ソーセージ以外にも、様々な食肉加工品を取り扱っております。料理の幅を広げる商品をご用意。
            </p>
          </div>
          <div className="products-grid">
            <div className="product-item">
              <h3>ローストビーフ</h3>
              <p>低温でじっくり焼いた牛肉。薄くスライスしてサンドイッチやサラダに。特別な日の料理にも最適です。</p>
            </div>
            <div className="product-item">
              <h3>チャーシュー</h3>
              <p>
                豚肉を醤油ベースのタレで煮込んだ中華風加工品。ラーメンのトッピングやチャーハンの具材として人気です。
              </p>
            </div>
            <div className="product-item">
              <h3>ミートボール</h3>
              <p>調理済みのミートボール。温めるだけで食べられて便利。お弁当やパスタの具材として重宝します。</p>
            </div>
            <div className="product-item">
              <h3>つくね</h3>
              <p>鶏肉のつくね。焼き鳥風の味付けで、温めるだけで食べられます。お弁当やおつまみに便利な商品です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 加工品の特徴セクション */}
      <section className="processed-features section-padding bg-light">
        <div className="container">
          <div className="features-content">
            <h2 className="features-title">加工品の特徴とメリット</h2>
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12,6 12,12 16,14"></polyline>
                  </svg>
                </div>
                <h3>時短調理</h3>
                <p>調理済み・半調理済みの商品が多く、温めるだけで食べられるため、忙しい時の時短調理に最適です。</p>
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
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </div>
                <h3>長期保存</h3>
                <p>適切な加工により保存期間が長く、冷蔵・冷凍保存で長期間品質を保つことができます。</p>
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
                <h3>豊富な味わい</h3>
                <p>燻製、塩漬け、発酵など様々な加工方法により、生肉では味わえない独特の風味と食感が楽しめます。</p>
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
                <h3>使いやすさ</h3>
                <p>スライス済み、カット済みの商品が多く、そのまま使えて調理の手間が省けます。お弁当にも便利です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 用途別おすすめセクション */}
      <section className="usage-recommendations section-padding">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">用途別おすすめ商品</h2>
          </div>
          <div className="usage-grid">
            <div className="usage-item">
              <div className="usage-icon">
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
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </div>
              <h3>朝食・お弁当</h3>
              <p>スライスハム、ウインナーソーセージ、ベーコンなど、手軽に調理できて栄養価の高い商品がおすすめです。</p>
            </div>
            <div className="usage-item">
              <div className="usage-icon">
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
                  <path d="M3 3h18v18H3z"></path>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
              </div>
              <h3>業務用・大容量</h3>
              <p>
                ブロックハム、ブロックベーコン、業務用ソーセージなど、大容量でコストパフォーマンスに優れた商品をご用意。
              </p>
            </div>
            <div className="usage-item">
              <div className="usage-icon">
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
              <h3>パーティー・BBQ</h3>
              <p>フランクフルト、厚切りベーコン、サラミなど、みんなで楽しめる商品が豊富。特別な日にもおすすめです。</p>
            </div>
            <div className="usage-item">
              <div className="usage-icon">
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
              <h3>おつまみ・軽食</h3>
              <p>
                生ハム、サラミ、チーズ入りソーセージなど、そのまま食べて美味しい商品。ワインやビールのお供に最適です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="product-cta section-padding bg-pattern">
        <div className="container">
          <div className="cta-content">
            <h2>加工品に関するお問い合わせ</h2>
            <p>
              加工品の詳細や取扱商品について、ご不明な点がございましたら
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
