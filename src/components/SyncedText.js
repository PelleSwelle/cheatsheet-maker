import { useState } from "react"

export default function SyncedText() {
    const [currentText, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <InputField text={currentText} onChange={handleChange}/>
            <InputField text={currentText} onChange={handleChange}/>
        </div>
    )
}

function InputField({text, onChange}) {
    return (
        <input
            value={text}
            onChange={onChange}
        />
    )
}