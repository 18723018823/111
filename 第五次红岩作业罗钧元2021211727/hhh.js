// 不要使用var 使用 const 或者 let
// var ww=document.getElementsByClassName("ww");
// 推荐使用querySelector或者querySelectorAll
var ww = document.querySelectorAll(".ww");
let jj = document.querySelector("#jj");


jj.onclick = function () {
  for (let i = 0; i < ww.length; i++) {
    ww[i].checked = true;
  }
}

let jw = document.querySelector("#jw");

jw.onclick=function(){
for (let i=0;i<ww.length;i++){
  ww[i].checked=false;
}
}
let jh = document.querySelector("#jh");
jh.onclick=function(){
  for(let i=0;i<=ww.length;i++) {
    ww[i].checked=!ww[i].checked;
  }


}