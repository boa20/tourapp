import React from "react";

const BookForm = () => {
    return (
        <div className="container">
          <div className="row d-flex justify-content-center p-5">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label for="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter your full name"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email"/>
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label">Telephone</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number"/>
                </div>
                <div className="d-grid justify-content-end">
                  <button type="submit" className="btn btn-primary">Book Tour</button>
                </div>
              </form>
            </div>  
          </div>
        </div>
    )
}

export default BookForm;