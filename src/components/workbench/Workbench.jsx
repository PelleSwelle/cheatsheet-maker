import StyleSettingsCard from './StyleSettingsCard';
import DetailSettingsCard from './DetailSettingsCard'
import IOCard from './IOCard';
import { FontController } from './FontController';
export default function Workbench({
    onUpload, 
    onStyleChange, 
    onOrientationChange,
    onTopicDetailChange, 
    onGroupingDetailChange, 
    onItemDetailChange,
    onFontSizeSelect
    }) {
    
    return (
        <div className="workbench">
            <h1>Cheatsheet Maker</h1>

            <DetailSettingsCard 
                onTopicDetailChange={onTopicDetailChange}
                onGroupingDetailChange={onGroupingDetailChange}
                onItemDetailChange={onItemDetailChange}
            />
            <StyleSettingsCard onChange={onStyleChange} onOrientationChange={onOrientationChange} />
            
            <FontController onSelectSize={onFontSizeSelect}/>
            <IOCard onUpload={onUpload}/>
            
        </div>
    )
}