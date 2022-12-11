import { ReactElement } from 'react'
import { Layout, Row, Col, Typography, Card } from 'antd'

import imageMellitus from '../../assets/cide3.jpg'
import NavBar from '../../components/NavBar/NavBar'
import FormRegister from '../../components/FormRegister/FormRegister'

const { Content } = Layout

function Register(): ReactElement {
    return (
        <Layout>
            <NavBar />
            <Row>
                <Col
                    span={12}
                    style={{
                        height: 'calc(100vh - 64px)',
                        backgroundImage: `url(${imageMellitus})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></Col>
                <Col span={12}>
                    <Content
                        style={{
                            backgroundColor: '#ebf7eb',
                            paddingTop: '50px',
                        }}
                    >
                        <Row>
                            <Col
                                span={10}
                                offset={2}
                                style={{ justifyItems: 'center' }}
                            >
                                <Card bordered={false}>
                                    <Typography.Title
                                        level={4}
                                        style={{
                                            color: '#6a6d6b',
                                            fontFamily: 'Quicksand',
                                            marginBottom: '30px',
                                        }}
                                    >
                                        Cadastre-se
                                    </Typography.Title>
                                    <FormRegister />
                                </Card>
                            </Col>
                        </Row>
                    </Content>
                </Col>
            </Row>
        </Layout>
    )
}

export default Register
