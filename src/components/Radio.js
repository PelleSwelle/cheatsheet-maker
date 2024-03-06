// name and id = style-radio

export default function Radio({name, value, onChange, title, checked = false}) {
    return (
        <div className="radio">
            <input
                type="radio"
                id={name}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label>{title}</label>
        </div>
    )
}