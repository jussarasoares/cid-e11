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
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20vh',
                            height: '100%',
                        }}
                    >
                        <Card
                            bordered={false}
                            style={{ width: '400px', height: '300px' }}
                        >
                            <Typography.Title
                                level={4}
                                style={{
                                    color: '#6a6d6b',
                                    fontFamily: 'Quicksand',
                                    marginBottom: '30px',
                                }}
                            >
                                Entre
                            </Typography.Title>
                            <FormLogin />
                        </Card>
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
