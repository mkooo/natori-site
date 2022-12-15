import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.title}>
        <p className={styles.text}>DAOを目指す世界一小さな限界集落</p>
        <p className={styles.text}>世界と繋がり自立した持続可能な集落を創造する</p>
        <p className={styles.projectName}>©クリプト集落 NATORIプロジェクト</p>
      </div>
      <div className={styles.sns}>
        <ul>
          <li><a href="https://twitter.com/?lang=ja">Twitter</a></li>
          <li><a href="https://note.com/">note</a></li>
          <li><a href="https://www.youtube.com/">YouTube</a></li>
          <li><a href="https://discord.gg/jUjfgJWZSq">Discord</a></li>
        </ul>
      </div>
    </footer>
  )
}
