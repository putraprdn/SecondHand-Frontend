import React, { Component } from "react";
import Router from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { logout } from '../redux/slices/userSilce'
import { useDispatch } from "react-redux";

export default function Home() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      Router.push('/dashboard')
    } else {
      dispatch(logout(null))
      Router.push("/auth/login");
    }
  });

  return <div />;
}
