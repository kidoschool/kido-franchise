import React from 'react';
import OpportunityBanner from '../../assets/opportunity-banner.jpg';
import OpportunitModel1 from '../../assets/opportunit-model1.jpg';
import OpportunitModel2 from '../../assets/opportunit-model2.jpg';
import OpportunitModel3 from '../../assets/opportunit-model3.jpg';


function Opportunity(props){

    return(
      <>

        <section className="banner-opportunit">
            <div className="container-fluid">
                <div className="row">
                    <img src={OpportunityBanner} className="banner-img img-fluid" alt="opportunit_banner"/>
                </div>
            </div>
        </section>

        <section className="Meeting py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="Meeting-text font-weight-bolder">Meeting the demand</h1>
                        <p>Early years education and care is a growing market almost everywhere in the world, with parents increasingly demanding high quality pedagogy and care, and differentiated options for their children.</p>
                        <p>In addition, post COVID-19, governments in several countries in the world have recognised the early years sector as crucial to the social fabric, and funding and support is expected to increase, further increasing demand.</p>
                        <p>With Kïdo, you are well positioned to cater to this demand with a highly differentiated, international offering that will stand out from the competition.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="models py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="models-text font-weight-bolder">Partnership Models</h1>
                        <p>We offer different partnership models depending on your profile and location. In markets where we have our hubs <span>(USA, UK, UAE, India, Singapore and Hong Kong)</span>, partners can be <span>Unit Franchisees</span> (i.e. for a single centre) or <span>Area Developers</span>.</p>
                        <p>For markets where we do not have hubs, we look for <span>Area Developers at a city, province or country level</span>. For large countries and with specific partners, we may look at Master Franchise arrangements.</p>
                        <p>If you are interested in any of the models, <span>please contact us through the website</span>.</p>
                        <div className="card-deck pt-5">
                            <div className="row">
                                <div className="card shadow">
                                    <img src={OpportunitModel1} className="card-img-top p-3" alt="opportunit"/>
                                    <div className="card-body">
                                    <h3 className="card-title">Unit Franchisees</h3>
                                    <p className="card-text">For single sites in any of our markets. </p>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={OpportunitModel2} className="card-img-top p-3" alt="opportunit"/>
                                    <div className="card-body">
                                    <h3 className="card-title">Area Developers</h3>
                                    <p className="card-text">For the right to develop multiple sites in a city, province or country</p>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={OpportunitModel3} className="card-img-top p-3" alt="opportunit"/>
                                    <div className="card-body">
                                    <h3 className="card-title">Master Franchise</h3>
                                    <p className="card-text">For the right to develop and sub-franchise in a country</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="Meeting py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="Meeting-text font-weight-bolder">What's required?</h1>
                        <p>You don't need to be an educator to run a Kïdo School. Our training program will take care of that. We are founded and run by people with non education backgrounds, and know what it takes to succeed.</p>
                        <p>Depending on your location, and whether you are looking for a unit franchise or area development license, you'll need sufficient liquid funds to start and manage your centre. Get in touch and we can guide you on what will be needed. For franchises in the USA and India, please visit the country pages on this website for more details. </p>
                    </div>
                </div>
                <div className="row justify-content-center pt-5">
                    <div className="col-lg-5 text-center">
                        <h3 className="text-secondary">A preschool franchise is not only a good investment, you also make a positive impact to families in your community by providing high quality care and education.</h3>
                    </div>
                </div>
            </div>
        </section>
     
      </>

    );

}

export default Opportunity;