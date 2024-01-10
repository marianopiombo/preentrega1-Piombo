const ItemListContainer = ({greeting}) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center my-1">
                    <div className="alert alert-warning" role="alert">{greeting}</div>
                </div>
            </div>
        </div>

        
    )
}

export default ItemListContainer;