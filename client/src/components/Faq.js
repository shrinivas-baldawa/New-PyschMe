import React from 'react'
import './Faq.css'

export default function Faq() {
    return (
        <div className="container">
          <h2 className="faq-h2">FAQ's</h2>
          <div className="accordion" id="accordionFlushExample">
            <div className="accordion-item" style={{fontSize:'20px'}}>
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{fontSize:'22px', height:'60px', color:'#fff'}}>
                  Can You Diagnosis Me in One Appointment?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{textAlign: 'justify', lineHeight:'19pt', fontSize:'16px'}}>Every patient is unique and comes with a history of different symptoms, life experiences, treatment failures, treatment successes and treatment options that have not been tried in the past. The goal is to help the patient determine an accurate diagnosis or diagnoses. Even if a diagnosis seems obvious, other conditions will be ruled out such as depression, bipolar disorder, ADHD, anxiety, psychosis, addiction and certain medical conditions, as these conditions influence which medications and therapeutic treatment options would be most suitable. In some cases, it can take several follow up sessions to further clarify the diagnosis.</div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{fontSize:'22px', height:'60px', color:'#fff'}}>
                  How Often Are Appointments?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{textAlign: 'justify', lineHeight:'19pt', fontSize:'16px'}}>Follow up appointments are centered around medication changes, so initially they can be more frequent. Once the patient is doing better and the symptoms have stabilized, the frequency of the appointments will decrease. Since every patient has different needs, each patient is treated with a personalized approach that enable us to work together toward a common goal of optimal mental health. It is not uncommon during a patient’s treatment plan to try several medications over time in order to achieve optimum results.</div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{fontSize:'22px', height:'60px', color:'#fff'}}>
                  Accordion Item #3
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{textAlign: 'justify', lineHeight:'19pt', fontSize:'16px'}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            
          </div>
      </div>
    )
}
