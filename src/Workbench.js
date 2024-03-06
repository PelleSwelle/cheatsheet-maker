import TextInput from './TextInput';
import StyleSettingsCard from './components/StyleSettingsCard';
import Exporter from './components/Exporter';
import DetailSwitcher from './components/DetailSwitcher';
import Uploader from './components/Uploader';
import OrientationSwitcher from './components/OrientationSwitcher';

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

            <DetailSwitcher 
                onTopicDetailChange={onTopicDetailChange}
                onGroupingDetailChange={onGroupingDetailChange}
                onItemDetailChange={onItemDetailChange}
            />
            <StyleSettingsCard onChange={onStyleChange} />

            <div className='import-export-card'>
                <Uploader onUpload={onUpload}/>
                <Exporter />
            </div>
        </div>
    )
}