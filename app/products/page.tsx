import Link from "next/link"

export default function Products() {
  return (
    <main className="pt-16">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>取扱商品</h1>
          <p>高品質な国産・輸入食肉を幅広く取り扱っております</p>
        </div>
      </section>

      {/* メイン説明セクション */}
      <section className="products-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <p className="intro-main">
                ミートパッカー久慈では、国産肉・輸入肉の「牛肉」「豚肉」「鶏肉」「内臓肉」などに加え、ハム、ベーコン、ウィンナーなどの加工品も幅広く取り扱っております。
              </p>
              <p className="intro-sub">
                また、お客様のご要望に応じた加工も承っております。
                <br />
                お気軽にお問い合わせください。
              </p>
            </div>
            <div className="intro-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                <div className="feature-text">
                  <h3>厳選された品質</h3>
                  <p>国産・輸入問わず、厳しい基準で選別した高品質な食肉のみを取り扱っております。</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src="/images/knife-icon-new.png"
                    alt="用途別カット"
                    width="32"
                    height="32"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="feature-text">
                  <h3>用途別カット</h3>
                  <p>お客様のご要望に応じた各種カットも職人の確かな技術でお応えします。</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cd5e3c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div className="feature-text">
                  <h3>安定供給</h3>
                  <p>自社便配送により、新鮮な食肉を安定してお届けいたします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商品カテゴリーセクション */}
      <section className="product-categories section-padding bg-light">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">商品カテゴリー</h2>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-image">
                <img src="/images/beef.jpeg" alt="牛肉" className="category-img" />
              </div>
              <div className="category-content">
                <h3>牛肉</h3>
                <p>
                  国産和牛から輸入牛まで、様々なグレードの牛肉を取り扱っております。
                  ステーキ用、焼肉用、煮込み用など、用途に応じた部位をご提供いたします。
                </p>
                <ul className="category-features">
                  <li>国産和牛（A4・A5ランク）</li>
                  <li>輸入牛肉（アメリカ・オーストラリア産）</li>
                  <li>各種部位（サーロイン、リブロース、バラ、モモ等）</li>
                  <li>挽肉・内臓類</li>
                </ul>
                <Link href="/products/beef" className="category-btn">
                  牛肉の詳細を見る
                </Link>
              </div>
            </div>

            <div className="category-card">
              <div className="category-image">
                <img src="/images/pork.jpeg" alt="豚肉" className="category-img" />
              </div>
              <div className="category-content">
                <h3>豚肉</h3>
                <p>
                  国産豚肉を中心に、新鮮で高品質な豚肉を各種取り揃えております。
                  とんかつ用、生姜焼き用、角煮用など、料理に最適な部位をご用意。
                </p>
                <ul className="category-features">
                  <li>国産豚肉（銘柄豚含む）</li>
                  <li>輸入豚肉</li>
                  <li>各種部位（ロース、バラ、モモ、肩ロース等）</li>
                  <li>挽肉・内臓類</li>
                </ul>
                <Link href="/products/pork" className="category-btn">
                  豚肉の詳細を見る
                </Link>
              </div>
            </div>

            <div className="category-card">
              <div className="category-image">
                <img src="/images/chicken.jpeg" alt="鶏肉" className="category-img" />
              </div>
              <div className="category-content">
                <h3>鶏肉</h3>
                <p>
                  国産鶏肉を中心に、新鮮で安全な鶏肉を提供しております。
                  から揚げ用、照り焼き用、煮物用など、様々な調理法に対応した部位を取り扱い。
                </p>
                <ul className="category-features">
                  <li>国産鶏肉（銘柄鶏含む）</li>
                  <li>輸入鶏肉</li>
                  <li>各種部位（むね、もも、ささみ、手羽等）</li>
                  <li>挽肉・内臓類</li>
                </ul>
                <Link href="/products/chicken" className="category-btn">
                  鶏肉の詳細を見る
                </Link>
              </div>
            </div>

            <div className="category-card">
              <div className="category-image">
                <img src="/images/pork-offal.png" alt="豚モツ" className="category-img" />
              </div>
              <div className="category-content">
                <h3>豚モツ</h3>
                <p>
                  新鮮な豚の内臓類を豊富に取り揃えております。
                  もつ焼き、もつ鍋、ホルモン焼きなど専門店様にも対応した高品質な内臓をご提供いたします。
                </p>
                <ul className="category-features">
                  <li>新鮮な国産豚内臓</li>
                  <li>各種部位（レバー、ハツ、ガツ、腸類等）</li>
                  <li>専門店向け下処理済み商品</li>
                </ul>
                <Link href="/products/pork-offal" className="category-btn">
                  豚モツの詳細を見る
                </Link>
              </div>
            </div>

            <div className="category-card">
              <div className="category-image">
                <img src="/images/processed-products-new.png" alt="加工品" className="category-img" />
              </div>
              <div className="category-content">
                <h3>加工品</h3>
                <p>
                  ハム、ベーコン、ソーセージなどの食肉加工品を取り扱っております。
                  朝食、お弁当、業務用まで幅広いニーズにお応えする商品をご用意しております。
                </p>
                <ul className="category-features">
                  <li>各種ハム（ロース、ボンレス、切り落とし等）</li>
                  <li>ベーコン（ブロック、スライス）</li>
                  <li>ソーセージ（ウインナー、フランクフルト等）</li>
                  <li>業務用・家庭用パッケージ対応</li>
                </ul>
                <Link href="/products/processed" className="category-btn">
                  加工品の詳細を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 加工サービスセクション */}
      <section className="processing-services section-padding">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">加工サービス</h2>
          </div>
          <div className="services-content">
            <div className="services-text">
              <p className="services-intro">
                お客様のご要望に応じて、様々な加工サービスを承っております。
                業務用から小売用まで、幅広いニーズにお応えいたします。
              </p>
            </div>
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">
                  <img
                    src="/images/knife-icon-new.png"
                    alt="用途別カット"
                    width="48"
                    height="48"
                    style={{ filter: "none" }}
                  />
                </div>
                <h3>用途別カット</h3>
                <p>
                  ご指定の厚さ・サイズでのカット加工を承ります。ステーキ用、焼肉用、煮込み用など用途に応じた最適なカットを提供。
                </p>
              </div>
              <div className="service-item">
                <div className="service-icon">
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
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <h3>挽肉加工</h3>
                <p>
                  ハンバーグ用、餃子用など、用途に応じた粗さでの挽肉加工を行います。混合挽肉のご要望にもお応えします。
                </p>
              </div>
              <div className="service-item">
                <div className="service-icon">
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
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <rect x="7" y="7" width="3" height="9"></rect>
                    <rect x="14" y="7" width="3" height="5"></rect>
                  </svg>
                </div>
                <h3>パッケージング</h3>
                <p>業務用から小分けパックまで、ご要望に応じたパッケージングを承ります。真空パック包装も可能です。</p>
              </div>
              <div className="service-item">
                <div className="service-icon">
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
                <h3>特注加工</h3>
                <p>特殊な部位カットや調理用下処理など、お客様の特別なご要望にも柔軟に対応いたします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="products-cta section-padding bg-pattern">
        <div className="container">
          <div className="cta-content">
            <h2>商品に関するお問い合わせ</h2>
            <p>
              取扱商品や加工サービスについて、ご不明な点がございましたら
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
