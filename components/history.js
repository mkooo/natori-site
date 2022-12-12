import styles from '../styles/history.module.css';

export default function History() {
  return (
    <section className={styles.main}>
      <div className={styles.pageContent}>
        <h2>History</h2>
        <p>｜</p>
        <p className={styles.pageSub}>
          ここ名取は仙台藩伊達政宗の長男「秀宗」が宇和島藩主として入国したのが始まりです。<br/>
          その際に同行した仙台藩名取郷出身の軍夫らが、軍馬の飼育と宇和海の警護のために定住したことでこの地を「名取」と呼ぶようになったと言い伝えられています。
          佐田岬半島の急斜面に造られた集落の家々や里道、そして段々畑も石垣で築かれているのが特徴です。これは土壌の流亡防止効果や地盤の安定性の向上、さらには土地の栄養分を保つことにも繋がります。
          つまり、「石垣」は先人たちの生活そのもだったわけです。
        </p>
      </div>
    </section>
  )
}