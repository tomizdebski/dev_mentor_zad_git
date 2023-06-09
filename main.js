const h1 = document.querySelector('h1');
h1.addEventListener('click' , ()=> {
    let paragraph = document.createElement('button');
    paragraph.innerText = 'kliknieto mnie';
    h1.appendChild(paragraph);
})