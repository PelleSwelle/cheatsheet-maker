export default function DetailSwitcher({onTopicDetailChange, onGroupingDetailChange, onItemDetailChange}) {
    
    return (
        <fieldset>
            <legend>How much detail at each level?</legend>
            
            <fieldset className="detail-changer" onChange={onTopicDetailChange}>
                <legend>Topic</legend>
                
                <img src='C:\projects\cheatsheet-maker\public\icons\columns_white.png'/>
                <label>Description
                    <input id="topic-description-toggle" type='checkbox' name="description" checked={true} onChange={onTopicDetailChange}/>
                </label>

                <label>Citation
                    <input id="topic-citation-toggle" type='checkbox' name="citation" onChange={onTopicDetailChange}/>
                </label>

                <fieldset className="detail-Changer" onChange={onGroupingDetailChange}>
                    <legend>Groupings</legend>
                    
                    <label>Description
                        <input type='checkbox' name="description" checked={true} onChange={onTopicDetailChange}/>
                    </label>

                    <fieldset className="detail-changer" onChange={onItemDetailChange}>
                        <legend>Item</legend>
                        
                        <label>Description
                            <input type='checkbox' name="description" checked={true} onChange={onTopicDetailChange}/>
                        </label>

                        <label>Image
                            <input type='checkbox' name="image" onChange={onTopicDetailChange}/>
                        </label>

                        <label>Citation
                            <input type='checkbox' name="citation" onChange={onTopicDetailChange}/>
                        </label>

                    </fieldset>
                </fieldset>
            </fieldset>
        </fieldset>
    )
}