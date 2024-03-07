import StyleSettingsCard from './StyleSettingsCard';
import DetailSettingsCard from './DetailSettingsCard'
import IOCard from './IOCard';

export default function Workbench({
    onUpload, 
    onStyleChange, 
    onOrientationChange,
    onTopicDetailChange, 
    onGroupingDetailChange, 
    onItemDetailChange
    }) {
    
    return (
        <div className="workbench">
            <h1>Cheatsheet Maker</h1>

            <DetailSettingsCard 
                onTopicDetailChange={onTopicDetailChange}
                onGroupingDetailChange={onGroupingDetailChange}
                onItemDetailChange={onItemDetailChange}
            />

            <StyleSettingsCard onChange={onStyleChange} />

            <IOCard onUpload={onUpload}/>
            
            {/* <div className='import-export-card'>
                <Uploader onUpload={onUpload}/>
                <Exporter />
            </div> */}
        </div>
    )
}