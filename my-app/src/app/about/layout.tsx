
import styles from "../page.module.css";
import Link from "next/link"
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <main className={styles.main}>
        <h1>About us</h1>
        <ul>
            <li> <Link className={styles.link} href="/about/contacts">Contacts</Link></li>
            <li> <Link className={styles.link} href="/about/team">Team</Link></li>
        </ul>
        {children}
      </main>
    );
  }