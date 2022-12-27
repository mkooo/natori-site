import styles from '../styles/vision.module.css';

export default function Vision() {
  return (
    <section id="vision" className={styles.wrap}>
      <h2 className={styles.pageTitle}>DAOを目指す世界一小さな限界集落</h2>
      <div className={styles.topics}>
        <div>
          <h3><span className={styles.number}>140</span><span className={styles.unit}>m</span></h3>
          <p className={styles.text}>愛媛県の佐田岬半島にある標高140mの崖に位置する限界集落</p>
        </div>
        <div>
          <h3><span className={styles.number}>160</span><span className={styles.unit}>人</span></h3>
          <p className={styles.text}>深刻な高齢化で過疎化が進み、今はわずか160人・90世帯のみ</p>
        </div>
        <div>
          <h3><span className={styles.number}>400</span><span className={styles.unit}>年</span></h3>
          <p className={styles.text}>伊達政宗の長男秀宗が400年前に宇和島藩主として入国した地</p>
        </div>
      </div>
    </section>
  )
}