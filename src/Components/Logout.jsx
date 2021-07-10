import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import logincontexts from './Logincontext'

export default function Logout() {
   const context = useContext(logincontexts)
    const history = useHistory()
     context.log()
    history.push('/')
    return (
        <div>
            
        </div>
    )
}
