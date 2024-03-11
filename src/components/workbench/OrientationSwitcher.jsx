import Radio from "../controls/Radio";

export default function OrientationSwitcher({ onChange }) {
    return (
        <div className="orientation-switcher">
            <h2>Orientation</h2>
            <Radio
                name='orientation-radio'
                value='vertical'
                onChange={onChange}
                title={'Vertical'}
            />

            <Radio
                name={'orientation-radio'}
                value={'horizontal'}
                onChange={onChange}
                title={'Horizontal'}
            />
        </div>
    )
}