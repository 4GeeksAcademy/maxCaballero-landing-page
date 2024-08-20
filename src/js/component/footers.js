import React from "react";

function Footers(){

    return(
        <div className="row mt-4">
            <div className="col justufy-content-evenly">
                <div className="card" style="width: 18rem;">
                    <img className="card-img-top w-500 h-325" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qgt6J7GoHd9UfGRNqrTIsgW4TRMv-YdJIg&s"  alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}