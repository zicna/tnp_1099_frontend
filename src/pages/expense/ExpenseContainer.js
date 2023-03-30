import React, { useState } from 'react'
import NewExpense from './NewExpense'

export default function ExpenseContainer() {
  const [showForm, setShowForm] = useState(false)

  const handleShowFormClick = () => {
    setShowForm((prevState) => !prevState)
  }
  return (
    <div>
      <h3>Expense Container</h3>

      {showForm ? (
        <NewExpense setShowForm={setShowForm}></NewExpense>
      ) : (
        <button onClick={handleShowFormClick}>Add New Expense</button>
      )}
    </div>
  )
}

// {
//     "type": "GAS",
//     "amount": 1.99,
//     "date": "2023-01-09T19:15:17.132+00:00",
//     "description": "gas on 35,0139mi"
// }

// type:  GAS, WASH, TOLL, REPAIR, MISCELLANEOUS, TICKET
