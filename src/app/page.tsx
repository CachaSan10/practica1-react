"use client";
import styles from "./page.module.css";
import ContadorComponente from "@/components/ContadorComponente";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="container">
      <ContadorComponente valorInicial={5}/>
      </div>
      
    </div>
  );
}
