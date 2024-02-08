import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home | Next App",
    description: "Generated by create next app",
  };
  
export default function Home() {
  return (
    
    <main className={styles.main}>
      <h1>
          Home
        </h1>
      <div className={styles.description}>
        
      </div>
    </main>
  );
}