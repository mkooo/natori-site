import styles from '../styles/header.module.css';
import logo from '../public/logo.png';

export default function Header() {
  return (
    <div className={styles.top}>
      <header className={styles.pageHeader}>
        <div><a href="index.html">
         <img className={styles.logo} src="../logo.png" alt="NATORIプロジェクト" />
        </a></div>
        <nav>
          <ul className={styles.mainNav}>
            <li><a href="#">Vision</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">NFT</a></li>
            <li><a href="#">Member</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className={styles.pageContent}>
        <h1>
          <span className={styles.pageSub}>クリプト集落</span><br/>
          <span className={styles.pageTitle}>NATORI</span>
          <span className={styles.pageTitleSub}>プロジェクト</span>
        </h1>
      </div>
    </div>
  )
}