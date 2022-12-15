import { ReactElement, useEffect } from 'react'
import {
    Button,
    Form,
    Input,
    InputNumber,
    Layout,
    Typography,
    DatePicker,
    message,
    Card,
} from 'antd'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import moment from 'moment'
import api from '../../services/api'
import NavBar from '../../components/NavBar/NavBar'

import imageRegister from '../../assets/cide4.jpg'

const { Content } = Layout

interface IFormInput {
    id?: string
    date: string
    fast: string
    coffee: string
    lunch: string
    dinner: string
    note: string
}

function NewMeasure(): ReactElement {
    const {
        control,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm<IFormInput>({
        defaultValues: { date: moment().toString() },
    })
    const { userId, id } = useParams()
    const [messageApi, contextHolder] = message.useMessage()
    const navigate = useNavigate()

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

    const onSubmit: SubmitHandler<IFormInput> = async (payload) => {
        try {
            if (id) {
                await api.put(`/measure/edit/${id}`, payload)
                messageApi.open({
                    type: 'success',
                    content: 'Editado com sucesso!',
                })
                setTimeout(() => {
                    navigate(`/measure-history`)
                }, 2500)
                return
            }
            await api.post(`/measure/${userId}`, payload)
            messageApi.open({
                type: 'success',
                content: 'Salvo com sucesso!',
            })
            setTimeout(() => {
                navigate(`/measure-history`)
            }, 2500)
        } catch (e) {
            messageApi.open({
                type: 'error',
                content: 'Não foi possível salvar os dados :(',
            })
        }
    }

    return (
        <Layout style={{ height: '100vh' }}>
            <NavBar />
            <Content
                style={{
                    backgroundImage: `url(${imageRegister})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.9',
                    padding: '50px 0',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {contextHolder}
                <Card>
                    <Typography.Title
                        level={4}
                        style={{
                            color: '#6a6d6b',
                            fontFamily: 'Quicksand',
                            marginBottom: '30px',
                            width: '600px',
                        }}
                    >
                        Registre suas medições de glicemia
                    </Typography.Title>
                    <Form onFinish={handleSubmit(onSubmit)} layout='vertical'>
                        <Form.Item label='Data'>
                            <Controller
                                name='date'
                                control={control}
                                render={({ field }) => (
                                    <DatePicker
                                        style={{
                                            width: '100%',
                                        }}
                                        {...field}
                                        value={moment(field.value)}
                                        format='DD/MM/YYYY'
                                        allowClear={false}
                                    />
                                )}
                            />
                        </Form.Item>
                        {/* <Row>
                            <Col span={11}> */}
                        <Form.Item label='Jejum'>
                            <Controller
                                name='fast'
                                control={control}
                                render={({ field }) => (
                                    <InputNumber
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder='Insira o valor do mg/dL'
                                        {...field}
                                    />
                                )}
                            />
                        </Form.Item>
                        {/* </Col>
                            <Col span={11} offset={2}> */}
                        <Form.Item label='2h depois do café'>
                            <Controller
                                name='coffee'
                                control={control}
                                render={({ field }) => (
                                    <InputNumber
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder='Insira o valor do mg/dL'
                                        {...field}
                                    />
                                )}
                            />
                        </Form.Item>
                        {/* </Col>
                        </Row> */}
                        {/* <Row>
                            <Col span={11}> */}
                        <Form.Item label='2h depois do almoço'>
                            <Controller
                                name='lunch'
                                control={control}
                                render={({ field }) => (
                                    <InputNumber
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder='Insira o valor do mg/dL'
                                        {...field}
                                    />
                                )}
                            />
                        </Form.Item>
                        {/* </Col>
                            <Col span={11} offset={2}> */}
                        <Form.Item label='2h depois do jantar'>
                            <Controller
                                name='dinner'
                                control={control}
                                render={({ field }) => (
                                    <InputNumber
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder='Insira o valor do mg/dL'
                                        {...field}
                                    />
                                )}
                            />
                        </Form.Item>
                        {/* </Col>
                        </Row> */}
                        <Form.Item label='Observações'>
                            <Controller
                                name='note'
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder='Alguma observação?'
                                        {...field}
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
                </Card>
            </Content>
        </Layout>
    )
}

export default NewMeasure
