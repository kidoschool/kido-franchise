import React from 'react';
import CurriculumBanner from '../../assets/curiculam-banner.jpg';
import ApprochVideo from '../../assets/curriculum-approch.mp4';
import CurriculumFeature1 from '../../assets/curriculum-feature1.png';
import CurriculumFeature2 from '../../assets/curriculum-feature2.png';
import CurriculumFeature3 from '../../assets/curriculum-feature3.png';
import CurriculumFeature4 from '../../assets/curriculum-feature4.png';
import CurriculumFeature5 from '../../assets/curriculum-feature5.png';
import CurriculumFeature6 from '../../assets/curriculum-feature6.png';




function Curriculum(props){

    return(
      <>

        <section className="banner-curriculum">
            <div className="container-fluid">
                <div className="row">
                    <img src={CurriculumBanner} className="banner-img img-fluid" alt="curriculum_banner"/>
                </div>
            </div>
        </section>

        <section className="pedagogy-text py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="future-text font-weight-bolder mb-4">Pedagogy for the future</h1>
                        <h3 className="exceeding-text mb-4">Exceeding international standards</h3>
                        <p>The future will belong to children who are creative, adaptive, curious and have an ongoing habit of learning. The Kïdo Early Years Program is created with the objective of nurturing and enhancing these innate abilities in children from a very young age. Drawn from years of research, and supported by internationally renowned experts, we have created a free and structured play based program that enables children to exceed standards of any school system in the world by the time they enter primary school.</p>
                        <div className="offering-link text-center py-4">
                            <a href="https://64a46671-a752-4ee4-9521-3a4736fb44a1.filesusr.com/ugd/a1d20b_d20a2524574448f98418490f0f8adc77.pdf" target="_blank" rel="noreferrer" className="my-btn center">Curriculum brochure</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="approach bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <h1 className="approach-text font-weight-bolder mb-4">The approach</h1>
                        <p>Our program incorporates best practices from classical Western pedagogies (Montessori, Reggio Emilia and others), Eastern approaches, and latest research like Multiple Intelligences.</p>
                        <p>Project based learning, problem based learning and thinking based learning form the core of the teaching plans, and enable children to advance quickly across the spectrum of developmental goals. </p>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                    <video width="450" id="vid" className="curriculam-video" controls autoPlay loop muted>
                        <source src={ApprochVideo} type="video/mp4"/>
                        Your browser does not support HTML video.
                    </video> 
                    </div>
                </div>
            </div>
        </section>

        <section className="features py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="features-text font-weight-bolder mb-4">Key features</h1>
                        <p>The Kïdo Early Years Program is a comprehensive curriculum covering twelve areas of development, with our proprietary physical development, math, literacy, art and STEM programs. We have also developed fully bilingual English / Mandarin and English / Spanish programs. Additional languages include Arabic and French. </p>
                        <div className="card-deck pt-5">
                            <div className="row">
                                <div className="card shadow">
                                    <img src={CurriculumFeature1} className="card-img-top p-3" alt="..."/>
                                    <div className="card-body">
                                    <h3 className="card-title">Lesson Plans</h3>
                                    <p className="card-text">Detailed lesson plans for every day of the school year, with video based resource and delivery training. Delivered electronically</p>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={CurriculumFeature2} className="card-img-top p-3" alt="..."/>
                                    <div className="card-body">
                                    <h3 className="card-title">Levelled Books</h3>
                                    <p className="card-text">For literacy and math with observation and assessment frameworks. Can be done at home or in className</p>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={CurriculumFeature3} className="card-img-top p-3" alt="..."/>
                                    <div className="card-body">
                                    <h3 className="card-title">Resources</h3>
                                    <p className="card-text">Proprietary resources for the classroom, including flash cards, work sheets, posters, circle time resources and much more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-4">
                                <div className="card shadow">
                                    <img src={CurriculumFeature4} className="card-img-top p-3" alt="..."/>
                                    <div className="card-body">
                                    <h3 className="card-title">Languages</h3>
                                    <p className="card-text">Full curricula for Mandarin and Spanish at native level, synching with the English program for complete bilingual offerings</p>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={CurriculumFeature5} className="card-img-top p-3" alt="..."/>
                                    <div className="card-body">
                                    <h3 className="card-title">Toys and Games</h3>
                                    <p className="card-text">Complete guide with instructions on toys and games to use, synched with lesson plans, classroom set up and stations</p>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={CurriculumFeature6} className="card-img-top p-3" alt="..."/>
                                    <div className="card-body">
                                    <h3 className="card-title">Learning Journals</h3>
                                    <p className="card-text">Pre designed learning journals to complete and present to parents at the end of every six week cycle, matching the curriculum</p>
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

export default Curriculum;


