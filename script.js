document.getElementById("sum").addEventListener('click',function(){
var a=parseInt(document.getElementById("frst-nmbr").value);
var b=parseInt(document.getElementById("scnd-nmbr").value);
var c=a+b;
document.getElementById("result").value=c;
}) 
document.getElementById("product").addEventListener('click',function(){
var a=parseInt(document.getElementById("frst-nmbr").value);
var b=parseInt(document.getElementById("scnd-nmbr").value);
var c=a*b;
document.getElementById("result").value=c
})
document.getElementById("fact").addEventListener('click',function(n){
var n=document.getElementById("factorial").value
var ans=1;
for(var i=2;i<=n;i++)
ans=ans*i;
//                return ans;
                
document.getElementById("factorial").value=ans
                    
})
let btnclr=document.getElementById("clear")
let inputs=document.querySelectorAll("input");
btnclr.addEventListener('click',function(){
    inputs.forEach(input=>{input.value=''});
})

document.querySelector(".log").addEventListener('click',function(){
    alert("The log-in page is in Development;");
})