import styles from '../styles/member.module.css';
import member1 from '../public/member1.jpg';
import member2 from '../public/member2.jpg';
import member3 from '../public/member3.jpg';
import member4 from '../public/member4.jpg';

export default function Member() {
  return (
    <section>
      <div className={styles.natori}></div>
      <div className={styles.title}>
        <h2>Member</h2>
      </div>
      <div className={styles.project}>
        <div>
          <img src="../member1.jpg" alt="makiの画像" />
          <h3>maki</h3>
          <p>自己紹介のテキスト自己紹介のテキスト自己紹介のテキスト</p>
        </div>
        <div>
          <img src="../member2.jpg" alt="もとの画像" />
          <h3>もと</h3>
          <p>自己紹介のテキスト自己紹介のテキスト自己紹介のテキスト</p>
        </div>
        <div>
          <img src="../member3.jpg" alt="kondo" />
          <h3>kondo</h3>
          <p>自己紹介のテキスト自己紹介のテキスト自己紹介のテキスト</p>
        </div>
        <div>
          <img src="../member4.jpg" alt="みくの画像" />
          <h3>実紅</h3>
          <p>自己紹介のテキスト自己紹介のテキスト自己紹介のテキスト</p>
        </div>
      </div>
    </section>
  )
}