

const Dashboard = () => {
    return (
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
    )
}

export default Dashboard;