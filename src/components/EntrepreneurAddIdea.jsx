import React from 'react'
import "./assets/entrepreneur.css"

function EntrepreneurAddIdea() {
    return (
        <div className="entrepreneur-add-idea">
            <form className="entrepreneur-add-idea-form">
                <h1 className="add-idea-form-heading">Idea Details</h1>
                <p className="add-idea-form-text">Provide a brief overview of your idea and specify the required amount.</p>
                <label htmlFor="idea" className="add-idea-label">Idea</label>
                <input type="text" className="add-idea-input" name="idea" id="idea" placeholder="My Amazing Idea" />
                <label htmlFor="description" className="add-idea-label">Description</label>
                <textarea name="description" id="descripion" className="add-idea-decription"></textarea>
                <label htmlFor="amount" className="add-idea-label">Required AMount ($)</label>
                <input type="naumber" className="add-idea-input" name="amount" id="amount" />
                <label htmlFor="file" className="add-idea-label">Upload Files</label>
                <p className="add-idea-form-text">You can upload documents, images, or other files. Max file size: 5MB</p>
                <div className="add-idea-btns">
                    <button className="add-idea-btn">Save As Draft</button>
                    <button className="add-idea-btn">Submit Idea</button>
                </div>
            </form>
        </div>
    )
}

export default EntrepreneurAddIdea