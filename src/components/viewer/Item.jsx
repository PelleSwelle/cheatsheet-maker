export default function Item({item}) {

    return(
        <div className='item' key={item.id}>
            <div className="image-placeholder"></div>
            <div className="item-content">
                <h3 contentEditable={true} suppressContentEditableWarning={true}>{item.name}</h3>
                <p 
                    className="item-description" 
                    contentEditable={true} 
                    suppressContentEditableWarning={true}>
                    {item.description}
                </p>
            </div>

            {/* implement the rest of the things */}
        </div>
    )
}