import { ReactElement, useContext } from 'react'
import { Layout, Typography, Dropdown, Menu } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined, MenuOutlined, LogoutOutlined } from '@ant-design/icons'
import { AuthContext } from '../AuthProvider/AuthProvider'

const { Header } = Layout

interface IItems {
    key: string
    label: ReactElement
}

function NavBar(): ReactElement {
    const navigate = useNavigate()
    const { userLogged, setUserLogged } = useContext(AuthContext)

    const onLogout = () => {
        setUserLogged(null)
        navigate(`/login`)
    }

    let items: IItems[] = [
        {
            key: '1',
            label: <a onClick={() => navigate(`/login`)}>Entre</a>,
        },
        {
            key: '2',
            label: <a onClick={() => navigate(`/register`)}>Cadastre-se</a>,
        },
    ]

    if (userLogged?.id) {
        items = [
            {
                key: '1',
                label: (
                    <span>
                        <UserOutlined style={{ marginRight: '10px' }} />
                        {userLogged.name}
                    </span>
                ),
            },
            {
                key: '2',
                label: (
                    <a
                        onClick={() =>
                            navigate(`/new-measure/${userLogged.id}`)
                        }
                    >
                        Nova medida
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a onClick={() => navigate(`/measure-history`)}>
                        Histórico de medidas
                    </a>
                ),
            },
            {
                key: '4',
                label: (
                    <a onClick={onLogout}>
                        <LogoutOutlined style={{ marginRight: '10px' }} />
                        Sair
                    </a>
                ),
            },
        ]
    }

    const menu = (
        <Menu
            style={{
                fontFamily: 'Quicksand',
            }}
            items={items}
        />
    )

    return (
        <Header
            style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <Link to={'/'}>
                <Typography
                    style={{
                        fontFamily: 'Quicksand',
                        fontSize: 40,
                    }}
                >
                    Mellitus
                </Typography>
            </Link>
            <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                    <MenuOutlined style={{ fontSize: 25, color: '#000' }} />
                </a>
            </Dropdown>
        </Header>
    )
}

export default NavBar
