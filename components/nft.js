import styles from '../styles/nft.module.css';

export default function Nft() {
  return (
    <section className={styles.main}>
      <h2>NATORI NFT</h2>
      <p className={styles.text}>
        ここにNFTについてなにか説明文を記載する。<br/>
        ここにNFTについてなにか説明文を記載するここにNFTについてなにか説明文を記載する
        ここにNFTについてなにか説明文を記載する
      </p>
      
      <div className={styles.imgBox}>
        <div>
          <img src="../nft1.jpg" alt="NFT画像1" />
          <p>Name1</p>
        </div>
        <div>
          <img src="../nft2.jpg" alt="NFT画像2" />
          <p>Name2</p>
        </div>
        <div>
          <img src="../nft3.jpg" alt="NFT画像3" />
          <p>Name3</p>
        </div>
        <div>
          <img src="../nft4.jpg" alt="NFT画像4" />
          <p>Name4</p>
        </div>
      </div>
      
      <a className={styles.button} href="https://opensea.io/ja">NFTを見る</a>
    </section>
  )
}