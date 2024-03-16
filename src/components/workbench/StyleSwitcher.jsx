import Radio from "../controls/Radio"

export default function StyleSwitcher({onChange}) {
    return (
        <div>
            <h2>Display as...</h2>
            <Radio
                name='style-radio'
                value='columns'
                onChange={onChange}
                title={'columns'}
                isDefault={true}
            />
            <Radio
                name='style-radio'
                value='cards'
                onChange={onChange}
                title='Cards'
            />
            <Radio
                name='style-radio'
                value='atlas'
                title='atlas'
                onChange={onChange}
            />
            <Radio
                name='style-radio'
                value='list'
                onChange={onChange}
                title='List'
            />
            <Radio
                name='style-radio'
                value='tree'
                onChange={onChange}
                title='Tree'
            />
        </div>
    )
}