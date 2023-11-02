import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <body className="hold-transition login-page">
    <div className="login-box">
  <div className="login-logo">
    <Link to="/dasboar"><b>iniciar</b>sesion</Link>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">ingrese sus datos para iniciar sesion</p>
      <form >
        <div className="input-group mb-3">
          <input type="email" 
             className="form-control" 
             placeholder="Email" 
             id="Email"
             name='Email'
             
             />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" 
          className="form-control" 
          placeholder="Password" 
          id="password"
          name='password'
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          </div>
     
      <div className="social-auth-links text-center mb-3">
       
        <button to="/dasboar" className="btn btn-block btn-primary">
          <i className="fa fa-key fa-1x" />  
        </button>
        <button to="#" className="btn btn-block btn-danger">
          <i className="fa fa-book fa-1x" /> crear cuenta 
        </button>
      </div>
      </form>
     
    </div>
  </div>
</div>
</body>
   
  )
}

export default Login

