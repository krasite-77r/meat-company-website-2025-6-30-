"use client"

import { useState } from "react"

interface FAQItem {
  id: number
  category: string
  question: string
  answer: string
}

// FAQデータを新しい内容に完全に置き換える

const faqData: FAQItem[] = [
  // 配送・エリアについて
  {
    id: 1,
    category: "配送・エリア",
    question: "食材はどのエリアまで配送可能ですか？",
    answer:
      "千葉県松戸市を中心に、柏市・市川市・流山市・葛飾区など広域に対応しております。その他の地域についても柔軟にご相談を承ります。",
  },
  {
    id: 14,
    category: "配送・エリア",
    question: "納入時間の指定は可能ですか？",
    answer: "可能な限りご希望の時間帯に納入いたします。各施設様の調理スケジュールに合わせて柔軟に対応します。",
  },
  {
    id: 5,
    category: "配送・エリア",
    question: "納品時の温度管理はどのようにしていますか？",
    answer:
      "冷蔵・冷凍専用の保管設備と専用車両により、適切な温度帯で管理・配送を行っています。納入時も温度確認を徹底し、鮮度保持に努めています。",
  },

  // 品質・安全管理について
  {
    id: 2,
    category: "品質・安全管理",
    question: "食品の安全性はどのように管理していますか？",
    answer:
      "HACCPの考え方に基づき、原料の仕入から加工・保管・配送まで各工程でリスク管理を徹底しています。食中毒や異物混入リスクを最小限に抑え、安全な製品提供に努めています。",
  },
  {
    id: 11,
    category: "品質・安全管理",
    question: "HACCPの認証は取得していますか？",
    answer:
      "当社はHACCPの考え方を取り入れた衛生管理計画を運用しています。法令遵守の下、行政の指導も受けながら継続的な改善を実施しています。",
  },
  {
    id: 4,
    category: "品質・安全管理",
    question: "原材料の仕入先はどのように管理していますか？",
    answer:
      "信頼できる仕入先から調達しています。主な仕入先は、「日鉄物産会社」「株式会社SCミート」「マルイフーズ・マルイミート」などです。入荷時には品質・表示・期限などを細かく検品し、安全性を確認した上で受け入れています。仕入先との情報共有も密に行い、品質維持に努めています。",
  },
  {
    id: 12,
    category: "品質・安全管理",
    question: "学校給食向けの納品基準は満たしていますか？",
    answer:
      "各自治体の学校給食基準に基づき、安全性・アレルギー対応・原材料表示などの要件を満たした食材を提供しています。",
  },
  {
    id: 8,
    category: "品質・安全管理",
    question: "アレルギー対応は可能ですか？",
    answer: "アレルゲン情報を含む成分表を納品時にご提供可能です。アレルギー対応食材の選定・分別保管も実施しています。",
  },
  {
    id: 13,
    category: "品質・安全管理",
    question: "トレーサビリティ（履歴管理）は対応していますか？",
    answer: "入荷ロットから納品ロットまで���括管理しています。万一の際も迅速に追跡可能です。",
  },

  // 衛生・検査管理について
  {
    id: 3,
    category: "衛生・検査管理",
    question: "衛生管理はどのように行っていますか？",
    answer:
      "施設内は毎日清掃・消毒を徹底し、作業員は手洗い・消毒・衛生教育を定期的に実施しています。生肉の処理エリアと保管エリアをしっかり分けることで、異物や菌が混ざらないよう管理しています。また、作業ごとに専用の器具を使い分け、安全性を確保しています。",
  },
  {
    id: 10,
    category: "衛生・検査管理",
    question: "加工場内での異物混入対策はどのようにしていますか？",
    answer:
      "作業場は、原材料の受け入れ、加工、保管の各工程を別々のスペースに分けて管理しています。また、作業中は専用の作業着やヘアネットなどを使用し、異物混入のリスクを最小限に抑えています。",
  },
  {
    id: 9,
    category: "衛生・検査管理",
    question: "賞味期限の管理はどのように行っていますか？",
    answer:
      "入荷時・在庫時・出荷時に3段階で賞味期限を管理し、納品前に再確認しています。期限管理表を用いて先入れ先出しを徹底しています。",
  },
  {
    id: 16,
    category: "衛生・検査管理",
    question: "製品の検査体制はどのようにしていますか？",
    answer:
      "仕入時の入荷検査・外観検査・保存検査を実施し、必要に応じて外部検査機関による微生物・成分検査も実施しています。",
  },
  {
    id: 17,
    category: "衛生・検査管理",
    question: "包装資材の安全性は確保されていますか？",
    answer: "食品用適合素材のみを使用し、衛生的な保管管理を行っています。使用履歴も管理しています。",
  },
  {
    id: 18,
    category: "衛生・検査管理",
    question: "保管時の異常（停電・故障等）への対策はありますか？",
    answer: "冷蔵冷凍設備には温度監視システムを設置し、異常時には迅速に対応可能な体制を整えています。",
  },
  {
    id: 15,
    category: "衛生・検査管理",
    question: "施設の衛生監査には協力してもらえますか？",
    answer:
      "もちろんです。納入先施設での監査や書類提出にも積極的に協力し、安心してお取引いただける体制を整えています。",
  },

  // 注文・取引について
  {
    id: 6,
    category: "注文・取引",
    question: "小ロットでの注文にも対応できますか？",
    answer: "はい。学校・病院・介護施設などのお客様に合わせ、小ロットから大口まで柔軟に対応可能です。",
  },
  {
    id: 7,
    category: "注文・取引",
    question: "緊急時の追加注文には対応できますか？",
    answer: "事前のご相談を基本としますが、急な追加注文にもできる限り迅速に対応いたします。まずはご連絡ください。",
  },
  {
    id: 19,
    category: "注文・取引",
    question: "納入商品の返品・交換はできますか？",
    answer: "万一、不良や誤納入が発生した場合は、速やかに返品・交換対応を行っております。",
  },
  {
    id: 20,
    category: "注文・取引",
    question: "支払い条件や請求の締日は柔軟に対応可能ですか？",
    answer: "法人・自治体様のご希望に応じて柔軟に対応しております。契約時に詳細をご相談させていただきます。",
  },
]

// カテゴリーも新しい内容に更新
const categories = ["すべて", "配送・エリア", "品質・安全管理", "衛生・検査管理", "注文・取引"]

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("すべて")
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory = selectedCategory === "すべて" || item.category === selectedCategory
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main className="pt-16">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>よくある質問</h1>
          <p>お客様からよくお寄せいただくご質問をまとめました</p>
        </div>
      </section>

      {/* FAQ検索・フィルター */}
      <section className="faq-controls section-padding">
        <div className="container">
          <div className="faq-controls-wrapper">
            {/* 検索ボックス */}
            <div className="search-box">
              <div className="search-input-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="search-icon"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  type="text"
                  placeholder="質問を検索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {/* カテゴリーフィルター */}
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ一覧 */}
      <section className="faq-list section-padding">
        <div className="container">
          {filteredFAQs.length === 0 ? (
            <div className="no-results">
              <p>該当する質問が見つかりませんでした。</p>
              <p>お探しの情報が見つからない場合は、お気軽にお問い合わせください。</p>
            </div>
          ) : (
            <div className="faq-items">
              {filteredFAQs.map((item) => (
                <div key={item.id} className="faq-item">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="faq-question"
                    aria-expanded={openItems.includes(item.id)}
                  >
                    <span className="category-tag">{item.category}</span>
                    <span className="question-text">{item.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`chevron ${openItems.includes(item.id) ? "open" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className={`faq-answer ${openItems.includes(item.id) ? "open" : ""}`}>
                    <div className="answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="faq-cta section-padding bg-light">
        <div className="container">
          <div className="cta-content">
            <h2>他にご質問がございますか？</h2>
            <p>
              こちらに掲載されていないご質問やより詳しい情報については、
              <br />
              お気軽にお問い合わせください。
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn">
                お問い合わせフォーム
              </a>
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
