import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/gundam.jpg" alt="Logo" width={120} height={80} priority />
                    </Link>
                </div>
                
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href="/">Trang Chủ</Link></li>
                        <li><Link href="/dung-cu">Dụng Cụ</Link></li>
                        <li><Link href="/gundam">Gundam</Link></li>
                        <li><Link href="/model-kit">Model Kit</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.searchBtn}>🔍</button>
                    <button className={styles.cartBtn}>🛒</button>
                </div>
            </div>
        </header>
    );
}