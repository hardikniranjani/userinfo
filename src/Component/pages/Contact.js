import React from 'react'

function Contact() {
    return (
        <div className="container">
            <div className="py-4">
                <form style={{backgroundColor:'white', padding:'40px', boxShadow:'1px 6px 10px lightgray', borderRadius:'20px'}}>
                    <h2 style={{marginBottom:'40px',marignTop:'-40px'}}>ContactUs</h2>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label" >Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{backgroundColor:'#fafafa'}} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" style={{backgroundColor:'#fafafa'}} />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
