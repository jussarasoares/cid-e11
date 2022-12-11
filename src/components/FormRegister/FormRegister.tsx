import { ReactElement } from 'react'
import { Button, Form, Input } from 'antd'
import 'antd/dist/antd.css'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import api from '../../services/api'

interface IFormInput {
    name: string
    email: string
    password: string
}

function FormRegister(): ReactElement {
    const { control, handleSubmit } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            await api.post('/user', data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Form onFinish={handleSubmit(onSubmit)}>
            <Form.Item label='Nome'>
                <Controller
                    name='name'
                    control={control}
                    render={({ field }) => (
                        <Input
                            placeholder='Digite seu nome completo'
                            {...field}
                        />
                    )}
                />
            </Form.Item>
            <Form.Item label='Email'>
                <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                        <Input
                            placeholder='Digite seu melhor email'
                            {...field}
                        />
                    )}
                />
            </Form.Item>
            <Form.Item label='Senha'>
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                        <Input placeholder='Digite uma senha' {...field} />
                    )}
                />
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
                <Button htmlType='submit' style={{ width: '50%' }}>
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormRegister
