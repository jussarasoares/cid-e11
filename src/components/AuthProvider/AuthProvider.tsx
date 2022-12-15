import { createContext, ReactElement, useEffect, useState } from 'react'

export interface IAuthContext {
    userLogged: IUserLogged | null
    setUserLogged: (value: IUserLogged | null) => void
}

export interface IUserLogged {
    id: number
    name: string
    email: string
}

export const AuthContext = createContext({} as IAuthContext)

interface AuthProviderProps {
    children: ReactElement
}

const AuthProvider = ({ children }: AuthProviderProps): ReactElement => {
    let user = null
    const auxUser = localStorage.getItem('userLogged')
    if (auxUser) {
        user = JSON.parse(auxUser) as IUserLogged
    }
    const [userLogged, setUserLogged] = useState<IUserLogged | null>(user)

    useEffect(() => {
        if (userLogged) {
            localStorage.setItem('userLogged', JSON.stringify(userLogged))
        } else {
            localStorage.removeItem('userLogged')
        }
    }, [userLogged])

    return (
        <AuthContext.Provider value={{ userLogged, setUserLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
