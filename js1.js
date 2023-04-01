alert("thanks for visiting......");
document.getElementById('main').addElementListener("mouseover",function(){this.style.backgroundcolor='blue';
})
document.getElementById('main').addElementListener("mouseout",function(){this.style.backgroundcolor='red';
})
var feet=document.getElementById('feet');
var inch=document.getElementById('inch');
feet.addElementListener('input',function(){
    let f= this.value;
    let i= f*12;
    inch.value=i;
})
inch.addElementListener('input',function(){
    let i= this.value;
    let f= i/12;
    inch.value=i;
    if(!Number.isInteger(f))
    {
        f=f.tofixed(2)
    }
    feet.value=f;
})
