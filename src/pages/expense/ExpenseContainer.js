import React, { useState } from 'react'
import NewExpense from './NewExpense'
import ExpenseLayout from '../../components/expenseLayout/ExpenseLayout'

export default function ExpenseContainer() {
  return (
    <div>
      <h3>Expense Container</h3>
      <ExpenseLayout></ExpenseLayout>
    </div>
  )
}


// * JSON file construction

// {
//     "type": "GAS",
//     "amount": 1.99,
//     "date": "2023-01-09T19:15:17.132+00:00",
//     "description": "gas on 35,0139mi"
// }

// type:  GAS, WASH, TOLL, REPAIR, MISCELLANEOUS, TICKET
