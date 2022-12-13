import { ReactElement } from 'react'
import { Layout, Typography } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

function TableEmptyState(): ReactElement {
    return (
        <Layout
            style={{
                backgroundColor: 'transparent',
                minHeight: 300,
                color: '#bdbdbd',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <InboxOutlined style={{ fontSize: 60 }} />
            <Typography
                style={{
                    color: '#9b9c9b',
                    fontFamily: 'Quicksand',
                    marginTop: '20px',
                    fontSize: 20,
                }}
            >
                Ainda não há registros
            </Typography>
        </Layout>
    )
}

export default TableEmptyState
