import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
const Navigate=useNavigate();

    const [username, setuser] = useState('');
    const [email, setemail] = useState('');
    const [password, setpass] = useState('');

    const formsubmit = async () => {

        alert('hello')
        const data = { username, email, password };

        try {
            const response = await axios.post('http://localhost:4002/users/signup', data);
            if (response !== 'User already Exists') {
                alert('User Signedup Successfully');
                setemail(''); setpass(''); setuser('');

                Navigate('/login')
            }
        } catch (error) {
            console.error('Error signing up:', error.response.data);
            if (error.response.data.message === 'User already Exists') {
                alert('User already Exists')
            }
            // Handle error (e.g., display error message to user)
        }
    }
    return (
        <>
            {/* <!--start breadcrumb--> */}
            <div class="py-4 border-bottom">
                <div class="container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item active" aria-current="page">Register</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!--end breadcrumb--> */}


            {/* <!--start product details--> */}
            <section class="section-padding">
                <div class="container">

                    <div class="row">
                        <h4 class="mb-3 fw-bold text-center">Registration</h4>
                        <br />
                        <div class="col-12 col-lg-6 col-xl-5 col-xxl-5 mx-auto">

                            <div class="card rounded-0">
                                <div class="card-body p-4">


                                    <form>
                                        <div class="row g-4">


                                            <div class="col-12 text-start">
                                                <label for="exampleEmail" class="form-label">UserName</label>
                                                <input onChange={(e) => { setuser(e.target.value) }} type="text" class="form-control rounded-0" id="exampleEmail" />
                                            </div>
                                            <div class="col-12 text-start">
                                                <label for="exampleEmail" class="form-label">Email ID</label>
                                                <input onChange={(e) => { setemail(e.target.value) }} type="text" class="form-control rounded-0" id="exampleEmail" />
                                            </div>
                                            <div class="col-12 text-start">
                                                <label for="examplePassword" class="form-label">Password</label>
                                                <input onChange={(e) => { setpass(e.target.value) }} type="text" class="form-control rounded-0" id="examplePassword" />
                                            </div>


                                            <div class="col-6 mx-auto">
                                                <button type="button" onClick={formsubmit} class="btn btn-dark rounded-5 btn-ecomm w-100">Sign Up</button>
                                            </div>
                                            <div class="col-12 text-center">
                                                <p class="mb-0 rounded-0 w-100">Already have an account? <NavLink to='/login' class="text-danger">Sign In</NavLink></p>
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

export default SignUp
