import { ChangeEvent, useState } from "react"

export default function Uploader({onUpload}) {
    return (
        <div>
            <input id="file-upload" type="file" className="hidden"
                multiple={false}
                accept=".json"
                // onChange={onUpload}
            />
            <button onClick={onUpload}>upload</button>
        </div>
    )
}