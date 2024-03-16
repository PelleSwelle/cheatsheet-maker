// name and id = style-radio

export default function Radio({ name, value, onChange, title, isDefault = false }) {
    return (
        <div className="radio">
            <label>
                <input
                    type="radio"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    defaultChecked={isDefault}
                />
                {title}
            </label>
        </div>
    )
}