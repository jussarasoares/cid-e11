import { ReactElement, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Layout,
    Typography,
    message,
    Col,
    Row,
    Button,
    Input,
    Card,
} from 'antd'
import { Content } from 'antd/lib/layout/layout'
import TableRegister from '../../components/TableRegister/TableRegister'
import api from '../../services/api'
import NavBar from '../../components/NavBar/NavBar'
import { AuthContext } from '../../components/AuthProvider/AuthProvider'

import imageRegister from '../../assets/cide4.jpg'

const { Search } = Input

interface IDataTable {
    id: string
    date: Date
    measure: object
    note: string
}

function MeasureHistory(): ReactElement {
    const [measure, setMeasure] = useState([])
    const [messageApi, contextHolder] = message.useMessage()
    const navigate = useNavigate()

    const { userLogged } = useContext(AuthContext)

    const fetchMeasure = async () => {
        try {
            const { data } = await api.get(`/user-measure/${userLogged?.id}`)
            setMeasure(data.result)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchMeasure()
    }, [])

    const onDeleteMeasure = async (id: string) => {
        try {
            await api.delete(`/measure/${id}`)
            setMeasure((state) =>
                state.filter((data: IDataTable) => {
                    return data.id !== id
                })
            )
            messageApi.open({
                type: 'success',
                content: 'Excluído com sucesso!',
            })
        } catch (e) {
            messageApi.open({
                type: 'error',
                content: 'Não foi possível excluir os dados :(',
            })
        }
    }

    return (
        <Layout style={{ height: '100vh' }}>
            <NavBar />
            {contextHolder}
            <Content
                style={{
                    height: '100%',
                    backgroundImage: `url(${imageRegister})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.9',
                }}
            >
                <Card style={{ margin: '5vw' }}>
                    <Row>
                        <Col span={8}>
                            <Typography.Title
                                level={4}
                                style={{
                                    fontFamily: 'Quicksand',
                                    fontSize: 20,
                                }}
                            >
                                Seu histórico de medições
                            </Typography.Title>
                        </Col>
                        <Col
                            span={6}
                            offset={10}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <Search placeholder='Buscar' />
                            <Button
                                ghost
                                onClick={() =>
                                    navigate(`/new-measure/${userLogged?.id}`)
                                }
                                style={{
                                    marginLeft: '20px',
                                    color: 'grey',
                                    borderColor: 'grey',
                                }}
                            >
                                Nova medida
                            </Button>
                        </Col>
                    </Row>
                    <TableRegister
                        data={measure}
                        onDeleteMeasure={onDeleteMeasure}
                    />
                </Card>
            </Content>
        </Layout>
    )
}

export default MeasureHistory
