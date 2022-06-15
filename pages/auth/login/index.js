import Head from "next/head";
import styles from "../../../styles/Auth.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
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
            <p className={styles.head}>Masuk</p>
            <div className={styles.input}>
              <div>
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Contoh: johndee@gmail.com"
                ></input>
              </div>
              <div>
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Masukkan Password"
                ></input>
              </div>
            </div>
            <button type="button" className={styles.button}>
              Masuk
            </button>
            <p className={styles.forget}>
              <a href="forget-password">Lupa password?</a>
            </p>
            <div className={styles.line}>
              <hr />
              <span>or</span>
              <hr />
            </div>
            <p className={styles.footer}>
              Belum punya akun? <a href="register">Daftar disini</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
