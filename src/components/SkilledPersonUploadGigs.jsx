import React from 'react'

function SkilledPersonUploadGigs() {
    return (
        <div className="upload-gigs">
            <h1 className="upload-heading">Upload Gigs</h1>
            <form className="upload-form">
                <div className="upload-form-row">
                    <div className="form-left">
                        <label htmlFor="title" className='upload-label'>Title</label>
                        <input type="text" className="upload-title-input" name="title" />
                        <label htmlFor="description" className='upload-label'>Description</label>
                        <textarea name="description" id="description"></textarea>
                    </div>
                    <div className="form-right">
                        <img src={require("./assets/upload.png")} alt="Upload a file" className="upload-img" />
                        <div className="upload-file">
                            <p className="upload-text">
                                Please upload square image, size less
                                than 100KB. Image in png or jpg form
                            </p>
                            <div className="upload-file-btns">
                                <button className="upload-file-btn">Choose File</button>
                                <div className="upload-file-btn">No File Choosen</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-buttons">
                    <button className="form-btn">Save As Draft</button>
                    <button className="form-btn">Submit Idea</button>
                </div>
            </form>
        </div>
    )
}

export default SkilledPersonUploadGigs