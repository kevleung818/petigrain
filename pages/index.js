import Link from 'next/link';
import { products } from '../data/products';

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-zh">寵悅康</div>
          <div className="brand-en">Petigrain</div>
        </div>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#story">品牌故事</a>
          <a href="#products">全天然健康產品</a>
          <a href="#cases">護理個案</a>
          <a href="#contact">聯絡我們</a>
        </nav>
      </header>

      <main className="page-main">
        <section id="story" className="hero-card">
          <div className="eyebrow">
            <span className="eyebrow-dot">◎</span>
            <span>關於品牌 • 天然科學護理</span>
          </div>

          <h1>每一份關愛 • 源自科學</h1>
          <p>
            Petigrain 創辦人 Dr. Lai，自 2007 年起研發天然植物萃取物結合現代科研實證，
            為毛孩提供安全有效的全天然健康護理方案。
          </p>
        </section>

        <section className="story-grid">
          <article className="story-card">
            <h2>創立初心，使命驅動</h2>
            <p>寵悅康 Petigrain 的創立，源於創辦人對毛孩深切的愛護之情，堅守以純天然草本抗氧化配方守護毛孩健康。</p>
          </article>
          <article className="story-card">
            <h2>天然植物，科學配方</h2>
            <p>品牌採用嚴格篩選的天然植物萃取，結合現代生物科學研發，確保每款產品具備高安全性與功效。</p>
          </article>
          <article className="story-card">
            <h2>臨床實證，信賴品質</h2>
            <p>產品經過嚴格大學科研測試與實際案例驗證，涵蓋眼部、肝臟、腎臟、免疫力及耳部等護理範疇。</p>
          </article>
          <article className="story-card">
            <h2>專業研發，精準護理</h2>
            <p>為不同生理需求開發具強力實證天然抗氧化活性配方，助毛孩維持健康與生活品質。</p>
          </article>
        </section>

        <section id="products" className="products-section">
          <div className="section-header">
            <div>
              <div className="kicker">Petigrain</div>
              <h2>全天然健康產品</h2>
            </div>
            <div className="pill">5 款主力配方</div>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.slug} className="product-card">
                <div className={`product-visual ${product.accent}`}>
                  <span className="mini-tag">{product.badge}</span>
                  <span className="product-icon">{product.icon}</span>
                  <span className="product-label">{product.chineseName}</span>
                </div>
                <div className="product-body">
                  <h3>{product.chineseName}</h3>
                  <p className="product-name">{product.name}</p>
                  <p>{product.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="cases" className="cases-section">
          <div className="case-header">
            <div className="kicker">護理個案</div>
            <h2>天然護理的真實成效</h2>
          </div>

          <div className="cases-grid">
            <div className="case-tile">
              <div className="tick">✓</div>
              <h3>眼部護理個案</h3>
              <p>改善眼周乾澀、疲勞與不適，提升清澈視覺與舒適感。</p>
            </div>
            <div className="case-tile">
              <div className="tick">✓</div>
              <h3>腎臟保健個案</h3>
              <p>穩定體液與代謝，提升毛孩日常活力與情緒平衡。</p>
            </div>
            <div className="case-tile">
              <div className="tick">✓</div>
              <h3>免疫力提升個案</h3>
              <p>維持免疫穩定，讓毛孩抵抗壓力與日常環境挑戰。</p>
            </div>
          </div>
        </section>

        <section className="bottom-grid" id="contact">
          <div className="info-card">
            <div className="brand-stack">
              <div className="brand-zh large">寵悅康</div>
              <div className="brand-en large">Petigrain</div>
            </div>
            <p>寵悅康 Petigrain 致力以天然科學護理，守護每一隻毛孩的健康生活。</p>
            <div className="contact-list">
              <p>© 健維康科技有限公司 / Healthy-Bird Technology Co., Ltd.</p>
              <p>Room 408, 4/F, No. 61 Mody Road, TST East, Kowloon, HK</p>
              <p>香港, 九龍尖東, 麼地道61號 冠華中心, 4樓408B室</p>
              <p>+852 2868 0085</p>
            </div>
          </div>

          <div className="purchase-card">
            <h2>購買渠道</h2>
            <ul>
              <li>香港各大授權代理商及指定寵物用品店均有銷售。</li>
              <li>官方網站提供網上訂購及查詢服務，全港配送。</li>
              <li>全港多間獸醫診所及寵物護理中心提供產品及專業使用諮詢。</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
