import { ReactElement, useEffect } from 'react'
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
import { useParams } from 'react-router-dom'
import moment from 'moment'
import api from '../../services/api'

const { Header, Content } = Layout

interface IFormInput {
    id?: string
    date: string
    fast: string
    coffee: string
    lunch: string
    dinner: string
    note: string
}

function MeasureRegister(): ReactElement {
    const {
        control,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm<IFormInput>()
    const { userId, id } = useParams()

    const fetchMeasure = async (id: string) => {
        try {
            const { data } = await api.get(`/measure/${id}`)
            reset(data.result)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (id) {
            fetchMeasure(id)
        }
    }, [id])

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            if (id) {
                await api.put(`/measure/edit/${id}`, data)
                return
            }
            await api.post(`/measure/${userId}`, data)
        } catch (e) {
            console.log(e)
        }
    }

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
                                        <DatePicker
                                            {...field}
                                            value={moment(field.value)}
                                            format='DD/MM/YYYY'
                                            allowClear={false}
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
                            <Form.Item label='Observações'>
                                <Controller
                                    name='note'
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder='Alguma observação?'
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
