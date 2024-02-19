import ImageUploadWidget from "./ImageUploadWidget";
import Item from "./Item"
import { useState } from "react";


export default function Grouping({ style, group, groupDescriptionIsVisible, itemDescriptionIsVisible }) {
    const [icon, setIcon] = useState();

    const handleChange = (e) => { setIcon(URL.createObjectURL(e.target.files[0])) }

    const onDescriptionChange = (e) => {
        e.target.style.height = this.scrollHeight + 'px';
    }

    return (
        <div className={style}>
            <div className="group-heading">
                <h2> {group.name} </h2>
                <img className="group-icon" src={icon} />
                {icon ? null : (<ImageUploadWidget onChange={handleChange} />)}
            </div>

            <div className="group-content">
                {groupDescriptionIsVisible 
                    ? (<textarea 
                        name="text" 
                        className="group-description" 
                        onChange={onDescriptionChange}  
                        value={group.description}/>
                    ) 
                    : null
                }
                <ul>
                    {group.elements.map(item =>
                        <Item
                            key={item.name}
                            name={item.name}
                            description={itemDescriptionIsVisible ? item.description : null}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}