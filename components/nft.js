import styles from '../styles/nft.module.css';
import Link from 'next/link';

export default function Nft() {
  return (
    <section id="nft" className={styles.main}>
      <h2>NATORI NFT Collection</h2>
      <p className={styles.subTitle}>軍馬×いろは歌　collection</p>
      <p className={styles.text}>
        名取の始まりの歴史「軍馬」と、集落を形成する「石垣」をイメージしたアートに平安時代に作られたとされる「いろは歌」を記した名取初のNFT
      </p>
      
      <p className={styles.startDate}>2023年1月22日(日)販売スタート！</p>

      <div className={styles.imgBox}>
        <div>
          <p>gray war-horse</p>
          <img src="../nft4.jpg" alt="gray war-horse" />
          <a className={styles.button} href="https://opensea.io/collection/crypto-natori-collection">暗号通貨で購入へ</a>
        </div>
        <div>
          <p>green war-horse</p>
          <img src="../nft3.jpg" alt="green war-horse" />
          <a className={styles.button} href="https://cryptonatori.base.shop/">現金で購入へ</a>
        </div>
      </div>

      <div className={styles.pressLink}>
      <Link href="/news/20230122-nft-begins-general-sales"><a>プレスリリースはこちら</a></Link>
      </div>
      
      <div className={styles.sns}>
        <a href="https://twitter.com/natoriNFT"><img src="../icon-twitter.jpg" alt="twitterのロゴ" /></a>
        <a href="https://www.facebook.com/gakenouenatori"><img src="../icon-facebook.jpg" alt="facebookのロゴ" /></a>
        <a href="https://discord.gg/jUjfgJWZSq"><img src="../icon-discord.jpg" alt="discordのロゴ" /></a>
        <a href="https://note.com/tsunagu/m/m1318fe46fc82"><img src="../icon-note.jpg" alt="noteのロゴ" /></a>
      </div>
    </section>
  )
}