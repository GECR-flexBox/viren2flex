import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/Login.module.css'
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link';
import MyContext from '../MyContext';
import { useRouter } from 'next/navigation';

const Login = () => {
  const {headers,backend,remail} = useContext(MyContext);
  const router = useRouter();
  const [name,setName]=useState("");
  const [pass,setPass]=useState("");
  const [cpass,setCPass]=useState("");
  const [about,setAbout]=useState("");
  const [interest,setInterest]=useState([]);
  const [rlkey,setrlkey]=useState(0);
  const skills = ["Web-devlopment","App-devlopment","UI/UX","AI/ML","Blockchain"];


  const handleSubmit =async  (e)=>{
    e.preventDefault()
    if(pass=="" || cpass=="" || interest==[] || about=="" || name=="" || remail==null ){
      alert("invalid creadentials")
      return
    }
    if(pass!=cpass){
      alert("password not matched")
      return
    }
    const res = await fetch(`${backend}/createuser`,{
      method:"POST",
      headers,
      body:JSON.stringify({
        name,
        password:pass,
        email:remail,
        skills: interest,
        about,
        dp:"#",
        orgId:"1234"
      })
    })
    const dt = await res.json();
    if(dt.status=="user "){
      router.push('/Signin');
      
    }else{
      alert(dt.status);
    }
  }

  useEffect(()=>{
    if(remail==null){
     router.push("/Signup");
    }
    else{
      document.getElementById('selectSkill').style.display='none'
    }
  },[])

    return (
      <>
        <section className={styles.signup}>
          <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.title}>
                <div className={styles.line}></div>
                <div className={styles.uline}>
                  Welcome to <span className={styles.org}>flexBox</span>
                </div>
              </div>

              <label >Username:</label>
              <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
              {/* <label htmlFor="">Profile Picture:</label>
              <input type="file" /> */}
              <label>Password:</label>
              <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
              <label htmlFor="">Confirm Password:</label>
              <input type="password" value={cpass} onChange={(e)=>{setCPass(e.target.value)}}/>
              <label htmlFor="">About you:</label>
              <textarea value={about} onChange={(e)=>{setAbout(e.target.value)}} style={{backgroundColor:'rgb(128,128,128)',color:'white'}} name="about"  cols="30" rows="5"/>

              <label>Skills:</label>
              <div>
                <div key={rlkey} style={{backgroundColor:"rgb(128,128,128,0.5",cursor:'pointer'}} onClick={()=>{document.getElementById('selectSkill').style.display='unset'}} >
                    {interest.length==0 && <p>Select atleat one interest</p> }
                    <div>
                      {interest.map((int)=>{
                        return (
                          <p key={int}>{int}</p>
                        )
                      })}
                      {interest.length!=0 && <button onClick={()=>{setInterest([])}}>clear all</button> }
                    </div>
                </div>
                <div id='selectSkill' style={{position:'absolute', backgroundColor:"rgb(128,128,128)"}}>
                  {skills.map((sk)=>{
                    return ( <p style={{cursor:"pointer"}}  key={sk} onClick={(e)=>{
                      e.preventDefault()
                      if(!interest.includes(sk)){
                        let newint = interest;
                        newint.push(sk);
                        setInterest(newint); 
                        setrlkey(rlkey+1);
                      }
                      document.getElementById('selectSkill').style.display='none'; 
                     }}>{sk}</p> )
                  })}
                </div>
              </div>
              <div className={styles.confirm}>
                <input type="checkbox" />I confirm to bunk lectures
              </div>
              <div className={styles.btn}>
                <button type='submit' className={styles.subtn}>
                  <LoginIcon />
                  Sign Up
                </button>
              </div>
              <span className={styles.login_que}>already have an account? <Link href="/Signin" className={styles.login_link}>Sign In</Link></span>
            
            </form>
          </div>
        </section>
      </>
    );
}

export default Login