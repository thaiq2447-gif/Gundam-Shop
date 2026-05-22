import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerCol}>
                    <h3 className={styles.brandTitle}>W.ZX GUNDAM</h3>
                    <p>Hệ thống cung cấp mô hình Gunpla chính hãng Bandai. Nơi khơi nguồn đam mê sáng tạo cho các Builders.</p>
                </div>
                
                <div className={styles.footerCol}>
                    <h4>Khám Phá</h4>
                    <ul>
                        <li>Hàng Mới Về</li>
                        <li>Sản Phẩm Bán Chạy</li>
                        <li>Phụ Kiện Độ Chế</li>
                    </ul>
                </div>
                
                <div className={styles.footerCol}>
                    <h4>Chăm Sóc</h4>
                    <ul>
                        <li>Hướng Dẫn Lắp Ráp</li>
                        <li>Chính Sách Bảo Hành</li>
                        <li>Giao Hàng Toàn Quốc</li>
                    </ul>
                </div>
                
                <div className={styles.footerCol}>
                    <h4>Liên Hệ</h4>
                    <p>📍 123 Robot Street, Q1, TP.HCM</p>
                    <p>📞 090 123 4567</p>
                    <p>✉️ support@wzxgundam.com</p>
                </div>
            </div>
            
            <div className={styles.footerBottom}>
                <p>© 2026 W.ZX GUNDAM STORE - Build Your Dream Mobile Suit</p>
            </div>
        </footer>
    );
}