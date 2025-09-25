import React, { use, useState } from 'react'
import Button from './Button'

const Main = () => {
  const [input, setInput] = useState("0")
  const [prev, setprev] = useState("")
  const handleClick = (value) => {
    if (value === "Ac") {
      if(input=="0"){
        setprev("")
      }
      else{
        setprev(input)
      }
      setInput("0")
    } else if (value === "Del") {
      setInput(input.length > 1 ? input.slice(0, -1) : "0")
    } else if (value === "=") {
      try {
        setInput(eval(input).toString())
      } catch {
        setInput("Error")
      }
    } else {
      setInput(input === "0" ? value : input + value)
    }
  }

  return (
    <div className='flex flex-col p-5 items-center py-6 h-full md:w-[20rem] w-[15rem] xl:w-1/4 justify-between rounded-3xl backdrop-blur-2xl bg-blue-800/20 shadow-lg shadow-black'>
       <input 
        type="text"  
        value={prev}
        className='h-15 rounded-2xl text-end outline-none text-black/60 text-2xl font-bold w-full bg-transparent' 
        readOnly
      />
      <input 
        type="text"  
        className='h-15 rounded-2xl text-end outline-none text-4xl font-bold w-full bg-transparent' 
        value={input}
        readOnly
      />

      <div className='h-[70%] gap-2 p-2 w-full grid grid-cols-4 items-center'>
        <Button value="Ac" onClick={() => handleClick("Ac")} bgColor='bg-orange-500'/>
        <Button value="Del" onClick={() => handleClick("Del")}/>
        <Button value="/" onClick={() => handleClick("/")} />  
        <Button value="*" onClick={() => handleClick("*")} />  

        <Button value="7" onClick={() => handleClick("7")} />  
        <Button value="8" onClick={() => handleClick("8")} />  
        <Button value="9" onClick={() => handleClick("9")} />  
        <Button value="%" onClick={() => handleClick("%")} />  

        <Button value="4" onClick={() => handleClick("4")} />  
        <Button value="5" onClick={() => handleClick("5")} />  
        <Button value="6" onClick={() => handleClick("6")} />  
        <Button value="+" onClick={() => handleClick("+")} />  

        <Button value="1" onClick={() => handleClick("1")} />  
        <Button value="2" onClick={() => handleClick("2")} />  
        <Button value="3" onClick={() => handleClick("3")} />  
        <Button value="-" onClick={() => handleClick("-")} />  

        <Button value="." onClick={() => handleClick(".")} />
        <Button value="0" onClick={() => handleClick("0")} />
        <Button value="=" bgColor="bg-orange-500 text-white" onClick={() => handleClick("=")}  width=' md:w-[7rem] w-[5rem]'/>
      </div>
    </div>
  )
}

export default Main
