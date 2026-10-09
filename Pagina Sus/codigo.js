let toggle=document.getElementById(`toggle`);
let label_toggle=document.getElementById(`label_toggle`);
toggle.addEventListener(`change`,(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle(`Dark`);
    if (checked==true){
        label_toggle.innerHTML=`<i class="fa-solid fa-moon"></i>`;
        label_toggle.style.color="cornflowerblue"
    }else{
        label_toggle.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        label_toggle.style.color="yellow"
    }
})

const slider = document.querySelector('.flex-div');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});