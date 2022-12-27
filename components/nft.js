import styles from '../styles/nft.module.css';

export default function Nft() {
  return (
    <section id="nft" className={styles.main}>
      <h2>NATORI NFT Collection</h2>
      <p>軍馬×いろは歌　collection</p>
      <p className={styles.text}>
        名取の始まりの歴史「軍馬」と、集落を形成する「石垣」をイメージしたアートに平安時代に作られたとされる「いろは歌」を記した名取初のNFT
      </p>
      
      <div className={styles.imgBox}>
        <div>
          <img src="../nft1.jpg" alt="brown war-horse" />
          <p>brown war-horse</p>
        </div>
        <div>
          <img src="../nft2.jpg" alt="white war-horse" />
          <p>white war-horse</p>
        </div>
        <div>
          <img src="../nft3.jpg" alt="green war-horse" />
          <p>green war-horse</p>
        </div>
        <div>
          <img src="../nft4.jpg" alt="gray war-horse" />
          <p>gray war-horse</p>
        </div>
      </div>

      <p>※一般販売は2023年1月22日を予定！</p>
      <a className={styles.button} href="https://opensea.io/collection/crypto-natori-collection">NFTを見る</a>

      <div className={styles.sns}>
        <a href="https://twitter.com/natoriNFT"><img src="../icon-twitter.jpg" alt="twitterのロゴ" /></a>
        <a href="https://www.facebook.com/gakenouenatori"><img src="../icon-facebook.jpg" alt="facebookのロゴ" /></a>
        <a href="https://discord.gg/jUjfgJWZSq"><img src="../icon-discord.jpg" alt="discordのロゴ" /></a>
        <a href="https://note.com/tsunagu/m/m1318fe46fc82"><img src="../icon-note.jpg" alt="noteのロゴ" /></a>
      </div>
    </section>
  )
}