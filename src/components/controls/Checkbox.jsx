export default function Checkbox({ id, name, label, checked = false, onChange }) {
    return (
        <div>
            <input id={id}
                type='checkbox'
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label>{label}</label>
        </div>
    )
}