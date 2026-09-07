import Link from 'next/link';
import { products } from '../../data/products';

export default function ProductsIndex() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-zh">寵悅康</div>
          <div className="brand-en">Petigrain</div>
        </div>
        <nav className="main-nav">
          <Link href="/#story">品牌故事</Link>
          <Link href="/#products">全天然健康產品</Link>
          <Link href="/#cases">護理個案</Link>
          <Link href="/#contact">聯絡我們</Link>
        </nav>
      </header>

      <main className="catalog-shell">
        <section className="catalog-header">
          <div className="eyebrow">
            <span className="eyebrow-dot">◎</span>
            <span>全天然健康產品 • 科學天然護理</span>
          </div>
          <h1>全天然健康產品</h1>
          <p>每一款產品均以天然草本與科學實證為基礎，為毛孩提供安全、穩定且有感的健康守護。</p>
        </section>

        <section className="product-grid compact-grid">
          {products.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.slug} className="product-card">
              <div className={`product-visual ${product.accent}`}>
                <span className="mini-tag">{product.name}</span>
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
        </section>
      </main>
    </div>
  );
}
