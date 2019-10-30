// Your code goes here


// mouseenter 

const busImage = document.querySelector('.intro img');

busImage.addEventListener('mouseenter', () => {
    busImage.style.border='10px solid red';
  })

  //mouseleave

  busImage.addEventListener('mouseleave', () => {
    busImage.style.border='none';
  })


// wheel

const body = document.querySelector('body');

body.addEventListener('wheel', (event) => {
    if (event.deltaY > 0){
    body.style.color = 'white';
    } else {
        body.style.color = 'black';
    }
    event.stopPropagation();
})

// click

const firstPic = document.querySelector('.img-content1')

firstPic.addEventListener('click', () => {
    firstPic.style.filter='blur(5px)';
})

const secondPic = document.querySelector('.img-content2')

secondPic.addEventListener('click', () => {
    secondPic.style.filter='invert(75%)';
})

// dblclick

const thirdPic = document.querySelector('.destination-img')

thirdPic.addEventListener('dblclick', () => {
    thirdPic.style.filter='saturate(0%) drop-shadow(16px 16px 20px hotpink)';
})

// resize

const resized = document.querySelector('body');
window.addEventListener('resize', () => {
    resized.style.background='black';
})

// load

window.addEventListener('load', () => {
    alert('Enjoy Fun Bus!');
  });

// focus

const focus = document.querySelector('nav a')

focus.addEventListener('focus', (event) => {
    event.target.style.color = 'red';    
  }, true);


// keydown

const deleteFooter = document.querySelector('footer')
window.addEventListener('keydown', (event) => {
    if (event.code == 'Backspace') {
       deleteFooter.style.display = "none";
    }
});

// scroll
const scroll = document.querySelector('h1');
window.addEventListener('scroll', (event) => {
        scroll.style.color='red';
        scroll.style.fontSize='5rem';
        scroll.style.fontFamily='Roboto';
}) 

//preventDefault

const stopNav = document.querySelector('nav a');
stopNav.addEventListener('click', (event) => {
    event.preventDefault();
  })

  //stopPropagation for body

const parent = document.querySelector('body');
parent.addEventListener('click', () => {
    parent.style.background='pink';
})

const child = document.querySelector('.intro');
child.addEventListener('click', () => {
    child.style.background='crimson';
})

const grandchild = document.querySelector('.intro h2');
grandchild.addEventListener('click', (event) => {
    grandchild.style.background='aquamarine';
    event.stopPropagation();
})
  