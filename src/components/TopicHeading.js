export default function TopicHeading({name}) {
    const onChange = () => {
        return
    }
    return (
        <textarea className='topic-heading' value={name} onChange={onChange}/>
    )
}