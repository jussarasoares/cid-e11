import { ReactElement } from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import { Link } from 'react-router-dom'
import FormRegister from '../../components/FormRegister/FormRegister'

const { Header, Content, Footer } = Layout

function Main(): ReactElement {
    return (
        <Layout style={{ height: '100vh' }}>
            <Header style={{ backgroundColor: '#c2f1c2' }}>
                <Typography.Title
                    level={2}
                    style={{ color: '#6a6d6b', marginTop: '10px' }}
                >
                    Mellitus
                </Typography.Title>
            </Header>
            <Content style={{ backgroundColor: '#ebf7eb', paddingTop: '50px' }}>
                <Row>
                    <Col span={8} offset={2}>
                        <Typography.Title
                            level={4}
                            style={{ color: '#6a6d6b' }}
                        >
                            Crie sua conta
                        </Typography.Title>
                        <FormRegister />
                    </Col>
                </Row>
            </Content>
            <Footer style={{ backgroundColor: '#eef5ee' }}>
                <Link to={'/data-register'}>
                    <Typography.Title level={4} style={{ color: '#6a6d6b' }}>
                        Acesse seu histórico
                    </Typography.Title>
                </Link>
                <Link to={'/measure-register'}>
                    <Typography.Title level={4} style={{ color: '#6a6d6b' }}>
                        Cadastre suas medidas
                    </Typography.Title>
                </Link>
            </Footer>
        </Layout>
    )
}

export default Main
