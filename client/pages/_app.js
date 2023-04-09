import { useState } from 'react';
import Layout from '../components/layout'
// import '@/styles/globals.css'
import '../styles/globals.css'
import MyContext from './MyContext'
export default function App({ Component, pageProps }) {
  const authcode = process.env.NEXT_PUBLIC_AUTHCODE;
  const backend = process.env.NEXT_PUBLIC_BACKEND;
  const [userdata,setUserdata]=useState(null);
  const [remail,setRemail]=useState(null);
  const headers = {
    "Content-Type":"application/json",
    "Authorization": authcode
  }
  return (
    <MyContext.Provider value={{headers,backend,userdata,setUserdata,remail,setRemail}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContext.Provider>
  )
}
