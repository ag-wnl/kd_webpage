import { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component{
    

    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }    
    render() {

        window.addEventListener('scroll', function() {
            var navbarElements = document.getElementsByClassName('nav');
            var navbar = navbarElements[0];
            if (window.scrollY > 0) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
        });

    return (
        <>
            <nav className="nav">

                <Link to="/home">
                    <div class="title-box">
                        <span href="/" className="brand_title">Kacche Dhaage</span>
                        <span className="tag-line">~ Let the Childhood Blossom ~</span>                    
                    </div>
                </Link>
                

                <div>
                    <ul id='navbar-right' className={this.state.clicked ? ".navbar-right active" : ".navbar"}>
                        <li>
                            <a href="/"><Link to="/team">Team</Link></a>
                        </li>
                        <li>
                            <a href="/">Gallery</a>
                        </li>
                        <li>
                            <a href="/">Upcoming Events</a>
                        </li>
                        <li>
                            <a href="/"><Link to="/about">About</Link></a>
                        </li>
                        
                    </ul>
                </div>

                <div id='mobile' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    
                </div>
                

            </nav>
            <script src="./navbar_script.js"></script>
        </>
    )
    }
}

export default Navbar