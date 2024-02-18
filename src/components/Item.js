import ItemHeading from './ItemHeading'

export default function Item({id, name, description, citation = null, image = null}) {
    const onChange = () => {
        return
    }
    return(
        <div className='item' key={id}>
            <div className="image-placeholder"></div>
            <div className="item-content">
                <ItemHeading name={name}/>
                {/* <h3 className="item-name"> {name} </h3> */}
                <textarea className="item-description" value={description} onChange={onChange}/>
                {/* <p className="item-description">{description}</p> */}
            </div>

            {/* implement the rest of the things */}
        </div>
    )
}