import { useState } from "react"

export default function StyleSwitcher(style, onChange) {
    const [value, setValue] = useState(0)
    return (
        <fieldset className="type-fieldset" onChange={onchange}>
            <legend>Display as</legend>

            <input type="radio" id="type-of-sheet" name="type-of-sheet" value='0' onChange={onChange}></input>
            <label for='atlas'>Atlas</label>
            
            <input type="radio" id="type-of-sheet" name="type-of-sheet" value='1' onChange={onChange}></input>
            <label for='list'>List</label>
            
            <input type="radio" id="type-of-sheet" name="type-of-sheet" value='2' onChange={onChange}></input>
            <label for='tree'>Tree</label>
            
            <input type="radio" id="type-of-sheet" name="type-of-sheet" value='3' onChange={onChange}></input>
            <label for='cards'>Cards</label>
        </fieldset>
    )
}