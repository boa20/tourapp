import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
      <div className='container'>
        <div className="row d-flex justify-content-center p-5">
          <div className="col-md-8">
            <div className="d-grid justify-content-end">
              <Link to="/addtourform" className='nav-link'>
                <button type="submit" className="btn btn-primary">Add Tour</button>
              </Link>
            </div>
            <table class="table table-hover">
              <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">City</th>
                    <th scope="col">Name</th>
                    <th scope="col">info</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>New York</td>
                    <td>New York Bridge Tour</td>
                    <td>lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repellendus!</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Paris</td>
                    <td>Paris Light Tour</td>
                    <td>lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repellendus!</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>London</td>
                    <td>London Palace Tour</td>
                    <td>lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repellendus!</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Tokyo</td>
                    <td>Tokyo Sushi Tour</td>
                    <td>lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repellendus!</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

export default Dashboard;