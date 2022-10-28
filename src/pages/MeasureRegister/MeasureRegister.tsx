import { ReactElement } from 'react'
import { Button, Form, Input, Layout, Row, Col, Typography } from 'antd'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

const { Header, Content } = Layout

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
        <Layout style={{ height: '100vh' }}>
            <Header style={{ backgroundColor: '#c2f1c2' }}>
                <Typography.Title
                    level={2}
                    style={{ color: '#6a6d6b', marginTop: '10px' }}
                >
                    Mellitus
                </Typography.Title>
            </Header>
            <Content style={{ backgroundColor: '#ebf7eb', paddingTop: '50px' }}>
                <Row>
                    <Col span={8} offset={2}>
                        <Typography.Title
                            level={4}
                            style={{ color: '#6a6d6b' }}
                        >
                            Registre suas medidas
                        </Typography.Title>
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
                                        <Input
                                            placeholder='Digite uma senha'
                                            {...field}
                                        />
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
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default MeasureRegister
