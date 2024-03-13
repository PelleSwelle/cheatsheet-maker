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

    const onDescriptionChange = (e) => {
        e.target.style.height = this.scrollHeight + 'px';
    }

    return (
        <div className='grouping'>
            <div className="grouping-header">
                <h2 contentEditable={true} suppressContentEditableWarning={true}>{group.name}</h2>
                <img className="group-icon" src={icon} />
                {icon ? null : (<ImageUploadWidget onChange={handleIconChange} />)}
            </div>

            <div className="divider"></div>

            <div className='group-content'>
                {descriptionIsVisible 
                    ? (<textarea 
                        name="text" 
                        className="group-description" 
                        onChange={onDescriptionChange}  
                        value={group.description}/>
                    ) 
                    : null
                }
                <ul className="items">
                    { children }
                </ul>
            </div>
        </div>
    )
}