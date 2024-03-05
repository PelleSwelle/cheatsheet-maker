import Radio from "./Radio"

export default function StyleSwitcher({onChange}) {
    return (
        <div>
            <Radio
                name='style-radio'
                value='cards'
                onChange={onChange}
                title='Cards'
                checked={true}
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