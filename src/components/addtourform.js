import { useState } from "react";

const AddTourForm = () => {

    const [city, setCity] = useState("");
    const [tourname, setTourname] = useState("");
    const [info, setInfo] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
          city: city,
          tourname: tourname,
          info: info,
          image: image
    })
    }

    return (
        <div className="container">
          <div className="row d-flex justify-content-center p-5">
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="city" className="form-label">City</label>
                  <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className="form-control" id="city" placeholder="Enter the city for your tour"/>
                </div>
                <div className="mb-3">
                  <label for="tourName" className="form-label">Tour Name</label>
                  <input type="text" value={tourname} onChange={(e)=>setTourname(e.target.value)} className="form-control" id="tourName" placeholder="Enter name of tour"/>
                </div>
                <div className="mb-3">
                  <label for="info" className="form-label">Info about tour</label>
                  <input type="text" value={info} onChange={(e)=>setInfo(e.target.value)} className="form-control" id="info" placeholder="Enter details of your tour"/>
                </div>
                <div className="mb-3">
                  <label for="image">Add a url for the image for your tour</label>
                  <input type="url" value={image} onChange={(e)=>setImage(e.target.value)} className="form-control" id="image" name="image" />
                </div>
                <div className="d-grid justify-content-end">
                  <button type="submit" className="btn btn-primary">Add Tour</button>
                </div>
              </form>
            </div>  
          </div>
        </div>
    )
}

export default AddTourForm;