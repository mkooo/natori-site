import styles from '../styles/nft.module.css';

export default function Nft() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2>NATORI NFT</h2>
        <p className={styles.text}>
          ここにNFTについてなにか説明文を記載する。<br/>
          ここにNFTについてなにか説明文を記載するここにNFTについてなにか説明文を記載する
          ここにNFTについてなにか説明文を記載する
        </p>
        <a className={styles.button} href="#">NFTを見る</a>
      </div>
      <div className={styles.imgbox}>
        <div>
        <img className={styles.nftImage} src="../nft.jpg" alt="NATORIプロジェクトのNFT画像" />
        </div>
      </div>
    </section>
  )
}