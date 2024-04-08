import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpass] =useState('');

  const loginform=async()=>{

    const data={email,password};

    try {
      const response=await axios.post('http://localhost:4002/users/signin',data);
      console.log(response)
      alert('signin successfully')
      setemail('');setpass('');
    } catch (error) {
      // Handle errors
      if (error.response) {
        if (error.response.status === 404) {
          alert('User not found!');
        } else if (error.response.status === 400) {
          alert('Password did not match!');
        }
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  }
  return (
    <>

      {/* <!--start breadcrumb--> */}
      <div class="py-4 border-bottom">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              {/* <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Authentication</a></li> */}
              <li class="breadcrumb-item active" aria-current="page">Login</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!--end breadcrumb--> */}


      {/* <!--start product details--> */}
      <section class="section-padding">
        <div class="container">

          <div class="row">
            <h4 class="mb-3 fw-bold text-center">User Login</h4>

            <div class="col-12 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
              <div class="card rounded-0">
                <div class="card-body p-4">

                  <form>
                    <div class="row g-4">
                      <div class="col-12 text-start">
                        <label for="exampleUsername" class="form-label">Email</label>
                        <input onChange={(e) => (setemail(e.target.value))} type="text" class="form-control rounded-0" id="exampleUsername" />
                      </div>
                      <div class="col-12 text-start">
                        <label for="examplePassword" class="form-label">Password</label>
                        <input onChange={(e) => (setpass(e.target.value))} type="text" class="form-control rounded-0" id="examplePassword" />
                      </div>
                      {/* <div class="col-12">
                        <a href="javascript:;" class="text-content btn bg-light rounded-0 w-100"><i class="bi bi-lock me-2"></i>Forgot Password</a>
                      </div> */}
                      <div class="col-12">
                        <hr class="my-0" />
                      </div>
                      <div class="col-6 mx-auto">
                        <button onClick={loginform} type="button" class="btn btn-dark rounded-5 btn-ecomm w-100">Login</button>
                      </div>
                      <div class="col-12 text-center">
                        <p class="mb-0 rounded-0 w-100">Don't have an account? <NavLink to='/register' class="text-danger">Sign Up</NavLink></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!--start product details--> */}

    </>
  )
}

export default Login
