'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "../components/header/header"; 
import Footer from "../components/footer/footer"; 

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ChiTietSanPham() {
  const [quantity, setQuantity] = useState(1);

  // Dữ liệu sản phẩm chính
  const product = {
    name: "RT-002 NEMESIS",
    price: 2800000,
    oldPrice: 3000000,
    description: "Mẫu mô hình cao cấp RT-002 Nemesis với thiết kế chi tiết xảo quyệt, tông màu đỏ đen đặc trưng và hệ thống vũ khí đồ sộ. Sản phẩm thuộc dòng Limited Edition dành cho các Builders chuyên nghiệp với khung xương kim loại chắc chắn.",
    image: "/nemesis.jpg", 
    remain: 5
  };

  // Danh sách ảnh cho slider
  const productImages = [product.image, "/slidenemesis2.jpg", "/slidenemesis1.jpg"];

  // Dữ liệu sản phẩm tương tự
  const relatedProducts = [
    { name: "Sky Defender Gundam", price: "2.900.000₫", img: "/skydefender.jpg" },
    { name: "Nether Emperor", price: "800.000₫", img: "/nether.jpg" },
    { name: "Fenrir Gundam", price: "2.900.000₫", img: "/fenrir.jpg" },
    { name: "Unicorn Gundam", price: "1.700.000₫", img: "/unicorn.jpg" },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainContentDetail}>
        <div className={styles.wrapper}>
          {/* BÊN TRÁI: HÌNH ẢNH SLIDER */}
          <div className={styles.imageBox}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              style={{ width: '100%', height: '100%' }}
            >
              {productImages.map((img, index) => (
                <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Image 
                    src={img} 
                    alt={product.name} 
                    width={500} 
                    height={500} 
                    className={styles.image} 
                    priority 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* BÊN PHẢI: THÔNG TIN */}
          <div className={styles.infoBox}>
            <span className={styles.categoryTag}>PREMIUM MODEL KIT</span>
            <h1 className={styles.productName}>{product.name}</h1>
            
            <div className={styles.priceTag}>
              <strong className={styles.price}>{product.price.toLocaleString("vi-VN")}₫</strong>
              <div className={styles.discountRow}>
                <span className={styles.oldPriceDetail}>{product.oldPrice.toLocaleString("vi-VN")}₫</span>
                <small className={styles.percentDetail}>-20%</small>
              </div>
            </div>

            <p className={styles.description}>{product.description}</p>
            
            <div className={styles.stockStatus}>
              <span className={styles.pulseDot}></span>
              Sẵn có: <strong>{product.remain} Bộ</strong> cuối cùng
            </div>

            <div className={styles.actionArea}>
              <div className={styles.quantityWrapper}>
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className={styles.qtyBtn}>-</button>
                <span className={styles.qtyValue}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className={styles.qtyBtn}>+</button>
              </div>

              <div className={styles.buttonGroup}>
                <button className={styles.btnAddToCartRed}>THÊM VÀO GIỎ HÀNG</button>
                
                {/* NÚT MUA NGAY MỚI THÊM */}
                <button className={styles.btnBuyNow}>MUA NGAY</button>
                
                <Link href="/">
                  <button className={styles.btnBack}>Quay lại</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DANH SÁCH SẢN PHẨM TƯƠNG TỰ */}
        <section className={styles.relatedSection}>
          <h3 className={styles.relatedTitle}>Sản phẩm tương tự</h3>
          <div className={styles.relatedGrid}>
            {relatedProducts.map((item, index) => (
              <div key={index} className={styles.smallProductCard}>
                <div className={styles.smallProductImage}>
                  <Image src={item.img} alt={item.name} width={180} height={180} />
                </div>
                <h5>{item.name}</h5>
                <strong className={styles.smallPrice}>{item.price}</strong>
                <Link href="/chitietsanpham" className={styles.viewMore}>Chi tiết</Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}