import { ReactElement } from 'react'
import { Button, Space, Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const { Column } = Table

interface DataTable {
    id: string
    date: Date
    measure: object
    note: string
}

interface TableRegisterProps {
    data: DataTable[]
    onDeleteMeasure: (id: string) => void
}

function TableRegister(props: TableRegisterProps): ReactElement {
    return (
        <Table
            rowKey='id'
            dataSource={props.data}
            style={{ paddingTop: '30px' }}
        >
            <Column title='Data' dataIndex='date' key='date' />
            <Column title='Jejum' dataIndex={['measure', 'fast']} key='fast' />
            <Column
                title='2h depois do café'
                dataIndex={['measure', 'coffee']}
                key='coffee'
            />
            <Column
                title='2h depois do almoço'
                dataIndex={['measure', 'lunch']}
                key='lunch'
            />
            <Column
                title='2h depois do jantar'
                dataIndex={['measure', 'dinner']}
                key='dinner'
            />
            <Column title='Observações' dataIndex='note' key='note' />
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
                            onClick={() => props.onDeleteMeasure(record.id)}
                        />
                    </Space>
                )}
            />
        </Table>
    )
}

export default TableRegister
