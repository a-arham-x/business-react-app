import React from 'react'

function Tracking() {
    return (
        <div className="investor-tracking">
            <p className="tracking-product-name">Product Name</p>
            <p className="tracking-product-description">Product description goes here</p>
            <div className="product-tracking-container">
                <div className="product-progress-container">
                    <p className="tracking-product-name">Progress</p>
                    <p className="tracking-product-description">Progress description gooes here</p>
                </div>
                <div className="product-name-container">
                    <p className="tracking-product-name">Product Name</p>
                    <p className="tracking-product-description">Product description goes here</p>
                    <img className="open-new" src={require("./assets/open-new.png")} alt="Open New" />
                </div>
                <div className="product-cost-container">
                    <p className="tracking-product-name">Cost</p>
                    <p className="tracking-product-description">Cost description goes here</p>
                </div>
            </div>
            <div className="product-tracking-container">
                <div className="product-progress-container">
                    <p className="tracking-product-name">Progress</p>
                    <p className="tracking-product-description">Progress description gooes here</p>
                </div>
                <div className="product-name-container">
                    <p className="tracking-product-name">Product Name</p>
                    <p className="tracking-product-description">Product description goes here</p>
                    <img src={require("./assets/open-new.png")} alt="Open New" />
                </div>
                <div className="product-cost-container">
                    <p className="tracking-product-name">Cost</p>
                    <p className="tracking-product-description">Cost description goes here</p>
                </div>
            </div>
        </div>
    )
}

export default Tracking