export default function TextInput({label, placeholder}) {
    return(
        <>
            <label>{label}</label>
            <input className="title" placeholder={placeholder}></input>
        </>
    )
}