import { ReactElement } from 'react'
import { Button, Form, Input, message } from 'antd'
import 'antd/dist/antd.css'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

interface IFormInput {
    name: string
    email: string
    password: string
}

function FormRegister(): ReactElement {
    const { control, handleSubmit } = useForm<IFormInput>()
    const [messageApi, contextHolder] = message.useMessage()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            await api.post('/register', data)
            messageApi.open({
                type: 'success',
                content: 'Usuário criado!',
            })
            setTimeout(() => {
                navigate(`/login`)
            }, 500)
        } catch (e) {
            messageApi.open({
                type: 'error',
                content: 'Não foi possível criar um usuário :(',
            })
        }
    }

    return (
        <Form onFinish={handleSubmit(onSubmit)} layout='vertical'>
            {contextHolder}
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
                        <Input.Password
                            placeholder='Digite uma senha'
                            {...field}
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeTwoTone />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                        />
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
