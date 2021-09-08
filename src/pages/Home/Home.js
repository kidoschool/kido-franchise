import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Map3 from "../../components/Map/Map3";
// import ParentsBanner from '../../assets/parents-banner.jpg';
import $ from "jquery";


function Home(props) {
    const centerContents1 = {"centers" : [
        {
            "id": 7106,
            "name": "Safari Kid Chembur Preschool and Day care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Crystal III, Sindhi Society, Chembur, Mumbai -400071</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:chembur@safarikidindia.com\">chembur@safarikidindia.com</a><br><a href=\"tel:9817769817\">9817769817</a><br></p>",
            "img": "https://china.kido.school/assets/Safari-Kid-Chembur-1.jpg",
            "lng": 72.89224,
            "lat": 19.04276,
            "city": 6863,
            
        },
        {
            "id": 7081,
            "name": "Safari Kid Indiranagar Preschool & Day Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>NO 1074-G, MAIN ROAD HAL 2ND STAGE, INDIRANAGAR,Bengaluru  Urban, Karnataka, 560038</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:indiranagar@safarikidindia.com\">indiranagar@safarikidindia.com</a><br><a href=\"tel:6364338080/ 6364337070\">6364338080/ 6364337070</a><br></p>",
            "img": "https://china.kido.school/assets/IMG-20180111-WA0000.jpg",
            "lng": 77.63844,
            "lat": 12.97094,
            "city": 6863
            
        },
        {
            "id": 7078,
            "name": "Safari Kid Kalyan Nagar Preschool & Day Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>No 5C-705, 5th Cross Rd, 7th Main Rd, HRBR Layout, First Block, Kalyan Nagar, Bengaluru, Karnataka  560043</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:prm.kalyannagar@safarikidindia.com\">prm.kalyannagar@safarikidindia.com</a><br><a href=\"tel:8494939398\">8494939398</a><br></p>",
            "img": "https://china.kido.school/assets/Safari-Kid-Kalyan-Nagar.jpg",
            "lng": 77.63286,
            "lat": 13.025718,
            "city": 6863
        }, 
        {
            "id": 7075,
            "name": "Safari Kid HSR Preschool & Day Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>51, MCHS Layout, 15th A Cross Road, Sector 4, HSR Layout, Near BDA Complex, Bangalore 560102, India<br />\r\n</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:hsr@safarikidindia.com\">hsr@safarikidindia.com</a><br><a href=\"tel:9148500002/ 9148500003\">9148500002/ 9148500003</a><br></p>",
            "img": "https://china.kido.school/assets/sAFARI-kiD-HSR.jpeg",
            "lng": 77.639356,
            "lat": 12.913719,
            "city": 6863
        },
        {
            "id": 7072,
            "name": "Safari Kid Sadashiva Nagar Preschool & Day Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>No 16, 2nd Main Rd, 13 cross, Vyalikaval, Adjacent to ICICI bank, Sadashiva Nagar Branch, Bengaluru, Karnataka 560003</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:ssn@safarikidindia.com\">ssn@safarikidindia.com</a><br><a href=\"tel:6366 555 700\">6366 555 700</a><br></p>",
            "img": "https://china.kido.school/assets/images/safari-Kid-Sadashiva-Nagar-1.jpeg",
            "lng": 77.578349,
            "lat": 13.0039072,
            "city": 6863
        },
        {
            "id": 7069,
            "name": "Safari Kid Whitefield Preschool & Day Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>The Sommer House,186/A, Opp Forum Value Mall, Whitefield, Bangalore 560066, India</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:whitefield@safarikidindia.com\">whitefield@safarikidindia.com</a><br><a href=\"tel:9513138400/9513138500\">9513138400/9513138500</a><br></p>",
            "img": "https://china.kido.school/assets/images/Safri-Kid-Whitefield-scaled.jpg",
            "lng": 77.746849,
            "lat": 12.960055,
            "city": 6863
           
        },
        {
            "id": 7062,
            "name": "Safari Kid Jubilee Hills Nursery and Daycare",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>1175, Road number 55, CBI Colony, Jubilee Hills, Hyderabad, Telegana. - 500033 ( Current name for the address Jyothi Srinivasam apts)</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:jubileehills@safarikidindia.com\">jubileehills@safarikidindia.com</a><br><a href=\"tel:91 9963943343\">91 9963943343</a><br></p>",
            "img": "https://china.kido.school/assets/images/World-className-infrastructure-1-1.jpg",
            "lng": 78.40526,
            "lat": 17.42912,
            "city": 6863
            
        },
        {
            "id": 7059,
            "name": "Safari Kid Kowdiar Nursery and Daycare",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>TC 9/427 A, 19. Jawahar Nagar, Trivandrum, Kerala 695003</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:kowdiar@safarikidindia.com\">kowdiar@safarikidindia.com</a><br><a href=\"tel:9400851846 / 9400851486\">9400851846 / 9400851486</a><br></p>",
            "img": "https://china.kido.school/assets/images/IMG-20201116-WA0009.jpg",
            "lng": 76.9647,
            "lat": 8.51635,
            "city": 6863
            
        },
        {
            "id": 7034,
            "name": "Safari Kid Phase IV Nursery and Daycare",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Plot No 4401, DLF Phase IV, Near Galleria Market, Gurugram, India</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:info.gurugram@safarikidindia.com\">info.gurugram@safarikidindia.com</a><br><a href=\"tel:9773841887/ 9773845803\">9773841887/ 9773845803</a><br></p>",
            "img": "https://china.kido.school/assets/images/Safari-Kid-Gurugram-.jpg",
            "lng": 77.082013,
            "lat": 28.467316,
            "city": 6863
            
        },
        {
            "id": 7011,
            "name": "Safari Kid Sohna Road Nursery and Daycare",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Nursery Site 3, Next to Park Hospital, Malibu Town, Sohna Road, Gurugram, India</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:sohnaroad@safarikidindia.com\">sohnaroad@safarikidindia.com</a><br><a href=\"tel:9350999777\">9350999777</a><br></p>",
            "img": "https://china.kido.school/assets/images/Safari-Kid-Sohna-Road.jpg",
            "lng": 77.049569,
            "lat": 28.420246,
            "city": 6863
            
        },
        {
            "id": 6983,
            "name": "Safari Kid Kharadi Preschool & Day Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Behind EON IT Park, Grant Road, Vitthal Nagar, Kharadi, Pune 411014, India</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:kharadi@safarikidindia.com\">kharadi@safarikidindia.com</a><br><a href=\"tel:9763558606\">9763558606</a><br></p>",
            "img": "https://china.kido.school/assets/images/safari-Kid-Kharadi-1.jpg",
            "lng": 77.955376,
            "lat": 18.549132,
            "city": 6863
          
        },
        {
            "id": 6966,
            "name": "Safari Kid Koregaon Park Preschool & Day Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Mundhwa Road, Koregaon Park Annexe, Near Nitesh Hub Mall, Behind Euriska Restaurant, Pune 411001, India</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:Koregaon@safarikidia.com\">Koregaon@safarikidia.com</a><br><a href=\"tel:7030202020\">7030202020</a><br></p>",
            "img": "https://china.kido.school/assets/images/Koregaon-park-1.jpg",
            "lng": 73.908948,
            "lat": 18.537396,
            "city": 6863
           
        },
        {
            "id": 6960,
            "name": "Safari Kid Upper Worli Nursery and Daycare",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Plot no 25 ,Fortune House , Raghuvanshi Mills, Senapati Bapat Marg, Gandhi Nagar, Upper Worli, Mumbai- 400013</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:upperworli@safarikidindia.com\">upperworli@safarikidindia.com</a><br><a href=\"tel:9004870707\">9004870707</a><br></p>",
            "img": "https://china.kido.school/assets/images/Early-Explorers-className-Phase-Iv-centre.jpg",
            "lng": 72.82487,
            "lat": 18.99236,
            "city": 6863
            
        },
        {
            "id": 6949,
            "name": "Safari Kid Marol Preschool & Day Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Vasu Chemicals, Military road opp Blossom Society, Marol Andheri East Mumbai 400059, India</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:marol@safarikidindia.com\">marol@safarikidindia.com</a><br><a href=\"tel:7045033600\">7045033600</a><br></p>",
            "img": "https://china.kido.school/assets/images/IMG_20201126_123520.jpg",
            "lng": 72.8795696,
            "lat": 19.117015,
            "city": 6863
            
        },
        {
            "id": 6922,
            "name": "Safari Kid Borivali Preschool & Nursery",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Bhattad Tower, 1st Floor, B Wing, RM Bhattad Road, Borivali West. Mumbai 92, India</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:borivali@safarikidindia.com\">borivali@safarikidindia.com</a><br><a href=\"tel:7710099994\">7710099994</a><br></p>",
            "img": "https://china.kido.school/assets/images/Borivali-centre.jpg",
            "lng": 72.850186,
            "lat": 19.220758,
            "city": 6863
           
        },
        {
            "id": 6889,
            "name": "Safari Kid Juhu Preschool & Nursery",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Seema Plot No 287/6, Gulmohar Road No 1, Opp Irla Masjid, J.V.P.D. Scheme, Vile Parle (W), Mumbai 400049, India</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:juhu@safarikidindia.com\">juhu@safarikidindia.com</a><br><a href=\"tel:+91 9987 840 606, +91 9820397715\">+91 9987 840 606, +91 9820397715</a><br></p>",
            "img": "https://china.kido.school/assets/images/Safari-Kid-Juhu.jpg",
            "lng": 72.836986,
            "lat": 19.112745,
            "city": 6863
           
        },
        {
            "id": 6875,
            "name": "Safari Kid Bandra Preschool & Child Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Bait-Al-Bahar, Rizvi Complex, off Carter Road, Bandra West, Mumbai, Maharashtra 400050</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:bandra@safarikidindia.com\">bandra@safarikidindia.com</a><br><a href=\"tel:+91 9987550303\">+91 9987550303</a><br></p>",
            "img": "https://china.kido.school/assets/images/Safari-kid-Play-School-and-Child-Care-Bandra.jpg",
            "lng": 72.823786,
            "lat": 19.06801,
            "city": 6863
            
        },
        {
            "id": 6841,
            "name": "Greenwich Nursery and Preschool",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>65 Banning Street, London, SE 10 0YH</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:greenwich@kido.school\">greenwich@kido.school</a><br><a href=\"tel:+44 7776 685200\">+44 7776 685200</a><br></p>",
            "img": "https://china.kido.school/assets/images/Kido-Greenwich_internal-scaled.jpg",
            "lng": 0.003376,
            "lat": 51.48828,
            "city": 5848
        
        },
        {
            "id": 6356,
            "name": "Kïdo Repulse Bay Nursery & Child Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Shop G106A - 107A, The Repulse Bay, 109 Repulse Bay Road, Hong Kong</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:repulsebay@kido.school\">repulsebay@kido.school</a><br><a href=\"tel:+852 2874 3007\">+852 2874 3007</a><br></p>",
            "img": "https://china.kido.school/assets/images/Repulse-Bay-1400-by-700_01.jpg",
            "lng": 114.196269,
            "lat": 22.239194,
            "city": 6324
            
        },
        {
            "id": 6327,
            "name": "Kïdo Pok Fu Lam Kindergarten",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>L101 Chi Fu Landmark, Chi Fu Fa Yuen, Pok Fu Lam, Hong Kong</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:infohk@kido.school\">infohk@kido.school</a><br><a href=\"tel:+852 2177 0001\">+852 2177 0001</a><br></p>",
            "img": "https://china.kido.school/assets/images/POK-FU-LAM-1400-by-700_01-1.jpg",
            "lng": 114.138765,
            "lat": 22.257686,
            "city": 6324
           
        },
        {
            "id": 6261,
            "name": "Kïdo Meydan District One Nursery",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Unit CC01.03, Nursery Unit, District One, Sheikh Mohammed Bin Rashid Al Maktoum City,<br />\r\n</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:meydan@kido.school\">meydan@kido.school</a><br><a href=\"tel:+971 50 974 3101\">+971 50 974 3101</a><br></p>",
            "img": "https://china.kido.school/assets/images/Meydan-Out.jpg",
            "lng": 55.274522,
            "lat": 25.164243,
            "city": 6107
          
        },
        {
            "id": 6252,
            "name": "Kïdo Jumeirah Beach Residency Nursery",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Plaza Level, Rimal 5, The Walk, Jumeirah Beach Residence, Dubai, UAE</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:jbr@kido.school\">jbr@kido.school</a><br><a href=\"tel:+971 50 454 8879 / 050 495 3101 /  04 440 1220\">+971 50 454 8879 / 050 495 3101 /  04 440 1220</a><br></p>",
            "img": "https://china.kido.school/assets/images/JBR-1400-by-700_02.jpg",
            "lng": 55.133031,
            "lat": 25.076085,
            "city": 6107
           
        },
        {
            "id": 6243,
            "name": "Kïdo Nursery Sheikh Zayed Road",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Villa 36, Street 61, Satwa, Behind Four Points Sheraton, Sheikh Zayed Road, Dubai, UAE</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:szr@kido.school\">szr@kido.school</a><br><a href=\"tel:971 50 4548 879 / +971 4 3597 398 / +971 50 582 3101\">971 50 4548 879 / +971 4 3597 398 / +971 50 582 3101</a><br></p>",
            "img": "https://china.kido.school/assets/images/SZR-1400-by-700_01.jpg",
            "lng": 55.27352,
            "lat": 25.215881,
            "city": 6107
            
        },
        {
            "id": 6128,
            "name": "Chiswick Nursery and Preschool",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Unit A & B, Edmunds House, Colonial Drive, Chiswick, London W4 5HA, United Kingdom</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:chiswick@kido.school\">chiswick@kido.school</a><br><a href=\"tel:+44 020 8994 6656\">+44 020 8994 6656</a><br></p>",
            "img": "https://china.kido.school/assets/images/Chiswick-Centre-Pages-3-Header.jpg",
            "lng": -0.270199,
            "lat": 51.494789,
            "city": 5848
            
        },
        {
            "id": 6126,
            "name": "Clerkenwell Nursery and Preschool",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Clements Hall, 141 Central Street, Clerkenwell, London EC1V 8AP, UK</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:clerkenwell@kido.school\">clerkenwell@kido.school</a><br><a href=\"tel:+44 020 7684 3172\">+44 020 7684 3172</a><br></p>",
            "img": "https://china.kido.school/assets/images/Clerkenwell-Centre-Pages-3-Header.jpg",
            "lng": -0.097274,
            "lat": 51.527976,
            "city": 5848
            
        },
        {
            "id": 6125,
            "name": "Camden Nursery and Preschool",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Spiritualist Temple, Rochester Square, Camden, London NW1 9RY, United Kingdom</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:camden@kido.school\">camden@kido.school</a><br><a href=\"tel:+44 020 7428 9773\">+44 020 7428 9773</a><br></p>",
            "img": "https://china.kido.school/assets/images/Camden-Centre-Pages-3-Header.jpg",
            "lng": -0.1378577,
            "lat": 51.543422,
            "city": 5848
        },
        {
            "id": 6124,
            "name": "Golders Green Nursery and Preschool",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>St Albans Church Hall, W Heath Dr, Golders Green, London NW11 7QG, United Kingdom</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:goldersgreen@kido.school\">goldersgreen@kido.school</a><br><a href=\"tel:+44 20 8209 0247\">+44 20 8209 0247</a><br></p>",
            "img": "https://china.kido.school/assets/images/Golders-Green-Centre-Pages-Header-3.jpg",
            "lng": -0.192741,
            "lat": 51.571037,
            "city": 5848
           
        },
        {
            "id": 6121,
            "name": "Wandsworth Nursery and Preschool",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Unit 3B.04, Ram Quarter, Wandsworth High St, London, SW18 1TH, UK</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:wandsworth@kido.school\">wandsworth@kido.school</a><br><a href=\"tel:+44 20 8875 0880\">+44 20 8875 0880</a><br></p>",
            "img": "https://china.kido.school/assets/images/Wandsworth-Centre-Pages-Header-1.jpg",
            "lng": -0.193057,
            "lat": 51.457763,
            "city": 5848
           
        },
        {
            "id": 6117,
            "name": "Windsor Nursery and Preschool",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Kingdom Hall, Grove Rd, Windsor SL4 1JE, United Kingdom</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:windsor@kido.school\">windsor@kido.school</a><br><a href=\"tel:+44 1753 866866\">+44 1753 866866</a><br></p>",
            "img": "https://china.kido.school/assets/images/Windsor-Centre-Pages-Header-1.jpg",
            "lng": -0.6089141,
            "lat": 51.4772754,
            "city": 5848
            
        },
        {
            "id": 5478,
            "name": "River Place Preschool and Day Care",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>10625 Bonaventure Drive, Austin, TX 78730</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:riverplace@kido.school\">riverplace@kido.school</a><br><a href=\"tel:1-855 688-5436, 1-512 557-1152\">1-855 688-5436, 1-512 557-1152</a><br></p>",
            "img": "https://china.kido.school/assets/images/IMAGE2-1.jpg",
            "lng": -97.846525,
            "lat": 30.390817,
            "city": 5481
           
        },
        {
            "id": 5115,
            "name": "Crouch End Nursery and Preschool",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>Earl Haig Hall, 18 Elder Avenue, Crouch End, N8 9DE</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:crouchend@kido.school\">crouchend@kido.school</a><br><a href=\"tel:+44 02082453648\">+44 02082453648</a><br></p>",
            "img": "https://china.kido.school/assets/images/Crouch-End-Centre-Pages-2-1.jpg",
            "lng": -0.121613,
            "lat": 51.580826,
            "city": 5848
            
        },
        {
            "id": 3357,
            "name": "Rice Village Preschool - Open for Admission",
            "intro": "<h1 className=\"font-h6\">Address</h1><address>2329 Bissonnet St, Houston, TX 77005</address><h1 className=\"font-h6\">Contact</h1><p><a href=\"mailto:ricevillage@kido.school\">ricevillage@kido.school</a><br><a href=\"tel:1-855 600-5436\">1-855 600-5436</a><br></p>",
            "img": "https://china.kido.school/assets/images/Kido-Houston-Front.jpg",
            "lng": -95.414125,
            "lat": 29.725389,
            "city": 3345
        }
    ]
     
    }


    const [ map_zoom, setMap_zoom ] = useState("");
    const [ map_centre, setMap_centre ] = useState({lat: 19,lng: 10});




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
                                <p>We are creating a global platform dedicated to delivering the highest quality early years education anywhere in the world. We are integrating advances in pedagogy, technology and design to create unique learning experiences for children.</p>
                                <p>Partner with us as a master franchisee, area developer, or unit franchisee anywhere in the world and discover the power of the most comprehensive early years preschool franchise system created anywhere. Our franchise model rests on our ability and commitment to make our franchisees successful.</p>
                            </div>
                            <div className="contact-link text-center py-4">
                                <Link to="/parent" className="my-btn center">Contact us</Link>
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
                                <Link to="/parent" className="my-btn center">Download the brochure</Link>
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
                                <Link to="/parent" className="my-btn center">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="con-map pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                    <Map3 centerContents1={centerContents1} map_centre={map_centre} map_zoom={2}   />
                    </div>
                </div>
            </div>  
        </section>

                   
        </>
    )
}


export default Home;