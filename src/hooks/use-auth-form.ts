import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

export const useAuthForm = () => {
  const schema = toTypedSchema(
    yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    })
  )

  const formOptions = {
    validationSchema: schema,
    initialValues: { email: '', password: '' },
    initialErrors: { email: 'email is a required field', password: 'password is a required field' },
  }

  const { values: body, errors, defineField } = useForm(formOptions)

  const [emailValue, emailProps] = defineField('email')
  const [passwordValue, passwordProps] = defineField('password')

  return { body, errors, emailValue, emailProps, passwordValue, passwordProps }
}
