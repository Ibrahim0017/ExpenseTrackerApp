import { useState } from 'react'

const omit = (key, obj) => {
    const { [key]: _, ...reset} = obj
    return reset
}

const useForm = () => {

    const [values, setValues] = useState()
    const [errors, setErrors] = useState()

    const validateValues = (name, value) =>{
        switch (name) {
            case 'fullName':
                if(value.length <= 3){
                    setErrors({...errors, [name]: 'Full Name should be more than three characters'})
                }else{
                    let newObj = omit('fullName', errors)
                    setErrors(newObj)
                }
                break;
                case 'password':
                    if(!/[0-9]/.test(value)){
                        setErrors({ ...errors, [name]: 'Password must contain a number'})
                    }else if(!RegExp(/[a-zA-Z]/).test(value)){
                        setErrors({...errors, [name]: 'Password must contain a letter'})
                    } else if(!RegExp(/[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]+/).test(value)){
                        setErrors({...errors, [name]: 'Password must contain a special character'})
                    }else{
                        let newObj = omit('password', errors)
                        setErrors(newObj)
                    }
                    break;
                case 'phoneNumber':
                    if(value.length != 11) {
                        setErrors({...errors, [name]: 'Incorrect phone number'})
                    } else{
                        let newObj = omit('phoneNumber', errors)
                        setErrors(newObj)
                    }
                    break;
                default: 
                break;
        }
    }

    const handleChange = (event) => {
        const {name, value } = event.target
        validateValues(name, value)
        setValues({
            ...values, [name]:value
        })
    }
  return {
    handleChange,
    values,
    errors
  }
}

export default useForm