const crono = document.getElementById('crono')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const howLong = document.getElementById('howLong')
let i = 30
const audio =  new Audio('bip.mp3')


const countDown = () => {


    stop.addEventListener('click', () => {
        clearInterval(interval)
       })
       howLong.addEventListener('change', (e)=> {
        i = (e.target.value);
        clearInterval(interval)
    })
    const interval =  setInterval(() => {
        if(i > 0){
 i = i - 1
 crono.innerHTML = i ;
 console.log(i);
    }else{
        i = 30
        audio.play()

    }}
    , 1000)
  

}
start.addEventListener('click', countDown)





