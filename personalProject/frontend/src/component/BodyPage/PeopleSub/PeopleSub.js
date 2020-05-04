import React from 'react'
import General from './General'
import Information from './Information'
import Compensation from './Compensation'
import '../../../style/BodyPage/PeopleSub/PeopleSub.css'

export default function PeopleSub() {
    return (
        <div className="general">
            <div className="backArrow">
                <i class="fas fa-arrow-left"></i>
                <span>Back</span>
            </div>
            <div className="profileAndPanel">
                <div className="profile">
                    <div>
                        <div>
                            <img src="#" />
                            <div className="name">
                                <h1>Kard Sahaphong</h1>
                                <p>Consultant</p>
                            </div>
                        </div>
                        <p>Tel: 061-4121998</p>
                        <p>kard.sp2@gmail.com</p>
                    </div>
                </div>
            {/* <General /> */}
            {/* <Information /> */}
            {/* <Compensation /> */}
            </div>
        </div>
    )
}
