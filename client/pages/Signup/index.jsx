import React, { useContext, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import MyContext from '../MyContext'
import emailjs from '@emailjs/browser';

function index() {
    const form = useRef();
    const [sendotp,setSendotp]=useState("Send OTP");
    const {headers,backend,setRemail}=useContext(MyContext);
    const [code,setCode]=useState(null);
    const [sendstate,setSendstate]=useState(false);
    const [email,setEmail]=useState("");
    const [vcode,setVcode]=useState(null);
    const router = useRouter();
    const [sesion,setSesion]=useState(false);
    const [emsg,setEmsg]=useState(null);
    // const [resendTime,setResendTime]=useState(60);

    const verify = ()=>{
      if(sesion){
        if(code==vcode){
          setRemail(email);
          router.push("/Signup/form");
        }else{
          setRemail(null);
          alert("Wrong OTP")
        }
      }else{
        alert("timeOut");
      }
    }
    // const calcsencond= ()=>{
    //   for(let i=59;i>=0;i++){
    //     setTimeout(() => {
    //       setResendTime(i)
    //     }, 1000);
    //   }
    // }
    const sendOTP = async (e)=>{
      e.preventDefault();
      if(email==""){
        setEmsg({
          msg:"Enter valid Email",
          color:"red"
        })
        setSendotp("Send OTP");
        return
      }
      if(sendstate){
        setSendotp("Send OTP");
        return;
      }
      setEmsg(null)
      setSendotp("Sending....");
      setSendstate(true);
      setCode(Math.floor(100000 + Math.random() * 900000));
      const res = await fetch(`${backend}/checkemail/${email}`,{
        method:"GET",headers
      })
      const data = await res.json();
      if(data.status=="ok"){
        await emailjs.sendForm('service_z80kdsc', 'template_1g6p4vm', form.current, process.env.NEXT_PUBLIC_EMAIL)
        .then((result) => {
            setSesion(true);
            setEmsg({
              msg: "OTP is send to your email",
              color: "green"
            })
            setSendotp("Send OTP")
            // calcsencond();
            setTimeout(() => {
              setSesion(false);
            }, 60000);
          }, (error) => {
            setSendotp("Send OTP");
            setEmsg({
              msg: "something erro OTP not send try after sometim",
              color: "green"
            })
        });
      }else{
        setSendotp("Send OTP");
        setEmsg({
          msg: data.status,
          color: "orange"
        })
      }
      setSendstate(false);
    }
  return (
    <>
      <form style={{display:"none"}} ref={form} >
        <label>Name</label>
        <input type="text" value={email} onChange={()=>{}} name="user_name" /><br />
        <label>Email</label>
        <input type="email" value={email} onChange={()=>{}} name="user_email" /><br />
        <label>Message</label>
        <textarea value={code} onChange={()=>{}} name="message" /><br />
        <input type="submit" value="Send" />
      </form>
      <div>
        <h1>Email Verification</h1>
        <div>
          Email: <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter Your Email' />
          <button onClick={sendOTP}>{sendotp}</button><br /><br />
        </div>
        <div>
          {emsg && <p style={{fontWeight:'bolder',color:`${emsg?.color}`}} >{emsg?.msg}</p> }
        </div>
        <div>
          OTP: <input type="text" value={vcode} placeholder='Enter OTP here' onChange={(e)=>{setVcode(e.target.value)}}/>
          <button onClick={verify}>Verify</button>
          {/* <p>resend OTP in : {resendTime} seconds</p> */}
        </div>
      </div>
    </>
  )
}

export default index