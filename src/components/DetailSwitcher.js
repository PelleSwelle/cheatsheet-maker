import Checkbox from "./Checkbox"

export default function DetailSwitcher({ onTopicDetailChange, onGroupingDetailChange, onItemDetailChange }) {

    return (
        <div className="content-settings settings-card">
            <legend>How much detail at each level?</legend>
            
            <Checkbox
                name='description'
                label={'Topic Description'}
                onChange={onTopicDetailChange} 
            />
            
            <Checkbox
                name='description'
                label={'Grouping description'}
                onChange={onGroupingDetailChange}
            />

            <Checkbox
                name='description'
                label={'Item Description'}
                onChange={onItemDetailChange}
            />
        </div>
    )
}