import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Auth.module.css";
import googleImage from "../../../public/images/google.png";
import facebookImage from "../../../public/images/facebook.png";
import { useState } from "react";
import { LoadingAnimation } from "../../../components";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { postRequest } from '../../api/apiConfig';

import { useDispatch } from 'react-redux'
import { login } from '../../../redux/slices/userSilce'

export default function Login() {

  const router = useRouter();
  const dispatch = useDispatch();

  const [onLoading, setOnLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .required('Email harus diisi'),
      password: Yup.string()
        .required('Password harus diisi'),
    }),
    onSubmit: values => {
      setMsg('');
      onLogin(values)
      setOnLoading(true)
    },
  })

  const onLogin = async (values) => {
      try {
        const user = await postRequest('user/login', values, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        localStorage.setItem('token', `Bearer ${user.data.token}`)
        dispatch(login({
          uid : user.data.data.id,
          name : user.data.data.name,
          email : user.data.data.email,
          image : user.data.data.image,
          city : user.data.data.city,
          address : user.data.data.address,
          phone : user.data.data.phoneNumber,
        }))

        router.push('/dashboard')
      } catch (error) {
        setMsg(error.response?.data?.message)
        setOnLoading(false)
      }
  }  

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
            {msg ? 
              <div className="text-center alert alert-danger" role="alert">
                <strong>{msg}</strong>
              </div>
            : null}
            <p className={styles.head}>Masuk</p>
            <div className={styles.input}>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Contoh: johndee@gmail.com"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}

                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Masukkan Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-danger">{formik.errors.password}</div>
                    ) : null}
                </div>
                <p className={styles.forget}>
                  <a href="forget-password">Lupa password?</a>
                </p>
                {onLoading ? <LoadingAnimation /> : 
                <button type="submit" className={styles.button}>
                  Masuk
                </button>
                }
              </form>
            </div>
            <div className={styles.line}>
              <hr />
              <span>or</span>
              <hr />
            </div>
            <div className={styles.buttonAuth}>
              <button type="button" className={styles.facebook}>
                <Image src={facebookImage} height={20} width={20} alt="facebook"></Image>
                Facebook
              </button>
              <button type="button" className={styles.auth}>
                <Image src={googleImage} height={20} width={20} alt="google"></Image> Google
              </button>
            </div>
            <div className={styles.line2}>
              <hr></hr>
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
