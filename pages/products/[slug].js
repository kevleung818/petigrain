import Link from 'next/link';
import { productsBySlug } from '../../data/products';

export async function getStaticPaths() {
  const paths = Object.keys(productsBySlug).map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = productsBySlug[params.slug];
  if (!product) return { notFound: true };
  return { props: { product } };
}

export default function ProductPage({ product }) {
  return (
    <div className="page-shell detail-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-zh">寵悅康</div>
          <div className="brand-en">Petigrain</div>
        </div>
        <nav className="main-nav">
          <Link href="/#story">品牌故事</Link>
          <Link href="/products">全天然健康產品</Link>
          <Link href="/#cases">護理個案</Link>
          <Link href="/#contact">聯絡我們</Link>
        </nav>
      </header>

      <main className="detail-content">
        <section className={`detail-hero ${product.accent}`}>
          <div className="detail-badge">{product.shortIntro}</div>
          <div className="detail-header-row">
            <h1>{product.chineseName}</h1>
            <span>{product.name}</span>
          </div>
          <p className="detail-subtitle">{product.subtitle}</p>
          <div className="detail-tags">
            <span>{product.dose}</span>
            <span>{product.range}</span>
          </div>
          <p className="detail-description">{product.description}</p>
        </section>

        <aside className="detail-aside">
          <div className="aside-card top">
            <div className="aside-icon">{product.icon}</div>
            <div>
              <div className="aside-name">{product.name}</div>
              <div className="aside-name-zh">{product.chineseName}</div>
            </div>
          </div>

          <div className="aside-list">
            {product.bullets.map((bullet, index) => (
              <div key={bullet} className="bullets-item">
                <span>{index + 1}</span>
                <p>{bullet}</p>
              </div>
            ))}
          </div>

          <div className="aside-highlight">
            <strong>核心亮點</strong>
            <p>{product.highlight}</p>
          </div>
        </aside>
      </main>

      <footer className="detail-footer">
        <div className="ingredients">{product.ingredients}</div>
        <div className="footer-actions">
          <div>{product.usage}</div>
          <Link href="/products">返回產品列表</Link>
        </div>
      </footer>
    </div>
  );
}
