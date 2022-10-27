import { ReactElement } from 'react'
import FormRegister from '../../components/Form/Form'
import { Layout, Row, Col, Typography } from 'antd'
import { Link } from 'react-router-dom'

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
                    <Col span={8} offset={2}>
                        <Typography.Title
                            level={4}
                            style={{ color: '#6a6d6b' }}
                        >
                            Comece seu registro de glicemia
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
            </Footer>
        </Layout>
    )
}

export default Main