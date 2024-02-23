import Cheatsheet from '../Cheatsheet';
import Grouping from './Grouping';
import TopicHeading from './TopicHeading';

export default function Viewer({
    content, 
    layout, 
    groupingStyle, 
    itemStyle,
    topicDescriptionIsVisible, 
    groupDescriptionIsVisible, 
    itemDescriptionIsVisible 
    }) {

    let groupings = content.elements.map(group =>
        <Grouping
            key={group.name}
            style={groupingStyle}
            itemStyle={itemStyle}
            group={group} 
            groupDescriptionIsVisible={groupDescriptionIsVisible} 
            itemDescriptionIsVisible={itemDescriptionIsVisible} 
        />
    )

    return (
        <div className="viewer">
            <Cheatsheet 
                content={content} 
                topicDescriptionIsVisible={topicDescriptionIsVisible}
                layout={layout}
                groupings={groupings}
                />
        </div>
    )
}