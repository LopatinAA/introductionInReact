import * as yup from 'yup'

export const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required('Это поле обязательно для заполнения')
        .email('Введите корректный email'),

    password: yup
        .string()
        .required('Это поле обязательно для заполнения')
        .min(4, 'Пароль должен содержать минимум 4 символа')
        .matches(/[A-Z]/, 'Пароль должен содержать хотля бы одну заглавную букву')
        .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну прописную букву')
        .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),

    confirmPassword: yup
        .string()
        .required('Повторите пароль')
        .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
})
