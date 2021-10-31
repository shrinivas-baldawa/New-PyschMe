import React from 'react'
import './HomeComp2.css'

export default function HomeComp2() {
    return (
        <div>
            <div className="homecomp-heading">
                <h1><b>Unique Individualized Treatment</b></h1>
                <h5>Here For You When You Need It The Most</h5>
                <div className="flex-container-homecomp2">
                    <div className="left-item-homecomp2">
                        <h5 className="homecomp2-div-head">Approach</h5>
                        <p>We strive to put the needs of the patient first while making medically and clinically appropriate recommendations to help them achieve victory in their battle with their symptoms.</p>
                    </div>
                    <div className="center-item-homecomp2">
                        <h5 className="homecomp2-div-head">Treatments</h5>
                        <p>We work at every step with the patient, and their family, to ensure the best possible results. Our success is based on the achievement of the patients’ goals and aspirations.</p>
                    </div>
                    <div className="right-item-homecomp2">
                        <h5 className="homecomp2-div-head">Recovery</h5>
                        <p>We want you to recover quickly, but, it is important not to rush the process. It takes time for some treatments to fully take effect in your normal everyday life. Together we can do this.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
