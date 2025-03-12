import { useState, ChangeEvent, FormEvent } from "react"

interface Props<T> {
  (callback: (values: T) => void, initialState?: T): {
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onSubmit: (event: FormEvent) => void
    values: T
  }
}

export const useForm = <T extends Record<string, any>>(callback: (values: T) => void, initialState: T = {} as T) => {
  const [values, setValues] = useState<T>(initialState)

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    callback(values)
  }

  return { onChange, onSubmit, values }
}
