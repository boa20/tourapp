import React from "react";

const AddTourForm = () => {
    return (
        <div className="container">
          <div className="row d-flex justify-content-center p-5">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label for="city" className="form-label">City</label>
                  <input type="text" className="form-control" id="city" placeholder="Enter the city for your tour"/>
                </div>
                <div className="mb-3">
                  <label for="tourName" className="form-label">Tour Name</label>
                  <input type="text" className="form-control" id="tourName" placeholder="Enter name of tour"/>
                </div>
                <div className="mb-3">
                  <label for="info" className="form-label">Info about tour</label>
                  <input type="text" className="form-control" id="info" placeholder="Enter details of your tour"/>
                </div>
                <div className="mb-3">
                  <label for="image">Add a url for the image for your tour</label>
                  <input type="url" className="form-control" id="image" name="image" />
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