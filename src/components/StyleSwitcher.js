export default function StyleSwitcher({onChange}) {
    return (
        <fieldset className="type-fieldset" onChange={onChange}>
            <legend>Display as</legend>
            
            <input type="radio" id="style-radio" name="style-radio" value='cards' checked='true'></input>
            <label for='cards'>Cards</label>

            <input type="radio" id="style-radio" name="style-radio" value='atlas'></input>
            <label for='atlas'>Atlas</label>
            
            <input type="radio" id="style-radio" name="style-radio" value='list'></input>
            <label for='list'>List</label>
            
            <input type="radio" id="style-radio" name="style-radio" value='tree'></input>
            <label for='tree'>Tree</label>
            
        </fieldset>
    )
}