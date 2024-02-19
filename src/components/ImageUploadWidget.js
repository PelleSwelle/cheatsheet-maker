export default function ImageUploadWidget({onChange}) {
    return (
        <div className="image-upload-widget">
            <label>
                ...
                <input id="image" type="file"
                    multiple={false}
                    accept=".jpg, .jpeg, .png"
                    onChange={onChange}
                />
            </label>
        </div>
    )
}