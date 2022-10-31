import { ReactElement, useEffect, useState } from 'react'
import { Layout, Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import TableRegister from '../../components/TableRegister/TableRegister'
import api from '../../services/api'

interface DataTable {
    id: string
    date: Date
    measure: object
    note: string
}

function DataRegister(): ReactElement {
    const [measure, setMeasure] = useState([])

    const fetchMeasure = async () => {
        try {
            const { data } = await api.get('/measure/1')
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
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Layout style={{ height: '100vh' }}>
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

export default DataRegister
