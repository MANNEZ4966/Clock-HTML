const timeEL=document.querySelector(".time")
const btnToggle=document.querySelector(".toggle")

// 10 : 30 : 40
function setTime(){
    const time = new Date()
    const hour = time.getHours()
    const minutes = time.getMinutes()
    const secconds = time.getSeconds()
    timeEL.innerHTML=`${hour}:
    ${minutes<10 ? `0${minutes}`: minutes}:
    ${secconds<10 ? `0${seconds}`: secconds}`
}
btnToggle.addEventListener("click", (e)=>{
    const html=document.querySelector("html")
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML="Dark Mode"
    }else{
        html.classList.add("dark")
        e.target.innerHTML="Light Mode"
    }
})
setTime()
setInterval(setTime,1000)
//console.log(new Date())
//console.log("สลับโหมด")