import styles from '../styles/header.module.css';
import logo from '../public/logo.png';

export default function Header() {
  return (
    <div className={styles.top}>
      <header className={styles.pageHeader}>
        <nav>
          <ul className={styles.mainNav}>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#nft">NFT</a></li>
            <li><a href="#member">Member</a></li>
            <li><a href="#contact">Contact</a></li>
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