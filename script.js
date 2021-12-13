const crono = document.getElementById('crono')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const howLong = document.getElementById('howLong')

let i = 30
const audio =  new Audio('bip.mp3')

howLong.addEventListener('change', (e)=> {
 i = (e.target.value);
 crono.innerHTML = i
})

const countDown = () => {
    
    
    stop.addEventListener('click', () => {
        clearInterval(interval)
    })
    const interval =  setInterval(() => {
        if(i > 0){
            i = i - 1
            crono.innerHTML = i ;
        }else{
            i = 30
            audio.play()
            
        }}
        , 1000)
        
    
}
start.addEventListener('click', countDown)





