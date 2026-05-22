'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.item2}>
        <div className={styles.heroHeader}>
          <h1 className={styles.glitchTitle}>W.ZXR GUNDAM SHOWROOM</h1>
          <div className={styles.accentBar}></div>
        </div>

        <div className={styles.mainContent}>
          
          {/* SIÊU PHẨM 1: RT-002 NEMESIS */}
          <div className={styles.productCard}>
            <div className={styles.imageArea}>
              <div className={styles.topLabel}>LIMITED EDITION</div>
              <div className={styles.imgContainer}>
                <Image src="/nemesis.jpg" alt="RT-002 NEMESIS" layout="responsive" width={100} height={100} className={styles.mainImg} />
              </div>
            </div>
            <div className={styles.infoArea}>
              <h3 className={styles.pName}>RT-002 NEMESIS</h3>
              <div className={styles.priceSection}>
                <span className={styles.currentPrice}>2,800,000₫</span>
                <span className={styles.discountBadge}>-20%</span>
              </div>
              <div className={styles.oldPrice}>3,000,000₫</div>
              <div className={styles.stockStatus}><span className={styles.pulseDot}></span> Còn 5 Bộ</div>
              <Link href="/Chitietsanpham" className={styles.actionBtn}>MUA NGAY</Link>
            </div>
          </div>

          {/* SIÊU PHẨM 2: SKY DEFENDER */}
          <div className={styles.productCard}>
            <div className={styles.imageArea}>
              <div className={styles.topLabel}>PREMIUM MODEL</div>
              <div className={styles.imgContainer}>
                <Image src="/skydefender.jpg" alt="Sky Defender" layout="responsive" width={100} height={100} className={styles.mainImg} />
              </div>
            </div>
            <div className={styles.infoArea}>
              <h3 className={styles.pName}>SKY DEFENDER</h3>
              <div className={styles.priceSection}>
                <span className={styles.currentPrice}>2,900,000₫</span>
                <span className={styles.discountBadge}>-15%</span>
              </div>
              <div className={styles.oldPrice}>3,100,000₫</div>
              <div className={styles.stockStatus}><span className={styles.pulseDot}></span> Còn 3 Bộ</div>
              <Link href="/" className={styles.actionBtn}>MUA NGAY</Link>
            </div>
          </div>

          {/* SIÊU PHẨM 3: NETHER EMPEROR */}
          <div className={styles.productCard}>
            <div className={styles.imageArea}>
              <div className={styles.topLabel}>NEW ARRIVAL</div>
              <div className={styles.imgContainer}>
                <Image src="/nether.jpg" alt="Nether Emperor" layout="responsive" width={100} height={100} className={styles.mainImg} />
              </div>
            </div>
            <div className={styles.infoArea}>
              <h3 className={styles.pName}>NETHER EMPEROR</h3>
              <div className={styles.priceSection}>
                <span className={styles.currentPrice}>800,000₫</span>
                <span className={styles.discountBadge}>-10%</span>
              </div>
              <div className={styles.oldPrice}>900,000₫</div>
              <div className={styles.stockStatus}><span className={styles.pulseDot}></span> Còn 12 Bộ</div>
              <Link href="/" className={styles.actionBtn}>MUA NGAY</Link>
            </div>
          </div>

          {/* SIÊU PHẨM 4: FLOWER LILY */}
          <div className={styles.productCard}>
            <div className={styles.imageArea}>
              <div className={styles.topLabel}>SPECIAL EDITION</div>
              <div className={styles.imgContainer}>
                <Image src="/flowerlily.jpg" alt="Flower Lily" layout="responsive" width={100} height={100} className={styles.mainImg} />
              </div>
            </div>
            <div className={styles.infoArea}>
              <h3 className={styles.pName}>FLOWER LILY</h3>
              <div className={styles.priceSection}>
                <span className={styles.currentPrice}>1,150,000₫</span>
                <span className={styles.discountBadge}>-12%</span>
              </div>
              <div className={styles.oldPrice}>1,290,000₫</div>
              <div className={styles.stockStatus}><span className={styles.pulseDot}></span> Còn 6 Bộ</div>
              <Link href="/" className={styles.actionBtn}>MUA NGAY</Link>
            </div>
          </div>

          {/* SIÊU PHẨM 5: FENRIR GUNDAM */}
          <div className={styles.productCard}>
            <div className={styles.imageArea}>
              <div className={styles.topLabel}>HOT SALE</div>
              <div className={styles.imgContainer}>
                <Image src="/fenrir.jpg" alt="Fenrir Gundam" layout="responsive" width={100} height={100} className={styles.mainImg} />
              </div>
            </div>
            <div className={styles.infoArea}>
              <h3 className={styles.pName}>FENRIR GUNDAM</h3>
              <div className={styles.priceSection}>
                <span className={styles.currentPrice}>2,900,000₫</span>
                <span className={styles.discountBadge}>-18%</span>
              </div>
              <div className={styles.oldPrice}>3,200,000₫</div>
              <div className={styles.stockStatus}><span className={styles.pulseDot}></span> Còn 8 Bộ</div>
              <Link href="/" className={styles.actionBtn}>MUA NGAY</Link>
            </div>
          </div>

          {/* SIÊU PHẨM 6: UNICORN GUNDAM */}
          <div className={styles.productCard}>
            <div className={styles.imageArea}>
              <div className={styles.topLabel}>VER. KA</div>
              <div className={styles.imgContainer}>
                <Image src="/unicorn.jpg" alt="Unicorn" layout="responsive" width={100} height={100} className={styles.mainImg} />
              </div>
            </div>
            <div className={styles.infoArea}>
              <h3 className={styles.pName}>UNICORN GUNDAM</h3>
              <div className={styles.priceSection}>
                <span className={styles.currentPrice}>1,700,000₫</span>
                <span className={styles.discountBadge}>-15%</span>
              </div>
              <div className={styles.oldPrice}>2,000,000₫</div>
              <div className={styles.stockStatus}><span className={styles.pulseDot}></span> Còn 4 Bộ</div>
              <Link href="/" className={styles.actionBtn}>MUA NGAY</Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}