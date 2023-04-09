const express = require("express");
const user = require("../models/user");
const router = express.Router();
const bycrpt = require("bcryptjs");
require('dotenv').config();
const authcode = process.env.VERIFY_CODE;

const verifycode = (code)=>{
    if(code!=authcode){
        return false;
    }else{
        return true;
    }
}
const bycrptPass =async (password)=>{
    const salt = await bycrpt.genSalt(10);
    const sespass = await bycrpt.hash(password, salt);
    return sespass;
}
router.post("/createuser", async (req, res) => {
    try {
        if(!verifycode(req.headers.authorization)){
            res.json({status:"bad request"});
            return
        }
        const {email}=req.body;
        const checkemail = await user.findOne({email});
        if(!checkemail){
            const { name,password,skills,about,dp,orgId }=req.body;
            const newpass = await bycrptPass(password);
            const newuser = await user.create({
                name,
                des: about,
                dp,
                email,
                password : newpass,
                isMentor:false,
                orgId,
                interest:skills,
                points:0,
                badges:[]
            })
            if(newuser){
                res.json({status:"ok"})
            }else{
                res.json({status:"User not Created"})
            }
        }else{
            res.json({status:"user already axist"})
        }
    } catch (error) { 
        res.json({status:"server Error"})
    }
});
router.post("/loginuser",async (req,res)=>{
    try {
        if(!verifycode(req.headers.authorization)){
            res.json({status:'bad request'})
            return;
        }
        const {email,password}=req.body;
        const data = await user.findOne({ email });
        const compare = await bycrpt.compare(password, data.password);
        if(compare){
            res.json({status:"ok",user:data});
        }else{
            res.json({status:"error in email or password"});
        }
    } catch (error) {
        res.json({status:"server Error"})
    }
});
router.get("/checkemail/:email",async (req,res)=>{
    try {
        if(!verifycode(req.headers.authorization)){
            res.json({status:'bad request'})
            return;
        }
        const email = req.params.email;
        const checkemail = await user.findOne({email});
        if(!checkemail){
            res.json({status:"ok"})
        }else{
            res.json({status:"email already exists"});
        }
    } catch (error) {
        res.json({status:"server Error"})
    }
});
router.get("/getuser/:id",async (req,res)=>{
    try {
        if(!verifycode(req.headers.authorization)){
            res.json({status:'bad request'})
            return;
        }
        const {id}=req.params;
        const us = await user.findById(id);
        if(us){
            res.json({status:"ok",user:us})
        }else{
            res.json({status:"user not found"})
        }
    } catch (error) {
        res.json({status:"server error"})
    }
})
module.exports =router;