import Link from "next/link"
import styles from "../src/app/page.module.css";
const TheHeader = () =>{
    return (
        <header className={styles.headerMain}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
        </header>
    )
}
export  {TheHeader}