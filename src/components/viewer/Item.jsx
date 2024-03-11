import ItemHeading from './ItemHeading'

export default function Item({item}) {

    const onChange = () => {
        return
    }

    return(
        <div className='item' key={item.id}>
            <div className="image-placeholder"></div>
            <div className="item-content">
                <ItemHeading name={item.name}/>
                <textarea className="item-description" value={item.description} onChange={onChange}/>
            </div>

            {/* implement the rest of the things */}
        </div>
    )
}