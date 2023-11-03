const body = document.body;
const progress_bar = document.querySelector('.progress');
const header_opt = document.querySelectorAll('header .pc');
const sections = document.querySelectorAll('section');
const offsets = document.querySelectorAll('.screen-offset');
const colorList = ["#132b85", "#295196", "#1a378f"];
const calling = document.querySelector('.contact-list div:last-child a');
let oldscroll = 0;
const hidden_code = "GGEZ"
let hidden_current = 0;

calling.addEventListener('keyup', (event)=>{
    if(hidden_current === 3){
        document.querySelector('.contact-list div:nth-of-type(1) span').innerHTML = "JakkaBun PhuSan";
        document.querySelector('.contact-list div:nth-of-type(2) span').innerHTML = "Jwiitysan";
    }
    else if(event.key == hidden_code[hidden_current]){
        hidden_current++;
    }
    else{
        hidden_current = 0;
    }
})

calling.addEventListener('focus', ()=>{
    calling.innerHTML = "082-563-0618";
})
window.addEventListener('scroll', () => {
    var element_start = 110;
    var element_end = 110;
    sections.forEach((e, index) => {
        let offset_item = offsets[index];
        offset_item.style.height = Number(window.innerHeight - e.offsetHeight) + "px";
        element = e.childNodes[1];
        element_end += e.offsetHeight + Number(window.innerHeight - e.offsetHeight);
        if((scrollY+110 >= element_start-400 && scrollY+110 <= element_end+100 && window.scrollY > oldscroll) || (window.scrollY < oldscroll
            && scrollY+110 >= element_start-500 && scrollY+110 <= element_end+100)){
            element.style.backgroundColor = "#0b206e";
            e.childNodes[3].classList.add("animation");
            e.style.opacity = 1;
            e.childNodes[3].opacity = 1;
            body.style.backgroundColor = colorList[index];
        }
        else{
            element.style.backgroundColor = "#0e3475";
            e.childNodes[3].classList.remove("animation");
            e.style.opacity = 0.4;
            e.childNodes[3].opacity = 0;
        }
        element_start = element_end;
    });
    oldscroll = window.scrollY;
});

header_opt.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        header_opt.forEach((element) => {
            if(element != event.target){
                element.style.backgroundColor = "#042d6f";
                element.style.opacity = 0.5;
            }
        })
        event.target.style.opacity = 1;
        event.target.style.backgroundColor = "#2175ae";
    });
    element.addEventListener('mouseout', () =>{
        header_opt.forEach((element) => {
            element.style.backgroundColor = "#073784";
            element.style.opacity = 1;
        })
    });
});