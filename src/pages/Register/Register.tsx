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
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20vh',
                        }}
                    >
                        <Card
                            bordered={false}
                            style={{ width: '400px', height: '400px' }}
                        >
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
                    </Content>
                </Col>
            </Row>
        </Layout>
    )
}

export default Register
