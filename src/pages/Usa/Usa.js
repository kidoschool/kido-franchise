import React, {useState ,useEffect} from 'react';
import UsaBanner from '../../assets/usa-banner.jpg';
import usaFeature1 from '../../assets/usa-feature1.jpg';
import usaFeature2 from '../../assets/usa-feature2.jpg';
import usaFeature3 from '../../assets/usa-feature3.jpg';
import usaFeature4 from '../../assets/usa-feature4.jpg';
import usaFeature5 from '../../assets/usa-feature5.jpg';
import usaFeature6 from '../../assets/usa-feature6.jpg';




function Usa(props){

    return(
      <>

        <section className="banner-usa">
            <div className="container-fluid">
                <div className="row">
                    <img src={UsaBanner} className="banner-img img-fluid" alt="usa_banner"/>
                </div>
            </div>
        </section>

        <section className="offering py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="offering-text font-weight-bolder">Unique offering</h1>
                        <h3>Customised preschool, for everyone</h3>
                        <p>Unlike almost anyone else, we don't have a cookie cutter approach to franchising in the United States. Our model ensures that you can open a school anywhere, on (almost) any piece of real estate, and still deliver the highest quality bilingual English-Spanish preschool program anywhere.</p>
                        <p>Our base in the United States is in Texas, with our existing schools in Houston and Austin. Our international franchise system ensures that we can provide support to any franchisee, anywhere in the country.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className="features py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div class="card-deck pt-5">
                            <div className="row">
                                <div class="card shadow">
                                    <img src={usaFeature1} class="card-img-top p-3" alt="..."/>
                                    <div class="card-body">
                                    <h3 class="card-title">Bilingual Program</h3>
                                    <p class="card-text">Detailed lesson plans for every day of the school year, with video based resource and delivery training. Delivered electronically</p>
                                    </div>
                                </div>
                                <div class="card shadow">
                                    <img src={usaFeature2} class="card-img-top p-3" alt="..."/>
                                    <div class="card-body">
                                    <h3 class="card-title">Real Estate</h3>
                                    <p class="card-text">Proprietary resources for the classroom, including flash cards, work sheets, posters, circle time resources and much more</p>
                                    </div>
                                </div>
                                <div class="card shadow">
                                    <img src={usaFeature3} class="card-img-top p-3" alt="..."/>
                                    <div class="card-body">
                                    <h3 class="card-title">Languages</h3>
                                    <p class="card-text">Full curricula for Mandarin and Spanish at native level, synching with the English program for complete bilingual offerings</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-4">
                                <div class="card shadow">
                                    <img src={usaFeature4} class="card-img-top p-3" alt="..."/>
                                    <div class="card-body">
                                    <h3 class="card-title">Toys and Games</h3>
                                    <p class="card-text">Complete guide with instructions on toys and games to use, synched with lesson plans, classroom set up and stations</p>
                                    </div>
                                </div>
                                <div class="card shadow">
                                    <img src={usaFeature5} class="card-img-top p-3" alt="..."/>
                                    <div class="card-body">
                                    <h3 class="card-title">Learning Journals</h3>
                                    <p class="card-text">Pre designed learning journals to complete and present to parents at the end of every six week cycle, matching the usa</p>
                                    </div>
                                </div>
                                <div class="card shadow">
                                    <img src={usaFeature6} class="card-img-top p-3" alt="..."/>
                                    <div class="card-body">
                                    <h3 class="card-title">Learning Journals</h3>
                                    <p class="card-text">Pre designed learning journals to complete and present to parents at the end of every six week cycle, matching the usa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
      </>

    );

}

export default Usa;