import TopicHeading from "./components/TopicHeading"

export default function Cheatsheet({content, topicDescriptionIsVisible, layout, groupings}) {
    return (
        <div className="cheatsheet">
            <TopicHeading name={content.name}/>
            <p className='topic-description'>{topicDescriptionIsVisible ? content.description : null}</p>
            <div className='divider'></div>
            
            {/* the content of the sheet */}
            <div className={layout}>
                {groupings}
            </div>
        </div>
    )
}