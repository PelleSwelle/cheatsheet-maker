export default function OrientationSwitcher({onChange}) {
    return (
        <div className="orientation-switcher">
            <fieldset className="orientation-fieldset">
                <label>Hertical
                    <input type="radio" id="orientation-radio" name="orientation-radio" value='vertical' checked={true} onChange={onChange}/>
                </label>
                <label>Horizontal
                    <input type="radio" id="orientation-radio" name="orientation-radio" value='horizontal' onChange={onChange}/>
                </label>
            </fieldset>
        </div>
    )
}