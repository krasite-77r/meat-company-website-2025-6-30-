"use client"

import { useEffect } from "react"

export default function Company() {
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
          <h1>会社の説明</h1>
        </div>
      </section>

      {/* 企業概要セクション */}
      <section className="company-overview section-padding">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">企業概要</h2>
          </div>
          <div className="company-info-grid">
            <div className="company-info-card">
              <div className="info-row">
                <dt>会社名</dt>
                <dd>株式会社ミートパッカー久慈</dd>
              </div>
              <div className="info-row">
                <dt>本社</dt>
                <dd>千葉県松戸市八ヶ崎二丁目３番地の１</dd>
              </div>
              <div className="info-row">
                <dt>稔台事業所</dt>
                <dd>千葉県松戸市稔台一丁目１０番１８号　第２水野ビル１０５</dd>
              </div>
              <div className="info-row">
                <dt>設立</dt>
                <dd>１９６７年９月（昭和４２年）</dd>
              </div>
              <div className="info-row">
                <dt>資本金</dt>
                <dd>１０００万円</dd>
              </div>
              <div className="info-row">
                <dt>役員</dt>
                <dd>代表取締役　島村 光一</dd>
              </div>
              <div className="info-row">
                <dt>従業員</dt>
                <dd>１５名</dd>
              </div>
              <div className="info-row">
                <dt>事業種目</dt>
                <dd>食肉卸売・食肉加工及び製造販売</dd>
              </div>
              <div className="info-row">
                <dt>取引銀行</dt>
                <dd>
                  城北信用金庫みのり台支店
                  <br />
                  みずほ銀行松戸支店
                  <br />
                  千葉銀行松戸支店
                </dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革セクション */}
      <section className="company-history section-padding bg-pattern">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">会社沿革</h2>
          </div>
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-year">1967年</div>
              <div className="timeline-content">
                <h3>会社設立</h3>
                <p>有限会社久慈商店として東京都港区港南二丁目５番４号に資本金１００万円で設立</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1970年</div>
              <div className="timeline-content">
                <h3>本店移転</h3>
                <p>本店を千葉県松戸市小根本１３９番地に移転</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1971年</div>
              <div className="timeline-content">
                <h3>事業拡大・増資</h3>
                <p>千葉県食品流通センター内に卸売店を出店。資本金を４００万円に増資</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1972年</div>
              <div className="timeline-content">
                <h3>現在地移転・増資</h3>
                <p>本店を千葉県松戸市八ヶ崎二丁目8番1号に移転。資本金を６００万円に増資</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1973年</div>
              <div className="timeline-content">
                <h3>資本金増資</h3>
                <p>資本金を１０００万円に増資</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1975年</div>
              <div className="timeline-content">
                <h3>学校給食開始</h3>
                <p>松戸市立小学校へ給食食材を納入開始</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1985年</div>
              <div className="timeline-content">
                <h3>株式会社に組織変更</h3>
                <p>有限会社を株式会社に組織変更。社名を『株式会社ミートパッカー久慈』として活動開始</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1988年</div>
              <div className="timeline-content">
                <h3>第二工場設立</h3>
                <p>第二工場を設立し加工品製造に着手</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1991年</div>
              <div className="timeline-content">
                <h3>中学校給食食材納入開始</h3>
                <p>松戸市立中学校へ給食食材を納入開始</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1994年</div>
              <div className="timeline-content">
                <h3>所在地変更</h3>
                <p>
                  町名番地表示変更により所在地が変更。<br />本社：千葉県松戸市八ヶ崎二丁目８番地の１<br />第二工場：千葉県松戸市八ヶ崎二丁目３番地の１
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1999年</div>
              <div className="timeline-content">
                <h3>代表取締役変更</h3>
                <p>久慈 純也が代表取締役社長に就任</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2017年</div>
              <div className="timeline-content">
                <h3>営業所設立</h3>
                <p>
                  本店を移転し所在地も変更。新営業所設立。
                  <br />
                  本社：千葉県松戸市八ヶ崎二丁目３番地の１
                  <br />
                  稔台営業所：<br />千葉県松戸市稔台一丁目１０番１８号 第２水野ビル１０３号<br />
　　　　　　　　　　千葉県松戸市稔台一丁目１０番１８号 第２水野ビル１０５号

                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024年</div>
              <div className="timeline-content">
                <h3>代表取締役変更</h3>
                <p>島村 光一が代表取締役に就任</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主な取引先セクション */}
      <section className="business-partners section-padding">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">主な取引先</h2>
          </div>
          <div className="partners-content">
            <div className="partners-grid">
              <div className="partner-category">
                <h3>教育機関</h3>
                <ul>
                  <li>松戸市立保育所【１７所】</li>
                  <li>松戸市立小学校【４５校】</li>
                  <li>松戸市立中学校【２０校】</li>
                  <li>県立特別支援学校</li>
                  <li>私立高校・大学・幼稚園・保育園（所）</li>
                </ul>
              </div>
              <div className="partner-category">
                <h3>医療・福祉施設</h3>
                <ul>
                  <li>国立病院・市立病院・私立病院</li>
                  <li>県内外介護福祉施設</li>
                </ul>
              </div>
              <div className="partner-category">
                <h3>企業・法人</h3>
                <ul>
                  <li>株式会社中村屋</li>
                  <li>株式会社S.Cミート</li>
                  <li>日鉄物産株式会社</li>
                  <li>関東食肉輸出入事業協同組合</li>
                  <li>コスモ企業株式会社</li>
                  <li>日産フーズ</li>
                  <li>日本閣</li>
                </ul>
              </div>
            </div>
            <div className="partners-note">
              <p>他　約２００余社（店）</p>
              <p className="note-disclaimer">（敬称略・順不同）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 品質管理・認証セクション */}
      <section className="quality-certifications section-padding bg-light">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">品質管理・認証</h2>
          </div>
          <div className="certifications-grid">
            <div className="certification-card">
              <div className="cert-icon">
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
              <h3>HACCP認証</h3>
              <p>食品安全管理システムHACCPを導入し、製造から出荷まで徹底した品質管理を実施しています。</p>
            </div>
            <div className="certification-card">
              <div className="cert-icon">
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
                  <path d="M9 12l2 2 4-4"></path>
                  <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h9l4-4-4-4H3"></path>
                </svg>
              </div>
              <h3>許認可証</h3>
              <p>「食肉販売業」「食肉処理業」「そうざい製造業」の許可を千葉県より取得し、法令に基づいた適切な食肉処理を行っています。</p>
            </div>
            <div className="certification-card">
              <div className="cert-icon">
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
              </div>
              <h3>衛生管理認証</h3>
              <p>定期的な衛生検査と従業員教育により、最高水準の衛生管理体制を維持しています。</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
