import TopicHeading from './TopicHeading'
import Grouping from "./Grouping"
import Item from "./Item"
import { generateId } from '../../utils/IdGenerator';

export default function Cheatsheet({
    content, 
    topicDescriptionIsVisible, 
    groupingDescriptionIsVisible, 
    itemDescriptionIsVisible,
    orientation
}) {

    const className = 'cheatsheet ' + orientation;

    let sheetContent = content.elements.map(group =>
        <Grouping
            key={generateId()}
            group={group} 
            descriptionIsVisible={groupingDescriptionIsVisible} 
            itemDescriptionIsVisible={itemDescriptionIsVisible} 
        > { 
            group.elements.map(item => 
                <Item 
                    key={generateId()}
                    item={item} 
                /> 
            )}
        </Grouping>
    )
    
    return (
        <div className={className}>
            <TopicHeading name={content.name}/>
            {topicDescriptionIsVisible 
                ? (<p className='topic-description'>{content.description}</p>)  
                : null
            }
            
            <div className='divider'></div>
            
            <div className='sheet-content'>
                {sheetContent}
            </div>
        </div>
    )
}