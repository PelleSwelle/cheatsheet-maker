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
                <div className='divider'></div>
                <textarea className="item-description" value={description} onChange={onChange}/>
            </div>

            {/* implement the rest of the things */}
        </div>
    )
}