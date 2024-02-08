import Link from "next/link"
import styles from "./header.module.css";

const TheHeader = () =>{
    return (
        <header className={styles.headerMain}>
            
            <nav className={styles.nav}>
            <Link className={styles.link} href="/">Home</Link>
            <Link className={styles.link} href="/about">About</Link>
            <Link className={styles.link} href="/blog">Blog</Link>
            </nav>
           
        </header>
    )
}
export  {TheHeader}