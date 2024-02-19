export default function ItemHeading({name}) {
    const onChange = () => {
        return
    }
    return (
        <textarea className='item-heading' value={name} onChange={onChange}/>
    )
}