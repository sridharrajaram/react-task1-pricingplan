import React from "react";


export default function Planpackage(props) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{props.packData.planName}</h5>
          <h6 class="card-price text-center">{props.packData.currency}{props.packData.price}<span class="period">{props.packData.package}</span></h6>
          <hr />
          <ul class="fa-ul">
            {
              props.packData.planFeatures.map((feature) => {
                return <li className={feature.isEnabled ? "" : "text-muted"}><span class="fa-li"><i className={feature.isEnabled ? "fas fa-check" : "fas fa-times"}></i></span>
                  {
                    feature.isBold ? <strong>{feature.name}</strong> : <span>{feature.name}</span>                    
                  }
                    </li>;
              })
            }
          </ul>
          <div class="d-grid">
            <button onClick = {()=>{props.handleSubscribe(props.packData.planName)}} class="btn btn-primary text-uppercase">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}