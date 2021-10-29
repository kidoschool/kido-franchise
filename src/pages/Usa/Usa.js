import React from 'react';
import UsaBanner from '../../assets/usa-banner.jpg';
import usaFeature1 from '../../assets/usa-feature1.jpg';
import usaFeature2 from '../../assets/usa-feature2.jpg';
import usaFeature3 from '../../assets/usa-feature3.jpg';
import usaFeature4 from '../../assets/usa-feature4.jpg';
import usaFeature5 from '../../assets/usa-feature5.jpg';
import usaFeature6 from '../../assets/usa-feature6.jpg';

import UsaGallery1 from '../../assets/usa-gallery1.jpg';
import UsaGallery2 from '../../assets/usa-gallery2.jpg';
import UsaGallery3 from '../../assets/usa-gallery3.jpg';
import UsaGallery4 from '../../assets/usa-gallery4.jpg';
import UsaGallery5 from '../../assets/usa-gallery5.jpg';
import UsaGallery6 from '../../assets/usa-gallery6.jpg';


import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


function Usa(props){

    
    const images = [
        {
            original: UsaGallery1,
            thumbnail: UsaGallery1,
            originalTitle : "Kïdo River Place",
            thumbnailLabel : "Kïdo River Place",
        },
        {
            original: UsaGallery2,
            thumbnail: UsaGallery2,
            originalTitle : "Kïdo Rice Village",
            thumbnailLabel : "Kïdo Rice Village",
        },
        {
            original: UsaGallery3,
            thumbnail: UsaGallery3,
            originalTitle : "Kïdo River Place",
            thumbnailLabel : "Kïdo River Place",
        },
        {
            original: UsaGallery4,
            thumbnail: UsaGallery4,
            originalTitle : "Outdoor Play Area",
            thumbnailLabel : "Outdoor Play Area",
        },
        {
            original: UsaGallery5,
            thumbnail: UsaGallery5,
            originalTitle : "Baby Room",
            thumbnailLabel : "Baby Room",
        },
        {
            original: UsaGallery6,
            thumbnail: UsaGallery6,
            originalTitle : "Outdoor Play Area",
            thumbnailLabel : "Outdoor Play Area",
        },
      ];
      

    return(
      <>

        <section className="banner-usa">
            <div className="container-fluid">
                <div className="row">
                    <img src={UsaBanner} className="banner-img img-fluid" alt="usa_banner"/>
                </div>
            </div>
        </section>

        <section className="offering pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="offering-text font-weight-bolder mb-4">Unique offering</h1>
                        <h3>Customised preschool, for everyone</h3>
                        <p>Unlike almost anyone else, we don't have a cookie cutter approach to franchising in the United States. Our model ensures that you can open a school anywhere, on (almost) any piece of real estate, and still deliver the highest quality bilingual English-Spanish preschool program anywhere.</p>
                        <p>Our base in the United States is in Texas, with our existing schools in Houston and Austin. Our international franchise system ensures that we can provide support to any franchisee, anywhere in the country.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className="features py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="card-deck pt-5">
                            <div className="row">
                                <div className="card shadow">
                                    <img src={usaFeature1} className="card-img-top p-3" alt="featureimg"/>
                                    <div className="card-body">
                                    <h3 className="card-title">Bilingual Program</h3>
                                    <p className="card-text">Detailed lesson plans for every day of the school year, with video based resource and delivery training. Delivered electronically</p>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={usaFeature2} className="card-img-top p-3" alt="featureimg"/>
                                    <div className="card-body">
                                    <h3 className="card-title">Real Estate</h3>
                                    <p className="card-text">Proprietary resources for the classroom, including flash cards, work sheets, posters, circle time resources and much more</p>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={usaFeature3} className="card-img-top p-3" alt="featureimg"/>
                                    <div className="card-body">
                                    <h3 className="card-title">Languages</h3>
                                    <p className="card-text">Full curricula for Mandarin and Spanish at native level, synching with the English program for complete bilingual offerings</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-4">
                                <div className="card shadow">
                                    <img src={usaFeature4} className="card-img-top p-3" alt="featureimg"/>
                                    <div className="card-body">
                                    <h3 className="card-title">Toys and Games</h3>
                                    <p className="card-text">Complete guide with instructions on toys and games to use, synched with lesson plans, classroom set up and stations</p>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={usaFeature5} className="card-img-top p-3" alt="featureimg"/>
                                    <div className="card-body">
                                    <h3 className="card-title">Learning Journals</h3>
                                    <p className="card-text">Pre designed learning journals to complete and present to parents at the end of every six week cycle, matching the usa</p>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={usaFeature6} className="card-img-top p-3" alt="featureimg"/>
                                    <div className="card-body">
                                    <h3 className="card-title">Learning Journals</h3>
                                    <p className="card-text">Pre designed learning journals to complete and present to parents at the end of every six week cycle, matching the usa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="usa-gallery bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                    {/* <img src={UsaGallery} className="img-fluid" alt="school_network"/> */}
                    <ImageGallery items={images} showThumbnails={false} onPlay={true}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="financing py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="financing-text font-weight-bolder mb-4">Financing</h1>
                        <p>We are registered with the SBA, so you can finance your preschool. Depending on the real estate type (new construction, renovation), project type (greenfield, brownfield, acquisition), the capital required could be between USD 500,000 to USD 3 million +. It really depends on the project and what you have in mind (of course, we're here to help and guide you). </p>
                        <p>The flexibility of our model means that you could do a new build on clean land, or acquire an already existing school and convert it to a Kïdo (and everything in between). It opens up several opportunities, specially in areas where population density is high and locating real estate may be a problem.</p>
                    </div>
                </div>
            </div>
        </section>
     
      </>

    );

}

export default Usa;