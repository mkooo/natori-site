import styles from '../styles/nft.module.css';

export default function Nft() {
  return (
    <section className={styles.main}>
      <h2>NATORI NFT Collection</h2>
      <p>軍馬×いろは歌　collection</p>
      <p className={styles.text}>
        名取の始まりの歴史「軍馬」と、集落を形成する「石垣」をイメージしたアートに平安時代に作られたとされる「いろは歌」を記した名取初のNFT
      </p>
      
      <div className={styles.imgBox}>
        <div>
          <img src="../nft1.jpg" alt="NFT画像1" />
          <p>brown war-horse</p>
        </div>
        <div>
          <img src="../nft2.jpg" alt="NFT画像2" />
          <p>white war-horse</p>
        </div>
        <div>
          <img src="../nft3.jpg" alt="NFT画像3" />
          <p>green war-horse</p>
        </div>
        <div>
          <img src="../nft4.jpg" alt="NFT画像4" />
          <p>gray war-horse</p>
        </div>
      </div>
      
      <a className={styles.button} href="https://opensea.io/collection/crypto-natori-collection">NFTを見る</a>
    </section>
  )
}