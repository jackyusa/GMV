/*const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
});

window.addEventListener('scroll', () => {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop + 'px';
});
*/
var i = 0;
var txt = 'Green Market Ventures';
var speed = 80;

window.onload = typeWriter;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};