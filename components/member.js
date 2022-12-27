import styles from '../styles/member.module.css';

export default function Member() {
  return (
    <section>
      <div className={styles.natori}>
        <div>
          <img src="../natori5.jpg" alt="名取の人々" />
        </div>
        <div>
          <img src="../natori6.jpg" alt="名取の案内人" />
        </div>
        <div>
          <img src="../natori7.jpg" alt="名取の漁師" />
        </div>
      </div>
      <div id="member" className={styles.title}>
        <h2>Member</h2>
      </div>
      <div className={styles.project}>
        <div>
          <img src="../member1.JPG" alt="makiの画像" />
          <h3 className={styles.name}>maki</h3>
          <p>ディレクター<br/>NATORIプロジェクト代表</p>
        </div>
        <div>
          <img src="../member2.jpg" alt="もとの画像" />
          <h3 className={styles.name}>もと</h3>
          <p>名取集落責任者<br/>現地在住、地元住民との調整・まとめ役</p>
        </div>
        <div>
          <img src="../member3.jpg" alt="kondo" />
          <h3 className={styles.name}>kondo</h3>
          <p>Webクリエイター<br/>Web関連およびスマートコントラクト開発</p>
        </div>
        <div>
          <img src="../member4.jpg" alt="みくの画像" />
          <h3 className={styles.name}>実紅</h3>
          <p>デザイナー<br/>Web・NFTなどのデザイン全般</p>
        </div>
      </div>
    </section>
  )
}