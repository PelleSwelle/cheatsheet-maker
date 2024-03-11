// name and id = style-radio

export default function Radio({name, value, onChange, title}) {
    return (
        <div className="radio">
            <input
                type="radio"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label>{title}</label>
        </div>
    )
}