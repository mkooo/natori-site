import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <h2>Contact</h2>
      </div>
      <div className={styles.wrap}>
        <div className={styles.blank}></div>

      </div>
    </section>
  )
}

/*
        <form className={styles.form} action="#">
          <div>
            <label for="name">お名前</label>
            <input className={styles.name} type="text" id="name" name="your-name"/>
          </div>
  
          <div>
            <label for="email">メールアドレス</label>
            <input className={styles.email} type="email" id="email" name="your-email"/>
          </div>
  
          <div>
            <label for="message">メッセージ</label>
            <textarea className={styles.textarea} id="message" name="your-message"></textarea>
          </div>
  
          <input className={styles.button} type="submit" value="送信"/>
        </form>
*/