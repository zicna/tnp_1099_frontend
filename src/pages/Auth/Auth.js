import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../hooks/useInput'
import { UserContext } from '../../storeAndContext/UserProvider'
import styles from './auth.module.css'

// TODO: remove 'invalid' style from <select> on start
// TODO: refactor submiting into external function

export default function Auth() {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const {
    input: email,
    inputValid: emailValid,
    inputTouched: emailTouched,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    resetInput: restEmail,
  } = useInput()

  const {
    input: gender,
    inputValid: genderValid,
    inputTouched: genderTouched,
    handleInputChange: handleGenderChange,
    handleInputBlur: handleGenderBlur,
    resetInput: restGender,
  } = useInput()
  const {
    input: dateOfBirth,
    inputValid: dateOfBirthValid,
    inputTouched: dateOfBirthTouched,
    handleInputChange: handleDateOfBirthChange,
    handleInputBlur: handleDateOfBirthBlur,
    resetInput: restDateOfBirth,
  } = useInput()

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
    restEmail()
    restGender()
    restDateOfBirth()
  }
  const formValid = emailValid && genderValid && dateOfBirthValid

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
            className={emailTouched && !emailValid ? styles.invalid : ''}
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
              dateOfBirthTouched && !dateOfBirthValid ? styles.invalid : ''
            }
            required
          />
        </div>
        <div>
          <label htmlFor="gender">gender</label>
          <select
            onChange={handleGenderChange}
            onBlur={handleGenderBlur}
            className={genderTouched && !genderValid ? styles.invalid : ''}
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
          <button type="submit" disabled={!formValid}>
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
