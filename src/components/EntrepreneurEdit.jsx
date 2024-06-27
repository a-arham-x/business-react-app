import React from 'react'
import "./assets/entrepreneur.css"

function EntrepreneurEdit() {
    return (
        <div className="entrepreneur-edit">
            <form className="entrepreneur-edit-form">
                <div className="edit-form-head">
                    <h1 className="edit-form-heading">Edit Description</h1>
                    <p className="edit-form-text">You can edit the description and required amount.</p>
                </div>
                <label htmlFor="description" className="edit-form-label">Description</label>
                <textarea className="edit-form-textarea" name="description" id="description"></textarea>
                <label htmlFor="required-amount" className="edit-form-label">Required Amount</label>
                <textarea className="edit-form-textarea" name="required-amount" id="required-amount"></textarea>
                <button className="edit-save-button">Save</button>
            </form>
        </div>
    )
}

export default EntrepreneurEdit