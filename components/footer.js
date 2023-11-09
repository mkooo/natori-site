import styles from '../styles/footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.title}>
        <p className={styles.text}>DAOを目指す世界一小さな限界集落</p>
        <p className={styles.text}>世界と繋がり自立した持続可能な集落を創造する。</p>
        <p className={styles.projectName}><Link href="/"><a>©クリプト集落 NATORIプロジェクト</a></Link></p>
      </div>
      <div className={styles.sns}>
        <ul>
          <li><Link href="/news/20230122-nft-begins-general-sales"><a>News</a></Link></li>
          <li><a href="https://note.com/tsunagu/m/m1318fe46fc82">note</a></li>
          <li><a href="https://twitter.com/natoriNFT">X(twitter)</a></li>
          <li><a href="https://opensea.io/collection/crypto-natori-collection">Opensea</a></li>
          <li><a href="https://discord.gg/jUjfgJWZSq">Discord</a></li>
        </ul>
      </div>
    </footer>
  )
}
