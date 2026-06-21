import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {validationSchema} from './validationSchema'
import { useEffect, useRef } from "react"

const RegistrationForm = () => {
  const { register, handleSubmit, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }, 
    mode: 'onTouched'
  })

  const onSubmit = ({email, password}) => {
    console.log({email, password})
  }
  const submitButtonRef = useRef(null);

  useEffect(() => {
    if (isValid) submitButtonRef.current.focus()
  }, [isValid])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('email')} placeholder="email" type="email"/>
        {errors?.email && <p style={{color: 'red'}}>{errors?.email.message}</p>}
      </div>
      <div>
        <input {...register('password')} placeholder="password" type="password"/>
        {errors?.password && <p style={{color: 'red'}}>{errors?.password.message}</p>}
      </div>
      <div>
        <input {...register('confirmPassword')} placeholder="password" type="password"/>
        {errors?.confirmPassword && <p style={{color: 'red'}}>{errors?.confirmPassword.message}</p>}
      </div>
      <button type="submit" disabled={!isValid} ref={submitButtonRef}>
        Зарегистрироваться
      </button>
    </form>
  )
}

export default RegistrationForm