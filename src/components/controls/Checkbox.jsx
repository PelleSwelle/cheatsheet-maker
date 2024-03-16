export default function Checkbox({ id, name, label, checked = false, onChange, defaultChecked }) {
    return (
        <div>
            <input id={id}
                type='checkbox'
                name={name}
                onChange={onChange}
                defaultChecked={defaultChecked}
            />
            <label>{label}</label>
        </div>
    )
}