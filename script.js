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
var x=document.getElementById("clear")
x.addEventListener("click",function(){
document.getElementById("frst-nmbr").value=" ";
document.getElementById("scnd-nmbr").value=" ";
document.getElementById("result").value=" ";
document.getElementById("factorial").value=" "
                
;            })
        