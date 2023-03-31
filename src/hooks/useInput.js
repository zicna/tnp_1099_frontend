import { useState } from 'react'

export const useInput = () => {
  const [input, setInput] = useState('')
  const [inputValid, setInputValid] = useState(false)
  const [inputTouched, setInputTouched] = useState(false)

  const handleInputChange = (e) => {
    setInput(e.target.value)
    setInputTouched(true)
    if (e.target.value.trim() !== '') setInputValid(true)
    if (e.target.value.trim() === '') setInputValid(false)
  }

  const handleInputBlur = () => {
    setInputTouched(true)
  }
  const resetInput = () => {
    setInputTouched(false)
    setInputValid(false)
    setInput('')
  }

  return {
    input,
    inputValid,
    inputTouched,
    handleInputChange,
    handleInputBlur,
    resetInput
  }
}
