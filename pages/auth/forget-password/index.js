import Head from "next/head";
import styles from "../../../styles/Auth.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Forget Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.flexContainer}>
        <div className={styles.flexLeft}>
          <div>
            Left<br></br> Hand.
          </div>
        </div>
        <div className={styles.flexRight}>
          <div className={styles.card}>
            <p className={styles.head}>Permintaan Ganti Password</p>
            <div className={styles.input}>
              <div>
                <label forHTML="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Contoh: johndee@gmail.com"
                ></input>
              </div>
            </div>
            <button type="button" className={styles.button}>
              Kirim Permintaan
            </button>
            <p className={styles.footer}>
              <a href="login">kembali</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
