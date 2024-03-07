import OrientationSwitcher from "./OrientationSwitcher";
import StyleSwitcher from "./StyleSwitcher";

export default function StyleSettingsCard({ onStyleChange, onOrientationChange }) {
    return (
        <div className="settings-card style-settings">
            <OrientationSwitcher onChange={onOrientationChange} />

            <StyleSwitcher onChange={onStyleChange}/>
        </div>
    )
}