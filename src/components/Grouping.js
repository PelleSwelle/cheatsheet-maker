import GroupingHeading from "./GroupingHeading";
import ImageUploadWidget from "./ImageUploadWidget";
import Item from "./Item"
import { useState } from "react";


export default function Grouping({ style, itemStyle, group, groupDescriptionIsVisible, itemDescriptionIsVisible }) {
    const [icon, setIcon] = useState();

    const handleChange = (e) => { setIcon(URL.createObjectURL(e.target.files[0])) }

    const onDescriptionChange = (e) => {
        e.target.style.height = this.scrollHeight + 'px';
    }

    let items = group.elements.map(item =>
        <Item
            key={item.name}
            name={item.name}
            style={itemStyle}
            description={itemDescriptionIsVisible ? item.description : null}
        />
    )

    return (
        <div className={style}>
            <div className="grouping-header">
                <GroupingHeading name={group.name} />
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
                <ul className="items">
                    {items}
                </ul>
            </div>
        </div>
    )
}