import { ReactElement } from 'react'
import { Button, Input, Space, Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const { Column } = Table

interface DataTable {
    key: React.Key
    date: Date
    measure: object
    note: string
}

const data: DataTable[] = [
    {
        key: '1',
        date: new Date('12/12/2020'),
        measure: {
            fast: 100,
            coffee: 100,
            lunch: 100,
            dinner: 100,
        },
        note: 'bolo',
    },
    {
        key: '2',
        date: new Date('12/12/2020'),
        measure: {
            fast: 100,
            coffee: 100,
            lunch: 100,
            dinner: 100,
        },
        note: 'suco',
    },
    {
        key: '3',
        date: new Date('12/12/2020'),
        measure: {
            fast: 100,
            coffee: 100,
            lunch: 100,
            dinner: 100,
        },
        note: '',
    },
    {
        key: '4',
        date: new Date('12/12/2020'),
        measure: {
            fast: 100,
            coffee: 100,
            lunch: 100,
            dinner: 100,
        },
        note: 'refrigerante',
    },
]

function TableRegister(): ReactElement {
    return (
        <Table dataSource={data} style={{ paddingTop: '30px' }}>
            <Column title='Data' dataIndex='date' key='date' />
            <Column title='Jejum' dataIndex='fast' key='fast' />
            <Column title='2h depois do café' dataIndex='coffee' key='coffee' />
            <Column title='2h depois do almoço' dataIndex='lunch' key='lunch' />
            <Column
                title='2h depois do jantar'
                dataIndex='dinner'
                key='dinner'
            />
            <Column
                title='Observações'
                dataIndex='note'
                key='note'
                render={(_: any) => <Input style={{ border: 'none' }} />}
            />
            <Column
                key='action'
                render={(_: any, record: DataTable) => (
                    <Space>
                        <Button
                            type='default'
                            shape='circle'
                            icon={<EditOutlined />}
                        />
                        <Button
                            type='default'
                            shape='circle'
                            icon={<DeleteOutlined />}
                        />
                    </Space>
                )}
            />
        </Table>
    )
}

export default TableRegister
