import { ReactElement } from 'react'
import { Layout, Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import TableRegister from '../../components/TableRegister/TableRegister'

function DataRegister(): ReactElement {
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
                <TableRegister />
            </Content>
        </Layout>
    )
}

export default DataRegister
