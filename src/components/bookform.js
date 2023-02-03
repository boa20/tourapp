import { useState } from "react";

const BookForm = () => {
    
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log ({
        fullname: fullname,
        email: email,
        telephone: telephone,
      })
    }
    return (
        <div className="container">
          <div className="row d-flex justify-content-center p-5">
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="fullName" className="form-label">Full Name</label>
                  <input type="text" value={fullname} onChange={(e)=>setFullname(e.target.value)} className="form-control" id="fullName" placeholder="Enter your full name"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter your email"/>
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label">Telephone</label>
                  <input type="tel" value={telephone} onChange={(e)=>setTelephone(e.target.value)} className="form-control" id="phone" placeholder="Enter your phone number"/>
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