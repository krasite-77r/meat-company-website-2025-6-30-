"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-16">
      {/* スクロールリセット用の非表示要素 */}
      <div id="page-top" style={{ position: "absolute", top: 0 }}></div>

      {/* ヒーローセクション - 矢印なしバージョン */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>
              「安心」「安全」「良質」な
              <br />
              お肉をご提供
            </h1>
            <p>
              株式会社ミートパッカー久慈は、昭和４２年創業の実績と信頼を持つ食肉卸売会社です。
              <br />
              厳選された牛肉・豚肉・鶏肉を取り扱っております。
            </p>
          </div>
        </div>
      </section>

      {/* ご挨拶セクション */}
      <section className="greeting section-padding">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">ご挨拶</h2>
          </div>
          <div className="greeting-content">
            <div className="greeting-text">
              <p>
                株式会社ミートパッカー久慈は昭和42年創業以来受け継がれる経営理念「安心」「安全」「良質」な食肉販売を追求し、半世紀以上にわたり地域に根付いた事業を展開し成長してまいりました。従業員や地域の皆様、弊社に関わる全ての方々へ心より感謝申し上げます。
              </p>
              <p>
                現在まで、学校給食、保育所、大学、病院、介護施設、飲食店、もつ焼き店、企業等幅広いお客様に商品をご提供させていただいている中で、「食育」の推進により地域貢献や将来を担う子供たちの育みが生まれていると感じております。
              </p>
              <p>
                「食育」の一助となれるよう、新鮮な原料仕入、職人による効率的な加工、徹底した製品の温度管理、自社便配送により、皆様の多様化したニーズにも対応できるよう柔軟に取り組んでまいります。そして、食べることの楽しさ、食べることの幸福感をたくさんの方々へお届けできるよう、その期待に応えることが企業使命だと考えています。
              </p>
              <p>
                これまで以上に、地域貢献を大切に、皆様の食生活をより豊かにできる企業であるよう努力を続けてまいります。今後ともより一層のご支援ご愛顧を賜りますようお願い申し上げます。
              </p>
              <div className="ceo-signature">
                <p>
                  株式会社ミートパッカー久慈
                  <br />
                  代表取締役　　島村 光一
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 経営理念セクション */}
      <section className="philosophy section-padding bg-pattern">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">経営理念</h2>
          </div>
          <div className="philosophy-content">
            <div className="philosophy-cards">
              <div className="philosophy-card">
                <h3>安心・安全の追求</h3>
                <p>徹底した品質管理と衛生管理により、お客様に安心してご利用いただける食肉を提供します。</p>
              </div>
              <div className="philosophy-card">
                <h3>信頼関係の構築</h3>
                <p>生産者様、お客様との長期的な信頼関係を大切にし、共に発展することを目指します。</p>
              </div>
              <div className="philosophy-card">
                <h3>食文化への貢献</h3>
                <p>高品質な食肉の安定供給を通じて、日本の豊かな食文化の発展に貢献します。</p>
              </div>
            </div>
            <div className="philosophy-statement">
              <blockquote>「食の安全を守り、美味しさを届け、人々の健康と幸せに貢献する」</blockquote>
              <p>
                創業以来培われてきた食肉の経験と豊かな知識、確かな技術を基に皆様へ安心で良質なお肉をご提供いたします。お客様のご要望にお応えできる食肉のプロとして、食卓のベストパートナーであることを目標に努めてまいります。
              </p>
              <p>
                これが私たちの変わらぬ経営理念です。この理念のもと、社員一人ひとりが誇りを持って仕事に取り組んでいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 業務内容セクション */}
      <section className="services section-padding">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">業務内容</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                {/* 業務卸アイコン */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cd5e3c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16.5 9.4 7.5 4.21"></path>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>業務卸</h3>
              <p>
                精肉専門店、レストラン、飲食店、食堂、もつ焼き専門店、食材取扱い業者の卸売。病院、介護施設、法人企業、事業所、宿舎等の食材納入。
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                {/* 給食部門アイコン */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cd5e3c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <h3>給食部門</h3>
              <p>松戸市立小中学校、流山市立小中学校、市立保育所、私立保育園の給食用材料納入。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                {/* 店舗販売アイコン */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
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
              <h3>
                店舗販売
                <br />
                （稔台営業所）
              </h3>
              <p>精肉（牛・豚・鶏・内蔵・その他）から加工品及び一部総菜まで幅広く取り扱い。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                {/* 副産物部門アイコン */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
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
              <h3>副産物部門</h3>
              <p>都内及び県内近郊の居酒屋、もつ焼き専門店への食材納入。外食産業等への食品加工の製造販売。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                {/* 自社便配送アイコン */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
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
              <h3>自社便配送</h3>
              <p>
                松戸市、柏市、流山市近郊は、自社便での配送対応。冷凍冷蔵車で素早く配送をさせていただきます。
                <br />
                【配送エリアについては、お問い合わせください。】
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
