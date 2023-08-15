import Footer from '../Footer'
import Navbar from '../Navbar'
import '../index.css'
import instagram from "../imgs/instagram_icon.svg"
import linkedin from "../imgs/linkedin_icon.svg"



function Team() {
    return (
        <>
            <Navbar />

            <div class="about-text">

                <div>
                    <h2 class='about-subtitle-title'>Our Team</h2>        
                </div>

                <div class='sub-heading-text'>
                    <h2 class='about-subtitle'>The Founders</h2>     
                    <h3 class='about-subtitle'>Anagha Nambiar</h3>
                    <h5 class='tagline'>Founder</h5>
                    <div>
                        Anagha Nambiar is a business student, social worker, public speaker, and dancer by heart. With 5+ years of working experience in NPOs, she has been actively involved in social work since her school time. She is a compassionate and empathetic human being, working on the mission to educate everyone and eradicate Child Abuse from society. Her fondness for children has brought her forward to work for them and do her bit to give them a better livelihood. Apart from Kacche Dhaage, she is also the Secretary Reporting of the Rotaract Club of Delhi Elite, a nonprofit organization, working to serve society. 
                    </div>
                    <div class='icons'>
                        <a href='https://instagram.com/anagha_nambiar?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' target="_blank">
                            <img width={30} src={instagram} />
                        </a>

                        <a href='https://www.linkedin.com/in/anagha-nambiar-b3228a271' target="_blank">
                            <img width={30} src={linkedin} />
                        </a>
                        
                    </div>

                    <h3 class='about-subtitle'>Priyanshi Chaudhary</h3>
                    <h5 class='tagline'>Co-Founder</h5>
                    <div>
                        Priyanshi Chaudhary, a passionate girl from Delhi is currently pursuing her Associate's Degree in Science in Interior Designing from Cañada College, California. She is a free-spirited girl who always chases her dreams and finds bliss in the happiness of others. Thank heavens, she was raised in a safe environment but many were not. Now she wants every child to live in a society where no more child abuse exists. And this inspired her to commence Kacche Dhaage. 
                    </div>
                    {/* <div class='icons'>
                        <a href='https://instagram.com/anagha_nambiar?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' target="_blank">
                            <img width={30} src={instagram} />
                        </a>

                        <a href='https://www.linkedin.com/in/anagha-nambiar-b3228a271' target="_blank">
                            <img width={30} src={linkedin} />
                        </a>
                        
                    </div> */}


                </div>

                <div class='sub-heading-text'>
                    <h1 class='about-subtitle-title'>Meet The Team</h1>     
                    <h2 class='about-subtitle'>Shefali Prakash  </h2>
                    <h5 class='tagline'>Founding Member and Public Relations Manager</h5>

                         
                    <h2 class='about-subtitle'>Sahil Kaul</h2>
                    <h5 class='tagline'>Multimedia Designer</h5>

                    <h2 class='about-subtitle'>Nishtha Varun</h2>
                    <h5 class='tagline'>Volunteer</h5>

                    <h2 class='about-subtitle'>Harshita Aggarwal</h2>
                    <h5 class='tagline'>Volunteer</h5>

                    <h2 class='about-subtitle'>Kanchan Munjal</h2>
                    <h5 class='tagline'>Volunteer</h5>
                    

                </div>

                </div>


            <Footer />
        </>
    )
}

export default Team