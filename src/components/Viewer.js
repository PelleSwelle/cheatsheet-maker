import { designPatterns } from '../testResources/DesignPatterns';
import Item from './Item';
import ReactHooks from '../testResources/ReactHooks';
import Grouping from './Grouping';
import TopicHeading from './TopicHeading';

export default function Viewer({ style, topicDescriptionIsVisible, groupDescriptionIsVisible, itemDescriptionIsVisible }) {

    let groups = ReactHooks.elements.map(group =>
        <Grouping group={group} groupDescriptionIsVisible={groupDescriptionIsVisible} itemDescriptionIsVisible={itemDescriptionIsVisible} />
    )

    return (
        <div className="viewer">
            <TopicHeading name={ReactHooks.name}/>
            <p>{topicDescriptionIsVisible ? ReactHooks.description : null}</p>
            <div className='divider'></div>
            <div className={style}>
                {groups}
            </div>
        </div>
    )
}