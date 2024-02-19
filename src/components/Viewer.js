import Item from './Item';
import ReactHooks from '../testResources/ReactHooks';
import Grouping from './Grouping';
import TopicHeading from './TopicHeading';

export default function Viewer({content, style, groupingStyle, topicDescriptionIsVisible, groupDescriptionIsVisible, itemDescriptionIsVisible }) {

    let groups = content.elements.map(group =>
        <Grouping
            key={group.name}
            style={groupingStyle}
            group={group} 
            groupDescriptionIsVisible={groupDescriptionIsVisible} 
            itemDescriptionIsVisible={itemDescriptionIsVisible} 
        />
    )

    return (
        <div className="viewer">
            <TopicHeading name={content.name}/>
            <p>{topicDescriptionIsVisible ? content.description : null}</p>
            <div className='divider'></div>
            <div className={style}>
                {groups}
            </div>
        </div>
    )
}