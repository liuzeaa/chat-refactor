/**
 * Created by xiaoxiaosu on 17/7/6.
 */
var model = require('../../config/model')
var moment = require('moment')
const POST = model.Post
const connect =model.connect
var express = require('express')

var router = express.Router()


router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('/register',(req,res)=>{
    res.render('register')
})
router.get('/logout',(req,res)=>{
    res.clearCookie('dongnao_chat')
    res.clearCookie('user_id')
    res.redirect('/auth/login')
})
router.post('/register',(req,res)=>{
    let username = req.body.username,password = req.body.password;
    console.log(moment().format('YYYY-MM-DD hh:mm:ss'))
    model.User.findOne({
        where:{
            username:username
        }
    }).then(doc=>{
        if(doc){
            res.json({
                status:'1',
                msg:'用户已存在',
                result:''
            })
        }else{
            model.User.create({
                username:username,
                password:password,
            }).then(doc2=>{
                res.cookie('user_id',doc2.id,{maxAge:60000000})
                res.redirect('/')
            })
        }
    })
})
router.post('/login',(req,res)=>{
    console.log(moment().format('YYYY-MM-DD hh:mm:ss'))
    model.User.find({
        where:{
            username:req.body.username,
            password:req.body.password
        }
    }).then((item)=>{
        if(!item){
            res.send({
                error:'not found'
            })
        }else {
            res.cookie('user_id',item.id,{maxAge:60000000})
            res.redirect('/')
        }
    })
})



module.exports = router