import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  // const [isFormValid, setIsFormValid] = useState(false)

  const handleEmailChange = async (e) => {
    setEmail(e.target.value)
  }
  
  const handleDOBChange = (e) => {
    setDateOfBirth(e.target.value)
  }
  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const handleSubmit = () => {
    console.log({ email, dateOfBirth, gender })
    setDateOfBirth("")
    setEmail("")
    setGender("")
  }
// ** FORM VALIDATION AND RESET
  const isFormValid = !!email && !!gender && !!dateOfBirth

  

  return (
    <div>
      <h2>Log In Please</h2>
      <form action="#">
        <div>
          <label htmlFor="email">email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDOBChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <select onChange={handleGenderChange}  required>
            <option value={""}  selected hidden={true} disabled={true}>
              Please select gender
            </option>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
            <option value="OTHER">OTHER</option>
          </select>
        </div>
        <br />
        <input type="submit" value="SUBMIT"  disabled={!isFormValid} onClick={handleSubmit} />
      </form>
    </div>
  )
}

// const example = {
//   email: 'radisa_ilic@pfc.com',
//   date_of_birth: '2023-01-09T19:15:17.132+00:00',
//   gender: 'MALE',
// }
