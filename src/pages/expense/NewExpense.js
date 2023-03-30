import React, { useContext, useState } from 'react'
import { UserContext } from '../../storeAndContext/UserProvider'

export default function NewExpense({ setShowForm }) {
  // *** TYPING

  const { user } = useContext(UserContext)

  const [type, setType] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState('')
  const [desc, setDesc] = useState('')

  const handleTypeChange = (e) => {
    setType(e.target.value)
  }
  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleDescChange = (e) => {
    setDesc(e.target.value)
  }
  // *** SUBMITING
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

    setShowForm((prevState) => !prevState)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">TYPE: </label>
        <select onChange={handleTypeChange}>
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
      <div>
        <label htmlFor="amount">AMOUNT: </label>
        <input
          type="number"
          value={amount}
          min={0.01}
          step={0.01}
          onChange={handleAmountChange}
        />
      </div>
      <div>
        <label htmlFor="date">DATE: </label>
        <input type="date" value={date} onChange={handleDateChange} />
      </div>
      <div>
        <label htmlFor="description">DESCRIPTION</label>
        <input type="text" value={desc} onChange={handleDescChange} />
      </div>
      <div>
        <button type="submit" disabled={false}>
          SUBMIT
        </button>
      </div>
    </form>
  )
}
