import React from 'react'
import styles from './login-form.module.css'



export default function ChangePassword() {
    return (
        
        <div className={styles.login_box + ' p-3'}>
        
            <h1 className="display-6 mb-3">Change Password</h1>

            
               <form>
               
                    <div className="mb-3">
                      <input className="form-control" type="password" id="password" name="password" placeholder="Password" />
                    </div>
 
                    <div className="mb-3">
                      <input className="form-control" type="password" id="password" name="confirmPassword" placeholder="Comfirm Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                 </form>

    
        

            
        </div>
    
    )
}