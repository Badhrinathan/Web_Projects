var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter=counter+1;
    if(counter>5){
        counter=1;
    }
},3000);

const slider = document.querySelector('.slider')
const btns = document.querySelectorAll('.btn')
const imglist = ["slider1", "slider2", "slider3", "slider4", "slider5"]
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log('clicked')
        if(button.classList.contains('left-bt')){
            console.log('clicked right')
        }
    })
})