import React, {useState} from 'react';
import AboutBanner from '../../assets/about-banner.jpg';
import KidoLogo from '../../assets/kido-ablogo.jpg';
import SafariLogo from '../../assets/safari-logo.jpg';
import SchoolNetwork1 from '../../assets/school-network-bn1.jpg';
import SchoolNetwork2 from '../../assets/school-network-bn2.jpg';
import SchoolNetwork3 from '../../assets/school-network-bn3.jpg';
import SchoolNetwork4 from '../../assets/school-network-bn4.jpg';
import SchoolNetwork5 from '../../assets/school-network-bn5.jpg';
import SchoolNetwork6 from '../../assets/school-network-bn6.jpg';
import SchoolNetwork7 from '../../assets/school-network-bn7.jpg';
import SchoolNetwork8 from '../../assets/school-network-bn8.jpg';
import Ceo from '../../assets/ceo.png';
import Team1 from '../../assets/philippe.jpg';
import Team2 from '../../assets/pallavi.png';
import Team3 from '../../assets/umair.jpg';
import Team4 from '../../assets/deepanshu.jpg';
import Team5 from '../../assets/jeetu.jpg';
import Team6 from '../../assets/emma.jpg';
import Team7 from '../../assets/sheetal.jpg';
import Team8 from '../../assets/kawan.jpg';
import Team9 from '../../assets/liam.jpg';
import Team10 from '../../assets/fruzsina.jpg';
import Team11 from '../../assets/shilpa.jpg';
import Map3 from "../../components/Map/Map3";
import $ from 'jquery';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from 'react-router-dom';
import centerContents1 from '../../MapCenters.json';



function About(props){

    const images = [
        {
            original: SchoolNetwork1,
            thumbnail: SchoolNetwork1,
        },
        {
            original: SchoolNetwork2,
            thumbnail: SchoolNetwork2,
        },
        {
            original: SchoolNetwork3,
            thumbnail: SchoolNetwork3,
        },
        {
            original: SchoolNetwork4,
            thumbnail: SchoolNetwork4,
        },
        {
            original: SchoolNetwork5,
            thumbnail: SchoolNetwork5,
        },
        {
            original: SchoolNetwork6,
            thumbnail: SchoolNetwork6,
        },
        {
            original: SchoolNetwork7,
            thumbnail: SchoolNetwork7,
        },
        {
            original: SchoolNetwork8,
            thumbnail: SchoolNetwork8,
        },
      ];
      
    const [ map_zoom, setMap_zoom ] = useState("");
    const [ map_centre, setMap_centre ] = useState({lat: 19,lng: 10});

    // $(document).ready(function(){
    //     $(".lg-team-data").hover(function(){
    //       $(".lg-team-data").css("display" , "none");
    //       $(".sm-team-data").css("display" , "block");
    //     });
    //     $(".sm-team-data").hover(function(){
    //         $(".sm-team-data").css("display" , "none");
    //         $(".lg-team-data").css("display" , "block");
    //       });
    //   });

    return(
      <>

        <section className="banner-about">
            <div className="container-fluid">
                <div className="row">
                    <img src={AboutBanner} className="banner-img img-fluid" alt="about_banner"/>
                </div>
            </div>
        </section>

        <section className="about-text py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="Partner-text font-weight-bolder">By parents, for parents</h1>
                        <p>We are founded and managed by a group of parents of young children around the world. Frustrated by the quality of preschools and nurseries in our cities, we came together to create an early education company that delivered for <span>parents, children and operators alike</span>, all over the world.</p>
                        <p>Under our two brands, <span>Kïdo and Safari Kid International</span>, we are creating magical and engaging learning spaces. Infused with cutting edge pedagogy and great teachers to nurture and enhance every child’s innate curiosity, creativity and ability to be a lifelong learner.</p>
                        <div className="offering-link text-center py-4">
                            <Link to="/" className="my-btn center">Our franchise offering</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="brand py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3">
                        <h1 className="Partner-text font-weight-bolder">Brands</h1>
                        <p>Both our brands share the same philosophy, run on the Kïdo Early Years Platform, and provide parents and children with the same level of service in every city that we are in.</p>
                    </div>
                    <div className="col-lg-4 pt-4">
                        <div className="brand-data p-4 border shadow text-center">
                            <img src={KidoLogo} className="img-fluid"/>
                            <p className="barnd-para pt-4">Our main brand. In the USA, UK. Hong Kong and Dubai. Launching soon in China and India</p>
                            <div className="contact-link text-center py-4">
                                <a href="https://kido.school/en/" target="_blank" rel="noreferrer" className="my-btn center">Visit the website</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pt-4">
                        <div className="brand-data p-4 border shadow text-center">
                            <img src={SafariLogo} className="img-fluid"/>
                            <p className="barnd-para pt-4">Our main brand. In the USA, UK. Hong Kong and Dubai. Launching soon in China and India</p>
                            <div className="contact-link text-center py-4">
                                <a href="https://kido.school/en/" target="_blank" rel="noreferrer" className="my-btn center">Visit the website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="school-network py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                    {/* <img src={SchoolNetwork} className="img-fluid" alt="school_network"/> */}
                    <ImageGallery items={images} showThumbnails={false} onPlay={true}/>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                        <h1 className="network-text font-weight-bolder">Network</h1>
                        <p>We started with our first school in <span>Hong Kong in Jan 2014</span>. Since then we have opened schools in <span>Dubai, India, the UK and the USA</span>. Our franchise operations began in 2019 and <span>2020 has seen us launching</span> <span className="text-primary">Kïdo Home</span><span>, our online preschool offering</span>. Our network is rapidly growing across more cities and countries.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="con-map py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                    <Map3 centerContents1={centerContents1} map_centre={map_centre} map_zoom={2}   />
                    </div>
                </div>
            </div>  
        </section>
        
        <section className="founder py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                    <img src={Ceo} className="img-fluid" alt="founder"/>
                    </div>
                    <div className="col-lg-5">
                        <div className="founder-info-data">
                            <i className="fas fa-quote-left fav-icons-small float-left"></i>
                            <p className="pt-4">Our vision for the future of childcare is where humans focus on learning, teaching, caring and interacting - and smart machines do everything else.</p>
                            <i className="fas fa-quote-right fav-icons-small float-right"></i>
                        </div>
                        <div className="founder-info">
                            <h3>Aniruddh Gupta</h3>
                            <span>Founder and CEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="team py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="team-text font-weight-bolder">The Team</h1>
                        <p>Our core team has multiple years experience across education, banking, finance, design, hospitality, marketing and much else. We also have several years experience in raising children in different cultures, cities and countries. We have over thirty professionals in six different hubs around the world, giving us in depth expertise, cross-cultural sensibility and an ability to service parents and clients across the world.</p>
                        <div className="team-listing pt-4">
                            <div className="row">
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team1} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Philippe Sachs</h5>
                                            <small>Deputy CEO, CEO UK,</small><br/>
                                            <small>London</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Head of Public Sector, Standard Chartered. Ex Goldman, JP Morgan. Member, Council of Foreign Relations. Georgetown University.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team2} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Pallavi Nath</h5>
                                            <small>COO, CEO Asia</small><br/>
                                            <small>Singapore</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Head of Revenue Management, Conrad Asia. Vice President HSMAI South Asia. Cornell University.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team3} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Umair Tariq</h5>
                                            <small>CFO, CEO ME&Africa</small><br/>
                                            <small>Dubai</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Head of Africa Structuring, Standard Chartered. London School of Economics, CFA.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team4} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Deep Pandita</h5>
                                            <small>CEO USA. Head Tech</small><br/>
                                            <small>Houston</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Co-Head, Energy Business0, Stark Investments. Director Electricity Research, Citadel. </p>
                                    </div>
                                </div>
                                </div>
                                <div className="row pt-5">
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team5} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Deep Pandita</h5>
                                            <small>CEO USA. Head Tech</small><br/>
                                            <small>Houston</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Co-Head, Energy Business0, Stark Investments. Director Electricity Research, Citadel. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team6} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Deep Pandita</h5>
                                            <small>CEO USA. Head Tech</small><br/>
                                            <small>Houston</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Co-Head, Energy Business0, Stark Investments. Director Electricity Research, Citadel. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team7} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Deep Pandita</h5>
                                            <small>CEO USA. Head Tech</small><br/>
                                            <small>Houston</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Co-Head, Energy Business0, Stark Investments. Director Electricity Research, Citadel. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team8} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Deep Pandita</h5>
                                            <small>CEO USA. Head Tech</small><br/>
                                            <small>Houston</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Co-Head, Energy Business0, Stark Investments. Director Electricity Research, Citadel. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team9} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Deep Pandita</h5>
                                            <small>CEO USA. Head Tech</small><br/>
                                            <small>Houston</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Co-Head, Energy Business0, Stark Investments. Director Electricity Research, Citadel. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team10} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Deep Pandita</h5>
                                            <small>CEO USA. Head Tech</small><br/>
                                            <small>Houston</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Co-Head, Energy Business0, Stark Investments. Director Electricity Research, Citadel. </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team11} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Deep Pandita</h5>
                                            <small>CEO USA. Head Tech</small><br/>
                                            <small>Houston</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Co-Head, Energy Business0, Stark Investments. Director Electricity Research, Citadel. </p>
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

export default About;


