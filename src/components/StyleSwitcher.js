export default function StyleSwitcher({onChange}) {
    return (
        <fieldset className="type-fieldset">
            <legend>Display as</legend>
            
            <label>Cards
                <input type="radio" id="style-radio" name="style-radio" value='cards' checked={true}  onChange={onChange}></input>
            </label>

            <label>Atlas
                <input type="radio" id="style-radio" name="style-radio" value='atlas' onChange={onChange}></input>
            </label>
            
            <label>List
                <input type="radio" id="style-radio" name="style-radio" value='list' onChange={onChange}></input>
            </label>
            
            <label>Tree
                <input type="radio" id="style-radio" name="style-radio" value='tree' onChange={onChange}></input>
            </label>
            
        </fieldset>
    )
}