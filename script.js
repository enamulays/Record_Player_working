let state = false;
const btn = document.querySelector('.btn');
const record = document.querySelector('.record');
const toneArm = document.querySelector('.torn-alarm');
const song = document.querySelector('.my-song');
const slider = document.querySelector('.slider');
const icon = document.querySelector('.icon');

btn.addEventListener('click', function(){
    state = !state;
    if(state==false){
        record.classList.add('on');
        toneArm.classList.add('play');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        setTimeout(function(){
            song.play()
        }, 1000)
    }else{
        record.classList.remove('on');
        toneArm.classList.remove('play');
        icon.classList.add('fa-play');
        icon.classList.remove('fa-pause');
        song.pause();
    }
  
})
slider.addEventListener('input', function(e){
    song.volume = Number(e.target.value);
})