import { ReactElement } from 'react'
import { Layout, Row, Col, Typography, Image } from 'antd'
import { Link } from 'react-router-dom'
import FormRegister from '../../components/FormRegister/FormRegister'

import imageFruit from '../../assets/mellitus.png'

const { Header, Content, Footer } = Layout

function Login(): ReactElement {
    return (
        <Layout style={{ height: '100vh' }}>
            <Header style={{ backgroundColor: '#e4e7e4' }}>
                <Typography.Title
                    style={{
                        fontFamily: 'Quicksand',
                        fontSize: 40,
                    }}
                >
                    Mellitus
                </Typography.Title>
            </Header>
            <Row>
                <Col span={12}>
                    <Image src={imageFruit} width={'100%'} preview={false} />
                </Col>
                <Col span={12}>
                    <Content
                        style={{
                            backgroundColor: '#ebf7eb',
                            paddingTop: '50px',
                        }}
                    >
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
                </Col>
            </Row>

            <Footer style={{ backgroundColor: '#eef5ee' }}>
                <Link to={'/data-register'}>
                    <Typography.Title level={4} style={{ color: '#6a6d6b' }}>
                        Acesse seu histórico
                    </Typography.Title>
                </Link>
                <Link to={'/measure-register/1'}>
                    <Typography.Title level={4} style={{ color: '#6a6d6b' }}>
                        Cadastre suas medidas
                    </Typography.Title>
                </Link>
            </Footer>
        </Layout>
    )
}

export default Login
