import { ReactElement, useContext } from 'react'
import { Button, Form, Input, message } from 'antd'
import 'antd/dist/antd.css'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { AuthContext } from '../AuthProvider/AuthProvider'

interface IFormInput {
    name: string
    email: string
    password: string
}

function FormLogin(): ReactElement {
    const { control, handleSubmit } = useForm<IFormInput>()
    const [messageApi, contextHolder] = message.useMessage()
    const navigate = useNavigate()

    const { setUserLogged } = useContext(AuthContext)

    const onSubmit: SubmitHandler<IFormInput> = async (payload) => {
        try {
            const { data } = await api.post('/login', payload)
            setUserLogged(data.result)
            navigate(`/measure-history`)
        } catch (e) {
            console.log(e)
            messageApi.open({
                type: 'error',
                content: 'Não foi possível logar :(',
            })
        }
    }

    return (
        <Form onFinish={handleSubmit(onSubmit)} layout='vertical'>
            {contextHolder}
            <Form.Item label='Email'>
                <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                        <Input placeholder='Digite seu email' {...field} />
                    )}
                />
            </Form.Item>
            <Form.Item label='Senha'>
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                        <Input.Password
                            placeholder='Digite sua senha'
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
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormLogin
