import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../storeAndContext/UserProvider'
// import { UserContext } from '../../storeAndContext/UserProvider'
import styles from './auth.module.css'

// TODO: Refactor into reusable custom hook
// TODO: Add Styling for form

export default function Auth() {
  // * Context
  const { user, setUser } = useContext(UserContext)
  // *redirect
  const navigate = useNavigate()

  // * EMAIL *********************
  const [email, setEmail] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [emailIsTouched, setEmailIsTouched] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setEmailIsTouched(true)
    // TODO: here we can add validator function
    if (e.target.value.trim() !== '') setEmailIsValid(true)
  }

  const handleEmailBlur = () => {
    setEmailIsTouched(true)
  }

  // * GENDER *********************
  const [gender, setGender] = useState('')
  const [genderIsValid, setGenderIsValid] = useState(false)
  const [genderIsTouched, setGenderIsTouched] = useState(false)

  const handleGenderChange = (e) => {
    setGender(e.target.value)
    setGenderIsTouched(true)
    // TODO: here we can add validator function
    if (e.target.value.trim() !== '') setGenderIsValid(true)
  }

  const handleGenderBlur = () => {
    setGenderIsTouched(true)
  }

  // * Date Of Birth *********************
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [dateOfBirthIsValid, setDateOfBirthIsValid] = useState(false)
  const [dateOfBirthIsTouched, setDateOfBirthIsTouched] = useState(false)

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value)
    setDateOfBirthIsTouched(true)
    // TODO: here we can add validator function
    if (e.target.value.trim() !== '') setDateOfBirthIsValid(true)
  }

  const handleDateOfBirthBlur = () => {
    setDateOfBirthIsTouched(true)
  }

  // ** FORM SUBMIT, VALIDATION AND RESET *********************
  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: submiting to backend
    const payload = { email, gender, date_of_birth: dateOfBirth }
    console.log(payload)
    try {
      const response = await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error(response.statusText)
      const data = await response.json()
      console.log(data)
      setUser(data)
      navigate('/profile', { replace: true })
    } catch (error) {
      console.log(error)
    }

    // TODO: REFACTOR FULL RESET
    setEmail('')
    setEmailIsTouched(false)
    setEmailIsValid(false)

    setGender('')
    setGenderIsTouched(false)
    setGenderIsValid(false)

    setDateOfBirth('')
    setDateOfBirthIsTouched(false)
    setDateOfBirthIsValid(false)
  }
  const isFormValid = emailIsValid && genderIsValid && dateOfBirthIsValid

  return (
    <div className={styles.auth}>
      <h2>LOGIN</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            required
            className={emailIsTouched && !emailIsValid ? styles.invalid : ''}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">date of birth</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            onBlur={handleDateOfBirthBlur}
            className={
              dateOfBirthIsTouched && !dateOfBirthIsValid ? styles.invalid : ''
            }
            required
          />
        </div>
        <div>
          <label htmlFor="gender">gender</label>
          <select
            onChange={handleGenderChange}
            onBlur={handleGenderBlur}
            className={genderIsTouched && !genderIsValid ? styles.invalid : ''}
            required
          >
            <option selected={true} hidden={true} disabled={true}>
              Please select gender
            </option>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
            <option value="OTHER">OTHER</option>
          </select>
        </div>
        <br />
        <div className={styles.actions}>
          <button type="submit" disabled={!isFormValid}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}

// * How should payload look like:

//* const example = {
//*   email: 'radisa_ilic@pfc.com',
//*   date_of_birth: '2023-01-09T19:15:17.132+00:00',
//*   gender: 'MALE',
//* }
