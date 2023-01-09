import React from 'react'
import { Formik, Field, Form } from 'formik';
import styles from './login-form.module.css'


interface Values {
    confirmPassword: string;
    password: string;
}

export default function ChangePassword() {
    return (
        
        <div className={styles.login_box + ' p-3'}>
        
            <h1 className="display-6 mb-3">Change Password</h1>

            
            <Formik
              initialValues={{
                username: '',
                password: '',
            }}

               onSubmit={() => {

               }}
            >
               <Form>
               
                    <div className="mb-3">
                      <Field className="form-control" id="password" name="password" placeholder="Password" />
                    </div>
 
                    <div className="mb-3">
                      <Field className="form-control" id="password" name="confirmPassword" placeholder="Comfirm Password" type="password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                 </Form>

             </Formik>
        

            
        </div>
    
    )
}