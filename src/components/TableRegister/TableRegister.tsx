import { ReactElement } from 'react'
import { Button, Space, Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import TableEmptyState from '../TableEmptyState/TableEmptyState'

const { Column } = Table

interface IDataTable {
    id: string
    date: Date
    measure: object
    note: string
    userId: string
}

interface TableRegisterProps {
    data: IDataTable[]
    onDeleteMeasure: (id: string) => void
}

function TableRegister(props: TableRegisterProps): ReactElement {
    const navigate = useNavigate()

    return (
        <Table
            rowKey='id'
            dataSource={props.data}
            locale={{ emptyText: <TableEmptyState /> }}
            style={{ paddingTop: '30px' }}
        >
            <Column title='Data' dataIndex='date' key='date' />
            <Column title='Jejum' dataIndex={'fast'} key='fast' />
            <Column
                title='2h depois do café'
                dataIndex={['coffee']}
                key='coffee'
            />
            <Column
                title='2h depois do almoço'
                dataIndex={['lunch']}
                key='lunch'
            />
            <Column
                title='2h depois do jantar'
                dataIndex={['dinner']}
                key='dinner'
            />
            <Column title='Observações' dataIndex='note' key='note' />
            <Column
                key='action'
                render={(_: any, record: IDataTable) => (
                    <Space>
                        <Button
                            type='default'
                            shape='circle'
                            icon={<EditOutlined />}
                            onClick={() =>
                                navigate(
                                    `/measure-register/${record.userId}/${record.id}`
                                )
                            }
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
