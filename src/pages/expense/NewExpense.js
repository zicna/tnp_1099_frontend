import React from 'react'

export default function NewExpense({ setShowForm }) {
  const handleSubmit = () => {
    setShowForm((prevState) => !prevState)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">TYPE: </label>
        <select>
          <option selected={true} hidden={true} disabled={true}>
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
        <input type="number" min={0.1} step={0.01} />
      </div>
      <div>
        <label htmlFor="date">DATE: </label>
        <input type="date" />
      </div>
      <div>
        <label htmlFor="description">DESCRIPTION</label>
        <input type="text" />
      </div>
      <div>
        <button type="submit" disabled={false}>
          SUBMIT
        </button>
      </div>
    </form>
  )
}
