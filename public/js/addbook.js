
let title=document.getElementById("username");
let author=document.getElementById("number");
let life=document.getElementById("email");
let genre=document.getElementById("pwd");


let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let error3=document.getElementById("error2");
let error4=document.getElementById("error3");

let flag=0;

let regexptitle= /^([A-Za-z0-9\._]+)$/;
let regexpauthor= /^([A-Za-z0-9\._]+)$/;
let regexplife= /^([0-9\._]+)$/;
let regexpgenre= /^([A-Za-z0-9\._]+)$/;

// + one or more


function titleValidation()
{
  
  if(regexptitle.test(title.value) )
  {
    error1.innerHTML="Valid title.";
    error1.style.color="green";
    return authorValidation();
    
  }
 else{

    error1.innerHTML="Username can include A-Z , a-z , 0-9 , _ , and . only.";
    error1.style.color="red";
    return false;

     } 
  
}

function authorValidation()
{
  
    if(regexpauthor.test(author.value) )
    {
      error2.innerHTML="Valid title.";
      error2.style.color="green";
      return authorValidation();
      
    }
   else{
  
      error2.innerHTML="Username can include A-Z , a-z , 0-9 , _ , and . only.";
      error2.style.color="red";
      return false;
  
       } 
  
}
function lifeValidation()
{
  
    if(regexplife.test(life.value) )
    {
      error3.innerHTML="Valid title.";
      error3.style.color="green";
      return authorValidation();
      
    }
   else{
  
      error3.innerHTML="Username can include A-Z , a-z , 0-9 , _ , and . only.";
      error3.style.color="red";
      return false;
  
       } 
  
}
function genreValidation()
{

    if(regexpgenre.test(genre.value) )
    {
      error1.innerHTML="Valid title.";
      error1.style.color="green";
      return true;
      
    }
   else{
  
      error4.innerHTML="Username can include A-Z , a-z , 0-9 , _ , and . only.";
      error4.style.color="red";
      return false;
  
       } 
  
}



