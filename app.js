const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const para = document.querySelector('.para');

const t1 = new TimelineMax();

t1.fromTo(hero,1,{height: "0%"},{height: '100%'})
.fromTo(slider,.8,{x:'-100%'},{x:'0%'})
.fromTo(para,.8,{x:'-110%'},{x:'0%'})
.fromTo(logo,.8,{y:'-400%'},{y:'0%'},"-=.8")
.fromTo(hamburger,.8,{y:'-400%'},{y:'0%'},"-=.7")
.fromTo(hero,.8,{width: '100%'},{width:'96%'},"-=.8");

var i = 0;
var txt = 'Green Market Ventures';
var speed = 50;
var x = 0;
var checker = 0;


window.onloadstart = wait();

function wait(){
    setTimeout(typeWriter, 1000);
};

function typeWriter() {
  if (i < txt.length) {
    headline.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
