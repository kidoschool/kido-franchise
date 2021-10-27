import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Map3 from "../../components/Map/Map3";
import centerContents1 from '../../MapCenters.json';
import { isMobile } from "react-device-detect";


function Home(props) {


    const [ map_centre ] = useState({lat: 19,lng: 10});
    let map_zoom = 0;

    isMobile ? map_zoom = 1 : map_zoom = 2;


    return(
        <>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-text-area">
                            <h1 className="banner-text">preschool franchise, redefined</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Partner my-5">
            <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="Partner-text-area">
                                <h1 className="Partner-text font-weight-bolder">Become a Kïdo Partner</h1>
                                <h3>Early years, reimagined</h3>
                                <p>We are creating a <span>global platform</span> dedicated to delivering the highest quality early years education <span>anywhere in the world</span>. We are integrating advances in pedagogy, technology and design to create <span>unique learning experiences for children.</span></p>
                                <p>Partner with us as a <span>master franchisee, area developer, or unit franchisee</span> anywhere in the world and discover the power of the <span>most comprehensive early years preschool franchise system created</span> anywhere. Our franchise model rests on our ability and commitment to make our franchisees successful.</p>
                            </div>
                            <div className="contact-link text-center py-4">
                                <Link to="/contact" className="my-btn center">Contact us</Link>
                            </div>
                            <div className="you-video text-center py-4">
                            <iframe width="650" height="350" src="https://www.youtube.com/embed/QIp1Tne4xFc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="franchise-platform my-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="Partner-text-area">
                                <h1 className="Partner-text font-weight-bolder">Our Franchise Platform</h1>
                                <p>The Kïdo Early Years Platform is a set of comprehensive online and offline products and services delivering curriculum, quality assurance, training, school design, marketing, branding, and our own school management, teacher and parent communication apps. A truly 21st century franchise platform that ensures best in className child development, parent satisfaction and franchisee success outcomes.</p>
                                <p>Our program, amongst other things, offers a fully bilingual English-Spanish curriculum (currently for the USA), a fully bilingual English-Mandarin curriculum (for Hong Kong and China), and Arabic and French as additional languages.</p>
                            </div>
                            <div className="platform-listing py-4">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="list-data text-center">
                                            <i className="fas fa-cog fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                         <div className="list-data text-center">
                                            <i className="far fa-thumbs-up fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-chalkboard-teacher fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-mobile-alt fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row pt-5">
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-home fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-chart-line fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-user-friends fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-cube fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="brochure-link text-center py-4">
                                <a href="https://64a46671-a752-4ee4-9521-3a4736fb44a1.filesusr.com/ugd/a1d20b_5e6bef5e6be7454a806f4e3e03152bf2.pdf" target="_blank" rel="noreferrer" className="my-btn center">Download the brochure</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="we-franchise my-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="we-franchise-text-area">
                                <h1 className="we-franchise-text font-weight-bolder">Where we franchise</h1>
                                <p>With our main office in London, and hubs in Houston, Dubai, Mumbai, Bangalore, Singapore and Hong Kong, we cover all parts of the world. We offer unit franchises and area development rights in the USA, India and our hub locations, and area development and master franchise rights at a country or region level elsewhere in the world.</p>
                            </div>
                            <div className="contact-link text-center py-4">
                                <Link to="/contact" className="my-btn center">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <section className="con-map pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                    <Map3 centerContents1={centerContents1} map_centre={map_centre} map_zoom={map_zoom}/>
                    </div>
                </div>
            </div>  
        </section>

                   
        </>
    )
}


export default Home;