import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/Login.module.css'
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link';
import MyContext from '../MyContext'
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const {headers,backend,setUserdata}=useContext(MyContext);
  const [email,setEmail]=useState("");
  const [showmsg,setShowmsg]=useState(null);
  const [pass,setPass]=useState("");
  const login =async (e)=>{
    e.preventDefault()
    const res = await window.fetch(`${backend}/loginuser`,{
      method:"POST",
      headers,
      body: JSON.stringify({
        email,
        password:pass
      })
    })
    const data = await res.json();
    if(data.status=="ok"){
      window.localStorage.setItem("userId",data.user._id);
      setUserdata(data.user);
      setShowmsg(null);
      router.push(`/`);
    }else{
      setShowmsg(data.status);
      setUserdata(null);
    }
  }

  const getuser = async (uid)=>{
    const res = await fetch(`${backend}/getuser/${uid}`,{
      method:"GET",
      headers,
    })
    const dt = await res.json();
    
    if(dt.status=="ok"){
      console.log("find")
      setUserdata(dt.user);
      setShowmsg(null);
      router.push(`/`);
    }
  }
  useEffect(()=>{
    let id = window.localStorage.getItem("userId");
    // console.log(id)
    if(id){
      getuser(id); 
    }
  },[])
    return (
      <>
        <section className={styles.signup}>
          <div className={styles.wrapper}>
            <form onSubmit={login} className={styles.form}>
              <div className={styles.title}>
                <div className={styles.line}></div>
                <div className={styles.uline}>
                  Welcome back to <span className={styles.org}>flexBox</span>
                </div>
              </div>
              <label htmlFor="">Email:</label>
              <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <label htmlFor="">Password:</label>
              <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
              {showmsg && <p style={{color:"red"}}>Wrong Email or Password</p> }
              <span className={styles.forgot_pass}><Link href="/Signup" className={styles.login_link}>forgot password?</Link></span>
              <div className={styles.btn}>
                <button type='submit' className={styles.subtn}>
                  <LoginIcon />
                  Sign In
                </button>
              </div>
              <span className={styles.login_que}>don't have an account? <Link href="/Signup" className={styles.login_link}>Sign Up</Link></span>
            </form>
          </div>
        </section>
      </>
    );
}

export default Login