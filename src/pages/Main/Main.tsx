import { ReactElement } from 'react'
import FormRegister from '../../components/Form/Form'
import { Layout, Row, Col, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout

function Main(): ReactElement {
    return (
        <Layout style={{ height: '100vh' }}>
            <Header style={{ backgroundColor: '#98FB98' }}>
                <Typography.Title
                    level={2}
                    style={{ color: '#A9A9A9', marginTop: '10px' }}
                >
                    Mellitus
                </Typography.Title>
            </Header>
            <Content style={{ backgroundColor: '#FFFFFF', paddingTop: '50px' }}>
                <Row>
                    <Col span={12} offset={6}>
                        <Typography.Title level={4}>
                            Crie sua conta
                        </Typography.Title>
                        <FormRegister />
                    </Col>
                </Row>
            </Content>
            <Footer style={{ backgroundColor: '#98FB98' }}>
                <Link to={'/data-register'}>
                    <Typography.Title level={4}>
                        Comece agora mesmo
                    </Typography.Title>
                </Link>
            </Footer>
        </Layout>
    )
}

export default Main
