//Global Constant for buttons
let buttons=document.querySelectorAll('.button-effect');

// Click Event Listener
buttons.forEach((button)=>{
console.log('attaching listerner')
button.addEventListener('click',function(e)

{
console.log('btn clicked');

//Prevents further Event propagation
e.stopPropagation()

//ClientX property returns the horizontal coordinate of the mouse pointer
console.log(e.clientX,e.clientY);
console.log(e.target)
let x=e.clientX-e.target.offsetLeft;
let y=e.clientY-e.target.offsetTop;

//creating the ripple effect using the cinnamon button effect span from .css file
let ripple=document.createElement('span');
ripple.style.left=x+'px';
ripple.style.top=y+'px';
this.appendChild(ripple);


document.getElementById("C1").style.textAlign ="center";


//removing the ripple 
//setTimeout sets a timer for executing the function
setTimeout(()=> {
ripple.remove();
},1000);
});
});



