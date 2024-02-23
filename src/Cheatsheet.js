import TopicHeading from "./components/TopicHeading"
import Grouping from "./components/Grouping"
import Item from "./components/Item"

export default function Cheatsheet({
    content, 
    topicDescriptionIsVisible, 
    groupingDescriptionIsVisible, 
    itemDescriptionIsVisible, 
}) {
    let sheetContent = content.elements.map(group =>
        <Grouping
            key={group.name}
            group={group} 
            descriptionIsVisible={groupingDescriptionIsVisible} 
            itemDescriptionIsVisible={itemDescriptionIsVisible} 
        >
            { 
                group.elements.map(item => 
                    <Item item={item} /> 
                )}
        </Grouping>
    )
    
    return (
        <div className="cheatsheet">
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