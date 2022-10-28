import { ReactElement } from 'react'
import { Button, Form, Input } from 'antd'
import 'antd/dist/antd.css'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

interface IFormInput {
    name: string
    email: string
    password: string
}

function MeasureRegister(): ReactElement {
    const {
        control,
        handleSubmit,
        // formState: { errors },
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

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
            <Form.Item>
                <Button
                    type='primary'
                    htmlType='submit'
                    style={{ backgroundColor: '' }}
                >
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    )
}

export default MeasureRegister
