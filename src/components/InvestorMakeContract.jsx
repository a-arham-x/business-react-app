import React from 'react'

function InvestorMakeContract() {
    return (
        <div id="make-contract">
            <h2 className="make-contract-heading">Make Contract</h2>
            <p id="make-contract-bold">You agree to the terms and conditions by clicking
                the button below</p>
            <h3 id="terms">Terms and Conditions</h3>
            <p className="make-contract-text">These terms and conditions ("Agreement") are an agreement
                between Website Operator ("Website Operator", "us", "we" or "our")
                and you ("User", "you" or "your"). This Agreement sets forth the general
                terms and conditions of your use of the example.com website and any of
                its products or services (collectively, "Website")</p>
            <h2 className="make-contract-heading">Accounts and Membership</h2>
            <p className="make-contract-text">If you create an account on the Website, you are responsible for maintaining
                the security of your account and you are fully responsible for all activities that
                occur under the account and any other actions taken in connection with it. We
                may, but have no obligation to, monitor and review new accounts before you may
                sign in and start using the Services. Providing false contact information of any kind
                may result in the termination of your account. You must immediately notify us of any
                unauthorized uses of your account or any other breaches of security. We will not be
                liable for any acts or omissions by you, including any damages of any kind incurred as
                a result of such acts or omissions.</p>
            <button className="agree-button">Agree</button>
        </div>
    )
}

export default InvestorMakeContract