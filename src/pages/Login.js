

const Login = () => {
    return (
        <div className="container">
          <div className="row d-flex justify-content-center p-5">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label for="userName" className="form-label">Username</label>
                  <input type="text" className="form-control" id="userName" placeholder=""/>
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder=""/>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
            </div>  
          </div>
        </div>
    )
}

export default Login;