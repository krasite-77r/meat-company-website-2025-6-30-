"use client"

import { useEffect } from "react"

export default function Contact() {
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
          <h1>お問い合わせ</h1>
          <p>ご質問・ご相談がございましたら、お気軽にお問い合わせください</p>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="contact-form section-padding">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">お問い合わせフォーム</h2>
          </div>
          <div className="form-container">
            <form className="contact-form-wrapper">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="company">
                    会社名・団体名 <span className="required">*</span>
                  </label>
                  <input type="text" id="company" name="company" required />
                </div>
                <div className="form-group">
                  <label htmlFor="name">
                    お名前 <span className="required">*</span>
                  </label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    メールアドレス <span className="required">*</span>
                  </label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">電話番号</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">
                  件名 <span className="required">*</span>
                </label>
                <select id="subject" name="subject" required>
                  <option value="">選択してください</option>
                  <option value="見積もり">お見積もりについて</option>
                  <option value="新規取引">新規お取引について</option>
                  <option value="商品について">商品について</option>
                  <option value="配送について">配送について</option>
                  <option value="その他">その他</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  お問い合わせ内容 <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="具体的なご要望やご質問をお聞かせください"
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn">
                  送信する
                </button>
                <p className="form-note">
                  <span className="required">*</span> は必須項目です。
                  <br />
                  お問い合わせいただいた内容については、営業時間内に順次ご回答いたします。
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 直接連絡先 */}
      <section className="direct-contact section-padding bg-light">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">直接お電話でのお問い合わせ</h2>
          </div>
          <div className="contact-methods">
            <div className="contact-card">
              <div className="contact-icon">
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>お電話でのお問い合わせ</h3>
              <p className="phone-number">047-341-5041</p>
              <p className="contact-hours">
                受付時間：平日 8:30〜17:30
                <br />
                （土日祝日は休業）
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>FAXでのお問い合わせ</h3>
              <p className="phone-number">047-347-6970</p>
              <p className="contact-hours">
                24時間受付
                <br />
                （回答は営業時間内）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス情報 */}
      <section className="access-info section-padding">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">アクセス</h2>
          </div>
          <div className="access-content">
            <div className="access-locations">
              <div className="location-card">
                <h3>本社</h3>
                <div className="location-info">
                  <div className="access-item">
                    <div className="access-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#cd5e3c"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="access-text">
                      <p>千葉県松戸市八ヶ崎二丁目３番地の１</p>
                    </div>
                  </div>
                  <div className="access-item">
                    <div className="access-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#cd5e3c"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="access-text">
                      <p>047-341-5041（代表）</p>
                    </div>
                  </div>
                  <div className="access-item">
                    <div className="access-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#cd5e3c"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="access-text">
                      <p>047-347-6970</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="location-card">
                <h3>稔台事業所・販売所</h3>
                <div className="location-info">
                  <div style={{ marginBottom: "20px" }}>
                    <strong>稔台事業所</strong>
                  </div>
                  <div className="access-item">
                    <div className="access-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#cd5e3c"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="access-text">
                      <p>
                        千葉県松戸市稔台一丁目１０番１８号
                        <br />
                        第２水野ビル１０５
                      </p>
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px", marginTop: "30px" }}>
                    <strong>稔台販売所</strong>
                  </div>
                  <div className="access-item">
                    <div className="access-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#cd5e3c"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="access-text">
                      <p>
                        千葉県松戸市稔台一丁目１０番１８号
                        <br />
                        第２水野ビル１０３
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <div className="access-item">
                <div className="access-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                <div className="access-text">
                  <strong>営業時間</strong>
                  <p>
                    平日 8:30〜17:30
                    <br />
                    土日祝日 休業
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
