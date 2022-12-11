import { ReactElement } from 'react'
import { Layout, Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import imageFruit from '../../assets/cide11.jpg'
import NavBar from '../../components/NavBar/NavBar'

const { Content } = Layout

function Home(): ReactElement {
    const navigate = useNavigate()

    return (
        <Layout
            style={{
                height: '100vh',
                backgroundImage: `url(${imageFruit})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <NavBar />
            <Content
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    style={{
                        fontFamily: 'Quicksand',
                        fontSize: 60,
                        textShadow: '2px 2px 2px #ADD8E6',
                        color: 'white',
                        marginBottom: '40px',
                    }}
                >
                    Controle a diabetes de um jeito fácil
                </Typography>
                <Button
                    ghost
                    size='large'
                    style={{
                        alignSelf: 'center',
                        width: '300px',
                        boxShadow: '2px 2px 2px #ADD8E6',
                    }}
                    onClick={() => navigate(`/main`)}
                >
                    Saiba mais
                </Button>
            </Content>
        </Layout>
    )
}

export default Home
