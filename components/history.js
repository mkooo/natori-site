import styles from '../styles/history.module.css';

export default function History() {
  return (
    <section className={styles.main}>
      <div className={styles.pageContent}>
        <h2>History</h2>
        <p>｜</p>
        <p className={styles.pageSub}>
          名取の歴史を簡単に紹介するテキスト。<br/>名取の歴史を簡単に紹介するテキスト
          名取の歴史を簡単に紹介するテキスト名取の歴史を簡単に紹介するテキスト
          名取の歴史を簡単に紹介するテキスト名取の歴史を簡単に紹介するテキスト。
          名取の歴史を簡単に紹介するテキスト。名取の歴史を簡単に紹介するテキスト。
        </p>
      </div>
    </section>
  )
}