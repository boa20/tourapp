import React from "react";

const bookForm = () => {
    return (
        <form>
            <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name"/>
              <div id="userName" className="form-text">Enter your name</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="phone" className="form-label">Telephone</label>
              <input type="tel" className="form-control" id="phone"/>
            </div>
            <button type="submit" className="btn btn-primary">Book Tour</button>
        </form>
    )
}

export default bookForm;