import { useEffect, useRef, useState } from "react"

export default function Stopwatch() {
  const timerId = setInterval(() => console.log('count'), 1000)
  clearInterval(timerId)

  const [time,setTime]=useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const timer=useRef(null)

  useEffect(()=>{
    if(isRunning){
      timer.current=setInterval(()=>{  // setInterval hazır fonksiyon belirtilen alarıklarla milisaniye cinsinden fonksiyonu çağırır.
        setTime((prevTime)=>prevTime+1)
        },1000)
      }else{
        clearInterval(timer.current)  //isRunning false olduğunda clearInterval fonksiyonunu çağırır (hazır fonksiyon) durmasını sağlar.
      }
      return ()=>clearInterval(timer.current)   // state değiştiğinde gereksiz yer kaplamamasın için zamanlayıcıyı temizler

    
  },[isRunning]);  // sadece is running stat i değiştiğinde çalışır.

  const startTimer=()=>{
    setIsRunning(true)
  }
  const pauseTimer=()=>{
    setIsRunning(false)
  }



  

  return (
    <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl'>Zamanlayıcı: {time}s</div>
      <div className='flex justify-between'>
        <button className='text-amber-500 font-bold' onClick={pauseTimer}>Durdur</button>
        <button className='text-green-500 font-bold' onClick={startTimer}>Başlat</button>
      </div>
    </div>
  )
}
