const express = require('express');
const loginRouter = express.Router();

function router3(nav)
{ 
    
loginRouter.get('/', function(req,res){
    res.render("login",
    {
        nav,
        title:'Log In',
       
    }
    );//passed as object
});
loginRouter.get('/:id', function(req,res){
    const id=req.params.id;
    res.render("addpage",
    {
        nav,
        title:'Add new book',
        
    }
    );//passed as object
});
return loginRouter;
}//fn router ends

module.exports=router3;//exporting to app.js




// let email=document.getElementById("email");
//     let pwd=document.getElementById("pwd");
    
//     let error1=document.getElementById("error1");
//     let error2=document.getElementById("error2");
//     let flag=0;
  
//     let regexpmail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
//     // let regexppwd= /^([A-Za-z]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
//     // + one or more
  
    
    
    
//     function emailValidation()
//     {
      
//       if(regexpmail.test(email.value) )
//       {
//         error1.innerHTML="Valid Email address.";
//         error1.style.color="green";
//         return pwdValidation();
        
//       }
//      else{
    
//         error1.innerHTML="Invalid Email address.";
//         error1.style.color="red";
//         return false;
    
//          } 
      
//     }
  
//     function pwdValidation()
//     {
      
//       if( pwd.value.length>=1)
//       {
//         error2.innerHTML="Correct password.";
//         error2.style.color="green";
//         return true;
        
//       }
//      else{
    
//         error2.innerHTML="Incorrect password.";
//         error2.style.color="red";
//         return false;
    
//          } 
      
//     }
   