import React from 'react'
import styles from './login-form.module.css'



export default function LoginForm() {
    return (
        
        <div className={styles.login_box + ' p-3'}>
           <h1 className="display-6 mb-3">Login</h1>
       
       
          <form>
            <div className="mb-3">
              <input className="form-control" id="username" name="username" placeholder="Username"  type="text"/>
            </div>
  
            <div className="mb-3">
              <input className="form-control" id="password" name="password" placeholder="Password" type="password" />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </form>

      
        </div>
    )
}


