import React, { useContext } from 'react'
import { useInput } from '../../hooks/useInput'
import { UserContext } from '../../storeAndContext/UserProvider'
import styles from './newExpense.module.css'

// TODO: remove 'invalid' style from <select> on start
// TODO: refactor submiting into external function


export default function NewExpense({ setShowForm }) {
  const { user } = useContext(UserContext)
  
  const {
    input: type,
    inputValid: typeValid,
    inputTouched: typeTouched,
    handleInputChange: handleTypeChange,
    handleInputBlur: handleTypeBlur,
    resetInput: resetType,
  } = useInput()
  const {
    input: amount,
    inputValid: amountValid,
    inputTouched: amountTouched,
    handleInputChange: handleAmountChange,
    handleInputBlur: handleAmountBlur,
    resetInput: resetAmount,
  } = useInput()
  const {
    input: date,
    inputValid: dateValid,
    inputTouched: dateTouched,
    handleInputChange: handleDateChange,
    handleInputBlur: handleDateBlur,
    resetInput: resetDate,
  } = useInput()
  const {
    input: desc,
    inputValid: descValid,
    inputTouched: descTouched,
    handleInputChange: handleDescChange,
    handleInputBlur: handleDescBlur,
    resetInput: resetDesc,
  } = useInput()

  const fromValid = typeValid && amountValid && dateValid && descValid
  // *** SUBMITING *****************************
  const handleSubmit = () => {
    // * hide form after submiting
    console.log({ type, amount, date, desc }, user)
    const payload = { type, amount, date, description: desc }
    fetch(`http://localhost:8080/user/${user.id}/expense`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        response.json()
      })
      .then((data) => console.log(data))

    resetAmount()
    resetDate()
    resetDesc()
    resetType()

    setShowForm((prevState) => !prevState)
  }

  const handleCancelClick = () => {
    setShowForm((prevState) => !prevState)
    resetAmount()
    resetDate()
    resetDesc()
    resetType()
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Create new Expense</legend>
          <div className={styles.inputContainer}>
            <label htmlFor="type">TYPE: </label>
            <select
              onChange={handleTypeChange}
              onBlur={handleTypeBlur}
              className={
                `styles.select` + typeTouched && !typeValid
                  ? styles.invalid
                  : ''
              }
            >
              <option
                value={'Please select type of expense'}
                hidden={true}
                disabled={true}
              >
                Please select type of expense
              </option>
              <option value="GAS">GAS</option>
              <option value="WASH">WASH</option>
              <option value="TOLL">TOLL</option>
              <option value="REPAIR">REPAIR</option>
              <option value="MISCELLANEOUS">MISCELLANEOUS</option>
              <option value="TICKET">TICKET</option>
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="amount">AMOUNT: </label>
            <input
              type="number"
              value={amount}
              min={0.01}
              step={0.01}
              onChange={handleAmountChange}
              onBlur={handleAmountBlur}
              className={amountTouched && !amountValid ? styles.invalid : ''}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="date">DATE: </label>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              onBlur={handleDateBlur}
              className={dateTouched && !dateValid ? styles.invalid : ''}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="description">DESCRIPTION: </label>
            <input
              type="text"
              value={desc}
              onChange={handleDescChange}
              onBlur={handleDescBlur}
              className={descTouched && !descValid ? styles.invalid : ''}
            />
          </div>
          <div className={`${styles.inputContainer}, ${styles.actions}`}>
            <button type="submit" disabled={!fromValid}>
              SUBMIT
            </button>
            <button type="reset" disabled={false} onClick={handleCancelClick}>
              CANCEL
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
