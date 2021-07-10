import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'
import logincontexts from './Logincontext'

export default function Login() {
    const styles={
        width:"600px"
    }
     const context = useContext(logincontexts)
    const history = useHistory()
    let change =()=>{
        
        context.log()
        history.push('/')
    }
    return (
        <div style={styles} className="container-sm bg-primary mt-5 shadow-lg p-3 mb-5 rounded"><br />
            <h2 className="d-flex justify-content-center">Login</h2><br />
            <form className="mr-5 ml-5 ">
                <div className="form-group mr-5 ml-5 d-flex justify-content-center">
                    <label className="text-white mr-2" htmlFor="">Username</label>
                    <input className="form-control" type="text" name="username" id="username"  />
                </div>
                <div className="form-groups mr-5 ml-5 d-flex justify-content-center">
                    <label className="text-white mr-2" htmlFor="">Password</label>
                    <input className="form-control" type="password" name="password" id="password" />
                </div><br />
                <div className="d-flex justify-content-center">
                    <button onClick={change} className="btn btn-dark" type="button">Login</button>
                </div><br />
            </form>
        </div>
        
    )
}
