import TextInput from './TextInput';
import StyleSwitcher from './components/StyleSwitcher';
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

            <fieldset className="title-and-subtitle">
                <legend>Title</legend>

                <TextInput label='Title' placeholder='this is text' />
                <TextInput label='subtitle' placeholder='subtitle' />
            </fieldset>

            <Uploader onUpload={onUpload}/>

            <OrientationSwitcher onChange={onOrientationChange}/>

            <StyleSwitcher onChange={onStyleChange} />
            <DetailSwitcher 
                onTopicDetailChange={onTopicDetailChange}
                onGroupingDetailChange={onGroupingDetailChange}
                onItemDetailChange={onItemDetailChange}
            />
            

            <fieldset className="content" id="content">
                <legend>Content</legend>
                <input type="text" id=""></input>
            </fieldset>

            <Exporter />
        </div>
    )
}