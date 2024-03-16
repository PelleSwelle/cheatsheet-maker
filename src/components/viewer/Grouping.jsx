import ImageUploadWidget from "./ImageUploadWidget";
import { useState } from "react";


export default function Grouping({ 
    descriptionIsVisible, 
    group, 
    children 
}) {
    const [icon, setIcon] = useState();

    const handleIconChange = (e) => { 
        let icon = e.target.files[0];
        setIcon(URL.createObjectURL(icon)) 
    }

    return (
        <div className='grouping'>
            <div className="grouping-header">
                <h2 contentEditable={true} suppressContentEditableWarning={true}>{group.name}</h2>
                <img className="group-icon" src={icon} />
                {icon ? null : (<ImageUploadWidget onChange={handleIconChange} />)}
            </div>

            {descriptionIsVisible 
                ? <p>{group.description}</p> 
                : null
            }
            <div className="divider"></div>

            <div className='group-content'>
                <ul className="items">
                    { children }
                </ul>
            </div>
        </div>
    )
}