import React from 'react'
import { Formik, Field, Form } from 'formik';
import styles from './login-form.module.css'


interface Values {
    password: string;
}

export default function ResetPassword() {
    return (
        
        <div className={styles.login_box + ' p-3'}>
        
            <h1 className="display-6 mb-3">Reset Password</h1>

            
            <Formik
              initialValues={{
                email: '',
            }}

               onSubmit={() => {

               }}
            >
               <Form>
               
                    <div className="mb-3">
                      <Field className="form-control" id="password" name="password" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Reset Password</button>

                 </Form>

             </Formik>
        

            
        </div>
    
    )
}