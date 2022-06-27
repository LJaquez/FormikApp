import React from 'react';
import './App.css';
import { useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
      alert('Login Successful');
    },
    validate: values =>{
      let errors = {};
      if (!values.email) {
        errors.email = 'field required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.email
        )
      ) {
        errors.email = 'Username should be an email';
      }
      if(!values.password) errors.password = 'field required';
      if (errors != {}){
        return errors;
      }else {
        alert("Login Successful");
      }
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username:</div>
        <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} id='emailField'/>
        {formik.errors.email ? <div style={{color:'red'}} id='emailError'>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input type="text" name="password" onChange={formik.handleChange} value={formik.values.password}id='pswField'/><br/>
        {formik.errors.password ? <div style={{color:'red'}} id='pswError'>{formik.errors.password}</div> : null}                
        <button type="submit" id='submitBtn'> Submit</button>
      </form>      
    </div>
  );
}

export default App;
