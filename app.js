document.addEventListener('DOMContentLoaded', () => {

const arrowDown = document.querySelector('.arrow-down-one');
const arrowDownTwo = document.querySelector('.arrow-down-two');
const arrowDownThree = document.querySelector('.arrow-down-three');
const arrowUp = document.querySelector('.arrow-up-one');
const arrowUpTwo = document.querySelector('.arrow-up-two');
const arrowUpThree = document.querySelector('.arrow-up-three');
const proBox = document.querySelector('.pro-box');
const comBox= document.querySelector('.com-box');
const conBox= document.querySelector('.con-box');
const menu = document.querySelector('#menu');
const menuBar = document.querySelector('.menu-bar');
const proBox1 = document.querySelector('.pro-box1');
const comBox1= document.querySelector('.com-box1');
const conBox1= document.querySelector('.con-box1');
const close = document.querySelector('.close');

arrowDown.addEventListener('click', () => {
    proBox.classList.add('show');
    proBox.style.display = 'block'
});
arrowDownTwo.addEventListener('click', () => {
    comBox.classList.add('com-box');
    comBox.style.display = 'block';
})
    
arrowDownThree.addEventListener('click', () => {
    conBox.classList.add('con-box');
    conBox.style.display = 'block';
})
menu.addEventListener('click', () => {
   menuBar.classList.add('menu-bar');
   menuBar.style.display = 'block';
   menu.style.display = 'none';
   close.classList.add('close')
   close.style.display = 'block'
})
close.addEventListener('click', () => {
    close.style.display = 'none'
    menuBar.style.display = 'none';
   menu.style.display = 'block';
})
arrowUp.addEventListener('click', () => {
    proBox1.classList.add('pro-box1');
    proBox1.style.display = 'block';
})
arrowUpTwo.addEventListener('click', () => {
    comBox1.classList.add('com-box1');
    comBox1.style.display = 'block';
})
arrowUpThree.addEventListener('click', () => {
    conBox1.classList.add('con-box1');
    conBox1.style.display = 'block';
})

proBox.addEventListener('click', () => {
    proBox.style.display = 'none';
})
comBox.addEventListener('click', () => {
    comBox.style.display = 'none';
})
conBox.addEventListener('click', () => {
    conBox.style.display = 'none';
})

proBox1.addEventListener('click', () => {
    proBox1.style.display = 'none';
})
comBox1.addEventListener('click', () => {
    comBox1.style.display = 'none';
})
conBox1.addEventListener('click', () => {
    conBox1.style.display = 'none';
})
});

