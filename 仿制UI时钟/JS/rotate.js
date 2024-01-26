let hr =  document.querySelector(".hr");
let mn = document.querySelector(".mn");
let sc = document.querySelector(".sc");
function mytime(){
    let date= new Date();
    let hr = date.getHours() * 30;
    let mn = date.getMinutes() * 6;
    let sc = date.getSeconds() * 6;
    hr.style.transform = 'rotate('+(hr+mn/12)+'deg)';
    mn.style.transform = 'rotate('+mn+'deg)';
    sc.style.transform = 'rotate('+sc+'deg)';
    // sc.setAttribute('style','transform: rotate($s{sc}deg)'); 
}
setInterval('mytime()')