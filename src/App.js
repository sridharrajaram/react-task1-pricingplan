import './App.css';
import Planpackage from './pricingplan';

function App() {
  let data = [
    {
      planName: "Free",
      currency: "$",
      price: 0,
      package: "/month",
      planFeatures: 
      [
            {
                  name:"Single User",
                  isEnabled: true
            },
            {
                  name:"5GB Storage",
                  isEnabled: true
            },
            {
                  name:"Unlimited Public Projects",
                  isEnabled: true
            },
            {
                  name:"Community Access",
                  isEnabled: true
            },
            {
                  name:"Unlimited Private Projects",
                  isEnabled: false
            },
            {
                  name:"Dedicated Phone Support",
                  isEnabled: false
            },
            {
                  name:"Free Subdomain",
                  isEnabled: false
            },
            {
                  name:"Monthly Status Reports",
                  isEnabled: false
            }
      ]                  
},
{
      planName: "Plus",
      currency: "$",
      price: 9,
      package: "/month",
      planFeatures: 
      [
            {
                  name:"5 Users",
                  isEnabled: true,
                  isBold: true
            },
            {
                  name:"5GB Storage",
                  isEnabled: true
            },
            {
                  name:"Unlimited Public Projects",
                  isEnabled: true
            },
            {
                  name:"Community Access",
                  isEnabled: true
            },
            {
                  name:"Unlimited Private Projects",
                  isEnabled: true
            },
            {
                  name:"Dedicated Phone Support",
                  isEnabled: true
            },
            {
                  name:"Free Subdomain",
                  isEnabled: true
            },
            {
                  name:"Monthly Status Reports",
                  isEnabled: false
            }
      ]                  
},
{
      planName: "Pro",
      currency: "$",
      price: 49,
      package: "/month",
      planFeatures: 
      [
            {
                  name:"Unlimited Users",
                  isEnabled: true,
                  isBold: true
            },
            {
                  name:"150GB Storage",
                  isEnabled: true
            },
            {
                  name:"Unlimited Public Projects",
                  isEnabled: true
            },
            {
                  name:"Community Access",
                  isEnabled: true
            },
            {
                  name:"Unlimited Private Projects",
                  isEnabled: true,
                  isBold: true
            },
            {
                  name:"Dedicated Phone Support",
                  isEnabled: true
            },
            {
                  name:"Free Subdomain",
                  isEnabled: true
            },
            {
                  name:"Monthly Status Reports",
                  isEnabled: true
            }
      ]
    }
  ];


let onSubscribe = (planname)=>{
      window.confirm(`Are you sure subscribing ${planname} plan`)? alert("thanks for subscription") : alert("check for other plans")
}

  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            data.map((plan) =>{
              return <Planpackage packData={plan} handleSubscribe ={onSubscribe} ></Planpackage>;
            })
          }
          
          {/* <Planpackage></Planpackage>
          <Planpackage></Planpackage>
          <Planpackage></Planpackage>   */}        
        </div>
      </div>
    </section>
  );
}

export default App;
