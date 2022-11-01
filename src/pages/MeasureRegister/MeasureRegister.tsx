import { ReactElement } from 'react'
import {
    Button,
    Form,
    Input,
    Layout,
    Row,
    Col,
    Typography,
    DatePicker,
} from 'antd'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

const { Header, Content } = Layout

interface IFormInput {
    date: string
    measure: string
    note: string
    fast: string
    coffee: string
    lunch: string
    dinner: string
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
            <Header style={{ backgroundColor: '#c2f1c2' }} />
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
                            <Form.Item label='Data'>
                                <Controller
                                    name='date'
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder='Digite a data do dia que você mediu'
                                            {...field}
                                        />
                                    )}
                                />
                            </Form.Item>
                            <Form.Item label='Jejum'>
                                <Controller
                                    name='fast'
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder='Insira o valor do mg/dL'
                                            {...field}
                                        />
                                    )}
                                />
                            </Form.Item>
                            <Form.Item label='2h depois do café'>
                                <Controller
                                    name='coffee'
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder='Insira o valor do mg/dL'
                                            {...field}
                                        />
                                    )}
                                />
                            </Form.Item>
                            <Form.Item label='2h depois do almoço'>
                                <Controller
                                    name='lunch'
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder='Insira o valor do mg/dL'
                                            {...field}
                                        />
                                    )}
                                />
                            </Form.Item>
                            <Form.Item label='2h depois do jantar'>
                                <Controller
                                    name='dinner'
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder='Insira o valor do mg/dL'
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
