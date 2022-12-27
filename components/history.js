import styles from '../styles/history.module.css';

export default function History() {
  return (
    <section id="history" className={styles.wrap}>
      <div className={styles.title}>
        <p className={styles.pageTitle}>水神様<br/>Mizugamisama</p>
      </div>
      <div className={styles.Content}>
        <h2>History</h2>
        <p>｜</p>
        <p className={styles.pageHistory}>
          現在の名取の人々は、仙台藩伊達政宗の長男「秀宗」が宇和島藩主として入国したとき一緒にこの地へやってきました。<br/>
          仙台藩名取郷出身の軍夫らが、軍馬の飼育と宇和海の警護のために定住し、この地を「名取」と呼ぶようになったと言い伝えられています。
          佐田岬半島の急斜面に造られた集落の家々や里道、そして段々畑も石垣で築かれています。
        </p>
      </div>
    </section>
  )
}