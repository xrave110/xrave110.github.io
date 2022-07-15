import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function Header({ setCurrentState }) {
    const [styleClassWhoAmI, setStyleClassWhoAmI] = useState("nav-link active");
    const [styleClassSkills, setStyleClassSkills] = useState("nav-link");
    const [styleClassPortfolio, setStyleClassPortfolio] = useState("nav-link");
    const [styleClassContact, setStyleClassContact] = useState("nav-link");
    const handleWhoAmI = () => {
        setStyleClassWhoAmI("nav-link active")
        setStyleClassSkills("nav-link")
        setStyleClassPortfolio("nav-link")
        setStyleClassContact("nav-link")
        setCurrentState("Who Am I?")
    }
    const handleSkills = () => {
        setStyleClassSkills("nav-link active")
        setStyleClassWhoAmI("nav-link")
        setStyleClassPortfolio("nav-link")
        setStyleClassContact("nav-link")
        setCurrentState("Skills")
    }
    const handlePortfolio = () => {
        setStyleClassPortfolio("nav-link active")
        setStyleClassSkills("nav-link")
        setStyleClassWhoAmI("nav-link")
        setStyleClassContact("nav-link")
        setCurrentState("Portfolio")
    }
    const handleContact = () => {
        setStyleClassContact("nav-link active")
        setStyleClassSkills("nav-link")
        setStyleClassPortfolio("nav-link")
        setStyleClassWhoAmI("nav-link")
        setCurrentState("Contact")
    }
    return (
        <div className="container">
            <header className="header-style py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                    <span className="fs-4">xRave110 portfolio</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" onClick={handleWhoAmI} className={styleClassWhoAmI} aria-current="page">Who am I?</a></li>
                    <li className="nav-item"><a href="#" onClick={handleSkills} className={styleClassSkills}>Skills</a></li>
                    <li className="nav-item"><a href="#" onClick={handlePortfolio} className={styleClassPortfolio}>Portfolio</a></li>
                    <li className="nav-item"><a href="#" onClick={handleContact} className={styleClassContact}>Contact</a></li>
                </ul>
            </header>
        </div>
        // <Nav variant="tabs" defaultActiveKey="/home">
        //     <Nav.Item>
        //         <Nav.Link href="/home">Active</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="disabled" disabled>
        //             Disabled
        //         </Nav.Link>
        //     </Nav.Item>
        // </Nav>
    );
}

export default Header;