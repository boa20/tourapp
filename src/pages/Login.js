import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log ({
        username: username,
        password: password
      })
    }

    return (
        <div className="container">
          <div className="row d-flex justify-content-center p-5">
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="userName" className="form-label">Username</label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="userName" placeholder=""/>
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder=""/>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
            </div>  
          </div>
        </div>
    )
}

export default Login;