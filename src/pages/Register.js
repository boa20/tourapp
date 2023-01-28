

const Register = () => {
    return (
        <div className="container">
          <div className="row d-flex justify-content-center p-5">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label for="userName" className="form-label"> Username</label>
                  <input type="text" className="form-control" id="userName" placeholder="Enter a user name"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email"/>
                </div>
                <div className="mb-3">
                  <label for="passphrase" className="form-label">Password</label>
                  <input type="password" className="form-control" id="passphrase" placeholder="Enter a password"/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>  
          </div>
        </div>
    )
}

export default Register;