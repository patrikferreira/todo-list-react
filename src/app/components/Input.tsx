import React from 'react'

type Props = {
    sendInputValue: (inputValue: string) => void,
    inputValueText: string,
}

export default function Input({sendInputValue, inputValueText}: Props) {
  return (
    <div>
        <>
        <input type="text"  value={inputValueText} placeholder='New Task' onChange={(e) => {
            sendInputValue(e.target.value)
        }} />
    </>
      
    </div>
  )
}
