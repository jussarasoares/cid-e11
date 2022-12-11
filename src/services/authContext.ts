import { createContext } from 'react'

export interface IAuthContext {
    id: number
    name: string
    email: string
}

export const AuthContext = createContext({} as IAuthContext)