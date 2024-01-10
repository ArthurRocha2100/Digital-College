import ConteinerLeft from './CollectionContentLeft'
import ContainerRight from './CollectionRight'
import './Collection.css'

function Collection() {
    return(
        <div className="collection">
            <h2>Collection</h2>
            <CollectionContainer />
        </div>
    )
}


function CollectionContainer() {
    return(
        <div className="collection-container">
            <ConteinerLeft />
            <ContainerRight />
        </div>
    )
}

export default Collection