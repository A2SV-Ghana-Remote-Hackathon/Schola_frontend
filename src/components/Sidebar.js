import React from 'react';

function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item pt-3">
                    <a className="nav-link" href="index.html">
                        <i className="bi bi-grid"></i>
                        <span>Home</span>
                    </a>
                </li>
                {/* End Home Nav */}
                <li className="nav-heading pt-3">My Communities</li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="community.html">
                        <i className="bi bi-person"></i>
                        <span>Voodoo</span>
                    </a>
                </li>
                {/* End Profile Page Nav */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-faq.html">
                        <i className="bi bi-question-circle"></i>
                        <span>Pixel</span>
                    </a>
                </li>
                {/* End F.A.Q Page Nav */}
                <li className="nav-heading pt-3">Joined Communities</li>
                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>
                {/* End Search Bar */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-contact.html">
                        <i className="bi bi-envelope"></i>
                        <span>Code Junkies</span>
                    </a>
                </li>
                {/* End Contact Page Nav */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-register.html">
                        <i className="bi bi-card-list"></i>
                        <span>Julorbi</span>
                    </a>
                </li>
                {/* End Register Page Nav */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-login.html">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Rubik's Cube</span>
                    </a>
                </li>
                {/* End Login Page Nav */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-error-404.html">
                        <i className="bi bi-dash-circle"></i>
                        <span>Felix's Heartbreak</span>
                    </a>
                </li>
                {/* End Error 404 Page Nav */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-blank.html">
                        <i className="bi bi-file-earmark"></i>
                        <span>Blank</span>
                    </a>
                </li>
                {/* End Blank Page Nav */}
            </ul>
        </aside>
        /* End Sidebar */
    );
}

export default Sidebar;
