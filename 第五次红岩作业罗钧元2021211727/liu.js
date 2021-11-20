
window.alert('gg')
let text=document.querySelector('textarea')
let uu=document.querySelector('button');
let ul=document.querySelector('ul');

uu.onclick=function(){
    // document.write('O');
    if(text.value==''){
    alert('sb')
    return false;
}
else{
var li=document.createElement('li');
li.innerHTML=text.value+'<button id="j">删除</button>';
ul.insertBefore(li,ul.children[0]);
// ul.appendChild(li);
let jj=document.querySelectorAll('#j');
  
     for(let i=0;i<jj.length;i++){
       
       jj[i].onclick=function(){
             ul.removeChild(this.parentNode);
        }  
        
}

}
text.value="";
}






































































































































































































  


















// else{
    
    // li.innerHTML=text.value+'<a herf="javascript:;">d</a>';
    
    // let jj=document.querySelectorAll('a');
    // for(let i=0;i<jj.length;i++){
       
    //    jj[i].onclick=function(){
    //         ul.removeChild(this.jj);
    //     }  
        
    // }


// }
