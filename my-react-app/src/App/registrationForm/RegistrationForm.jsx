import { useState, useRef, useEffect } from "react"
import style from './RegistrationForm.module.css'

const sendFormData = (formData) => {
  console.log({ email: formData.email, password: formData.password })
}

const defaultState = {
  email: '',
  password: '',
  confirmPassword: '',
}

const RegistrationForm = () => {
  const [registrationForm, setRegistrationForm] = useState(defaultState)
  const [inputError, setInputError] = useState('')

  const submitButtonRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault()
    sendFormData({ registrationForm: email, })
    setRegistrationForm(defaultState)
  }

  const { email, password, confirmPassword } = registrationForm

  // const onInputChange = ({ target }) => {
  //   setRegistrationForm({ ...registrationForm, [target.name]: target.value })

  //   let newError = null
  //   if (!/^[\w_]*$/.test(target.value)) {
  //     newError = 'Допустимые символы: буквы, цифры и нижнее подчёркивание'
  //   }

  //   setInputError(newError)
  // }

  const onEmailChange = ({ target }) => {
    setRegistrationForm({ ...registrationForm, [target.name]: target.value })

    let newError = null
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(target.value)) {
      newError = 'Недопустимый email'
    }

    setInputError(newError)
  }

  const onPasswordChange = ({ target }) => {
    setRegistrationForm({ ...registrationForm, [target.name]: target.value })
  }

  const checkValidatePassword = ({ target }) => {
    let newError = null
    if (!/^[a-z0-9]{4,8}$/.test(target.value)) newError = 'Недопустимый пароль'
    setInputError(newError)
  }

  const checkConfirmPassword = ({ target }) => {
    let newError = null
    if (target.value != password) newError = 'Пароли не совпадают'
    setInputError(newError)
  }

  useEffect(() => {
    if (inputError && confirmPassword) submitButtonRef.current.focus()
  })

  return (
    <div className={style.container}>
      {inputError && <div className={style.errorMassage}>{inputError}</div>}
      <form onSubmit={onSubmit} className={style.form}>
        <input
          className={style.inputForm}
          key='1'
          name='email'
          type='email'
          placeholder='Почта'
          value={email}
          // onChange={({target}) => setRegistrationForm({...registrationForm, email: target.value})}
          onChange={onEmailChange}
        />
        <input
          className={style.inputForm}
          key='2'
          name='password'
          type='password'
          placeholder='Пароль'
          value={password}
          onChange={onPasswordChange}
          onBlur={(target) => checkValidatePassword(target)}
        />
        <input
          className={style.inputForm}
          key='3'
          name='confirmPassword'
          type='password'
          placeholder='Повторить пароль'
          value={confirmPassword}
          onChange={onPasswordChange}
          onBlur={(target) => checkConfirmPassword(target)}
        />
        <button
          type='submit'
          disabled={!!inputError}
          ref={submitButtonRef}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm