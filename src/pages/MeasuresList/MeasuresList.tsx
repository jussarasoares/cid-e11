import { ReactElement, useEffect, useState } from 'react'
import { Layout, Typography, message } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import TableRegister from '../../components/TableRegister/TableRegister'
import api from '../../services/api'

interface DataTable {
    id: string
    date: Date
    measure: object
    note: string
}

function MeasuresList(): ReactElement {
    const [measure, setMeasure] = useState([])
    const [messageApi, contextHolder] = message.useMessage()

    const fetchMeasure = async () => {
        try {
            const { data } = await api.get('/user-measure/1')
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
                state.filter((data: DataTable) => {
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
            {contextHolder}
            <Content
                style={{
                    backgroundColor: '#ebf7eb',
                    padding: '50px',
                }}
            >
                <Typography.Title level={4} style={{ color: '#6a6d6b' }}>
                    Seu histórico de medições
                </Typography.Title>
                <TableRegister
                    data={measure}
                    onDeleteMeasure={onDeleteMeasure}
                />
            </Content>
        </Layout>
    )
}

export default MeasuresList
