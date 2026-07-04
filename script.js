/* ===============================
   Romantic Proposal Website V2
   Part 3.1
================================ */

// ==========================
// Elements
// ==========================

const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");
const success = document.getElementById("success");

const openLetter = document.getElementById("openLetter");
const continueBtn = document.getElementById("continueBtn");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const typingText = document.getElementById("typingText");

const hearts = document.getElementById("hearts");
const petals = document.getElementById("petals");
const stars = document.getElementById("stars");

// ==========================
// Typewriter Text
// ==========================

const message =

`Dear Sneha ❤️,

Some people become memories.

Some become reasons to smile.

But there are a few people...

who become the reason life feels beautiful.

You are one of them.

Today I just want to ask you something...

❤️`;

let i = 0;

function typeWriter(){

if(i < message.length){

typingText.innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

// ==========================
// Open Letter
// ==========================

openLetter.addEventListener("click",()=>{

intro.classList.add("hidden");

letter.classList.remove("hidden");

typingText.innerHTML="";

i=0;

typeWriter();

});

// ==========================
// Continue
// ==========================

continueBtn.addEventListener("click",()=>{

letter.classList.add("hidden");

proposal.classList.remove("hidden");

});

// ==========================
// Floating Hearts
// ==========================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(18+Math.random()*22)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,350);

// ==========================
// Rose Petals
// ==========================

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"%";

petal.style.fontSize=(20+Math.random()*18)+"px";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

}

setInterval(createPetal,700);

// ==========================
// Stars
// ==========================

for(let s=0;s<120;s++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

const size=Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.animationDelay=Math.random()*3+"s";

stars.appendChild(star);

}
/* ===============================
   Romantic Proposal Website V2
   Part 3.2
================================ */

// ==========================
// Funny Messages
// ==========================

const funnyMessages=[

"🥺 Are you sure?",

"❤️ Think once again...",

"😭 Don't break my heart...",

"😂 Nice Try!",

"🙈 Catch me first!",

"💖 Please press YES!",

"🥹 I believe in us!",

"🌹 One more chance?"

];

let noIndex=0;

// ==========================
// Running NO Button
// ==========================

function moveNoButton(){

const card=document.querySelector(".proposalCard");

const rect=card.getBoundingClientRect();

const btnWidth=noBtn.offsetWidth;

const btnHeight=noBtn.offsetHeight;

const x=Math.random()*(rect.width-btnWidth-30);

const y=Math.random()*(rect.height-btnHeight-30);

noBtn.style.position="absolute";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

if(noIndex<funnyMessages.length){

noBtn.innerHTML=funnyMessages[noIndex];

noIndex++;

}else{

noBtn.innerHTML="😂 Catch Me";

}

}

// Desktop

noBtn.addEventListener("mouseenter",moveNoButton);

// Mobile

noBtn.addEventListener("touchstart",(e)=>{

e.preventDefault();

moveNoButton();

});

// ==========================
// Heart Burst
// ==========================

function heartBurst(){

for(let i=0;i<35;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animationDuration=(2+Math.random()*3)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

}

// ==========================
// YES Button
// ==========================

yesBtn.addEventListener("click",()=>{

proposal.classList.add("hidden");

success.classList.remove("hidden");

heartBurst();

});
/* ===============================
   Romantic Proposal Website V2
   Part 3.3
================================ */

// ==========================
// Confetti Animation
// ==========================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

let pieces=[];

class Piece{

constructor(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height-canvas.height;

this.size=Math.random()*8+4;

this.speed=Math.random()*4+2;

this.color=[

"#ff4d6d",
"#ffffff",
"#ffd60a",
"#7b2cbf",
"#00f5d4",
"#ff99c8"

][Math.floor(Math.random()*6)];

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.fill();

}

update(){

this.y+=this.speed;

this.x+=Math.sin(this.y/40);

if(this.y>canvas.height){

this.y=-20;

this.x=Math.random()*canvas.width;

}

this.draw();

}

}

function startConfetti(){

pieces=[];

for(let i=0;i<180;i++){

pieces.push(new Piece());

}

animateConfetti();

}

function animateConfetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>p.update());

requestAnimationFrame(animateConfetti);

}

// ==========================
// Sparkles
// ==========================

function sparkle(){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(18+Math.random()*18)+"px";

s.style.pointerEvents="none";

s.style.zIndex="1000";

document.body.appendChild(s);

s.animate([

{

opacity:1,

transform:"scale(0)"

},

{

opacity:0,

transform:"scale(2)"

}

],{

duration:1600

});

setTimeout(()=>{

s.remove();

},1600);

}

// ==========================
// Celebration
// ==========================

yesBtn.addEventListener("click",()=>{

startConfetti();

setInterval(sparkle,300);

});

// ==========================
// Console Message 😄
// ==========================

console.log("❤️ Made with Love For Sneha ❤️");
