import 'bootstrap/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'

import { useEffect } from "react";

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {

  let persistor = persistStore(store);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
