import React from 'react'
import styles from './login-form.module.css'


export default function ResetPassword() {
    return (
        
        <div className={styles.login_box + ' p-3'}>
        
            <h1 className="display-6 mb-3">Reset Password</h1>

                <form>
               
                    <div className="mb-3">
                      <input className="form-control" id="password" name="oldpassword" placeholder="oldPassword" type="password" />
                    </div>

                    <div className="mb-3">
                      <input className="form-control" id="password" name="newpassword" placeholder="newPassword" type="password" />
                    </div>

                    <div className="mb-3">
                      <input className="form-control" id="password" name="confirmNewpassword" placeholder="confirmNewPassword" type="password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Reset Password</button>

                 </form>
            
        </div>
    
    )
}