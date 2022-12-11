import { ReactElement } from 'react'
import { Layout, Row, Col, Typography, Card } from 'antd'

import imageMellitus from '../../assets/cide2.jpg'
import NavBar from '../../components/NavBar/NavBar'
import FormLogin from '../../components/FormLogin/FormLogin'

const { Content } = Layout

function Login(): ReactElement {
    return (
        <Layout>
            <NavBar />
            <Row>
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
                                        }}
                                    >
                                        Entre
                                    </Typography.Title>
                                    <FormLogin />
                                </Card>
                            </Col>
                        </Row>
                    </Content>
                </Col>
                <Col
                    span={12}
                    style={{
                        height: 'calc(100vh - 64px)',
                        backgroundImage: `url(${imageMellitus})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></Col>
            </Row>
        </Layout>
    )
}

export default Login
