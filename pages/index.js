import React, { Component } from "react";
import Router from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  React.useEffect(() => {
    Router.push("/dashboard");
  });

  return <div />;
}
