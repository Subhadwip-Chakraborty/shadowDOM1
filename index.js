// let sHost=document.querySelector('.shadow');
// let sRoot=sHost.attachShadow({mode:"open"});


// let paragraph=document.createElement('p');
// paragraph.innerHTML="This part is inside shadwo dom";
// paragraph.classList.add('paraClass')
// paragraph.style.color="red";
// paragraph.part="cssPart";
// // sRoot.appendChild(paragraph);

// let sHost=document.querySelector('.shadow');
// let sRoot=sHost.attachShadow({mode:'open'});

// let paragraph=document.createElement('p');
// paragraph.innerHTML="This part is inside Shadow DOM";
// paragraph.classList.add('paraCLass');
// paragraph.style.color="blue";
// paragraph.part="cssPart";
// sRoot.appendChild(paragraph


// let shadowHost=document.querySelector('.shadow');
// let sRoot=shadowHost.attachShadow({mode:'open'});

// let paragraph=document.createElement('p');
// paragraph.innerHTML="This part is inside shadow";
// paragraph.classList.add('paraClass');
// paragraph.style.color="red";
// paragraph.part="cssPart";
// sRoot.appendChild(paragraph);

// paragraph.style.color="red";


let shadowHost=document.querySelector('.hello');
let shadowRoot=shadowHost.attachShadow({mode:'open'});

let para=document.createElement('p');
para.innerHTML="This is shadow DOM";
para.classList.add('paragraph');
// para.style.color="red";
para.part="styles"
shadowRoot.appendChild(para);





