import wonders from "./NaturebeautyApi";
function NatureCards({data}) {

    return (
        <>
            <div className="container"><br></br>
                <div className="row">

                    {
                        data.map((item) => {
                            const {id, name, image, category, description}= item
                            
                            return(
                            <>
                                        <div className="col-md-4">
                                            <div className="card" style={{ width: "18rem" }}>
                                                <div className="card-header">{name} <span id="badge">{id}</span></div>
                                                <img className="card-img-top" src={image} alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5>Category-{category}</h5>
                                                    <p className="card-text">{description}</p>
                                                </div>
                                            </div>
                                        </div>  
                                
                            </>
                            )

                        })
                    }

                </div>
            </div>

        </>

    )
}
export default NatureCards;