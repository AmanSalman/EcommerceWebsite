import * as yup from 'yup';

export const registerSchema = yup.object ({
    userName:yup.string().required("Username is required").min(3,"must at least 3 char").max(30,"max is 30 char"),
    email: yup.string().required('email is required').email(),
    password: yup.string().required('password is required').min(3,"must at least 3 char").max(30,"max is 30 char")
})


export const LoginSchema = yup.object ({
    email: yup.string().required('email is required').email(),
    password: yup.string().required('password is required').min(3,"must at least 3 char").max(30,"max is 30 char")
})

export const CodeSchema = yup.object ({
    email: yup.string().required('email is required').email(),
})


export const restSchema = yup.object ({
    
    email: yup.string().required('email is required').email(),
    password: yup.string().required('password is required').min(3,"must at least 3 char").max(30,"max is 30 char"),
    code:yup.string().required("code is required").length(4,"4 char")
})

export const OrderSchema = yup.object ({
    couponName:yup.string().length(5,"5 char"),
    address: yup.string().required('address is required').min(3,"3 char"),
    phone: yup.string().required('phone is required').length(10,"10 char"),
    
})