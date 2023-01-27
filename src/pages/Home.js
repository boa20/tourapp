import { tourData } from "../tourData";

const Home = () => {
    return (
        <div className="container">
            <div className="row m-5">
                {tourData.map((data, key) => {
                    return (
                        <div key={key} className="col m-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{data.city}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{data.name}</h6>
                                    <p className="card-text">{data.info}</p>
                                    <a href="#" className="card-link">Book Tour</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Home;