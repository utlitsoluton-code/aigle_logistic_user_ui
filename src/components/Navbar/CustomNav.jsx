import React, { useState } from 'react';
import './nav.css';
// import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'bootstrap';
import {  Button, CardBody, Card,  UncontrolledCollapse } from 'reactstrap';
import { Offcanvas, OffcanvasHeader, OffcanvasBody, } from 'reactstrap';
const CustomNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const cities = [
        [
            { name: 'Delhi Transport Service', link: '#' },
            { name: 'Mumbai Transport Service', link: '#' },
            { name: 'Kolkata Transport Service', link: '#' },
            { name: 'Chennai Transport Service', link: '#' },
            { name: 'Bangalore Transport Service', link: '#' },
            { name: 'Hyderabad Transport Service', link: '#' },
            { name: 'Ahmedabad Transport Service', link: '#' },
            { name: 'Pune Transport Service', link: '#' },
            { name: 'Jaipur Transport Service', link: '#' },
            { name: 'Lucknow Transport Service', link: '#' },
        ],
        [
            { name: 'Kanpur Transport Service', link: '#' },
            { name: 'Nagpur Transport Service', link: '#' },
            { name: 'Indore Transport Service', link: '#' },
            { name: 'Thane Transport Service', link: '#' },
            { name: 'Bhopal Transport Service', link: '#' },
            { name: 'Visakhapatnam Transport Service', link: '#' },
            { name: 'Pimpri-Chinchwad Transport Service', link: '#' },
            { name: 'Patna Transport Service', link: '#' },
            { name: 'Vadodara Transport Service', link: '#' },
            { name: 'Ghaziabad Transport Service', link: '#' }
        ]
    ]
    const rout = [
        [
            { name: 'Delhi to Agra', href: '#', hoverColor: '#773f1a' },
            { name: 'Mumbai to Delhi', href: '#', hoverColor: '#884e29' },
            { name: 'Goa to Shimla', href: '#' },
            { name: 'Surat to Kerala', href: '#' },
            { name: 'Pune to Mumbai', href: '#' },
            { name: 'Mumbai to Goa', href: '#', hoverColor: '#664228' },
            { name: 'Mumbai to Surat', href: '#', hoverColor: '#55371b' },
            { name: 'Mumbai to Pune', href: '#', hoverColor: '#442c14' },
            { name: 'Mumbai to Delhi', href: '#', hoverColor: '#884e29' },
            { name: 'Kolkata to Varanasi', href: '#' },
        ],
        [
            { name: 'Jaipur to Udaipur', href: '#' },
            { name: 'Chennai to Bengaluru', href: '#' },
            { name: 'Hyderabad to Visakhapatnam', href: '#' },
            { name: 'Bhopal to Indore', href: '#' },
            { name: 'Lucknow to Kanpur', href: '#' },
            { name: 'Chandigarh to Amritsar', href: '#' },
            { name: 'Dehradun to Nainital', href: '#' },
            { name: 'Ahmedabad to Rajkot', href: '#' },
            { name: 'Shillong to Guwahati', href: '#' }
        ]
    ];
    const warmHoverColors = [
        '#E0FFCD',
        '#FDFFCD',
        '#FFEBBB',
        '#FFCAB0',
        '#FDFFAB',
        '#FFAAA5',
        '#11CBD7',
        '#C6F1E7',
        '#F0FFF3',
        '#FA4659',
        '#D4A5A5',
    ];


    const darkHoverTexts = warmHoverColors.map((color) => {
        const hslColor = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
        if (hslColor) {
            const h = parseInt(hslColor[1], 16) / 255;
            const s = parseInt(hslColor[2], 16) / 255;
            const l = parseInt(hslColor[3], 16) / 255;
            const newL = Math.max(0, l - 0.6);
            return `hsl(${h * 360}, ${s * 100}%, ${newL * 100}%)`;
        }
        return color;
    });

    const handleHover = (event, index) => {
        const hoverColor = rout[index]?.hoverColor || darkHoverTexts[index % darkHoverTexts.length];

        event.target.style.backgroundColor = warmHoverColors[index % warmHoverColors.length];
        event.target.style.color = hoverColor;
        event.target.style.borderRadius = '5px';
        event.target.style.transition = 'border-color 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out';
    };

    const handleLeave = (event) => {
        event.target.style.backgroundColor = '';
        event.target.style.color = '';
        event.target.style.borderRadius = '0';
        event.target.style.transition = '';
    };
    const toggleMobileMenu = () => setIsOpen(!isOpen);
    // const toggleCitiesMenu = () => setIsOpen(!isOpen);
    const [isOpenRoutes, setIsOpenRoutes] = useState(false);
  const [isOpenCities, setIsOpenCities] = useState(false);
  const toggleRoutesMenu = () => setIsOpenRoutes(!isOpenRoutes);
  const toggleCitiesMenu = () => setIsOpenCities(!isOpenCities);
    return (
        <nav className="navbar header-menu navbar-expand-lg navbar-light px-lg-5">
            <div className="container">
                <a className="navbar-brand" href="#" title="Logo">
                    <h1>Logo</h1>
                </a>
                <Button
                    className="mobile-toggler"
                    title="Mobile toggler button"
                >
                    <i className="ri-menu-2-line" onClick={toggle} />
                </Button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav mx-4">
                        <li className="nav-item mega-menu">
                            <a className="nav-link" href="#">
                                Routes <i className="ri-arrow-down-s-line" />
                            </a>
                            <div className="dropdown-mega-menu  bg-white">
                                <div className="row">
                                    {rout.map((column, columnIndex) => (
                                        <div className="col-md-6" key={columnIndex}>
                                            <ul className="mega-menu-category">
                                                {column.map((route, index) => (
                                                    <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                        <a href={route.href}>{route.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className="nav-item  mega-menu">
                            <a className="nav-link" href="#">
                                Cities <i className="ri-arrow-down-s-line" />
                            </a>
                            <div className="dropdown-mega-menu bg-white">
                                <div className="row">
                                    {cities.map((column, columnIndex) => (
                                        <div className="col-md-6" key={columnIndex}>
                                            <ul className="mega-menu-category">
                                                {column.map((city, index) => (
                                                    <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                        <a href={city.link}>{city.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <Offcanvas isOpen={isOpen} toggle={toggle} direction="end">
                    <OffcanvasHeader toggle={toggle}>
                        Menus
                    </OffcanvasHeader>
                    <OffcanvasBody>

                        <button className="nav-link position-relative"  id="routes-menu-button" onClick={toggleRoutesMenu}>
                            Routes <i className="ri-arrow-down-s-line" 
                                style={{
                                    marginBottom: '1rem'
                                }} />

                        </button>
                        <UncontrolledCollapse toggler="#routes-menu-button">
                            <Card>
                                <CardBody>
                                    <div className={`mobile-megamenu ${isOpen ? 'show' : ''}`}>
                                        <div className="row">
                                            {rout.map((column, columnIndex) => (
                                                <div className="col-md-12 mobile-border" key={columnIndex}>
                                                    <ul className="mega-menu-category" key={columnIndex}>
                                                        {column.map((route, index) => (
                                                            <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                                <a href={route.href}>{route.name}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                        <button className="nav-link position-relative second-mobile" id="cities-menu-button" onClick={toggleCitiesMenu}>
                            Cities <i className="ri-arrow-down-s-line" 
                                style={{
                                    marginBottom: '1rem'
                                }} />

                        </button>
                        <UncontrolledCollapse toggler="#cities-menu-button">
                            <Card>
                                <CardBody>
                                    <div className={`mobile-megamenu ${isOpen ? 'show' : ''}`}>
                                        <div className="row">
                                            {cities.map((column, columnIndex) => (
                                                <div className="col-md-12 mobile-border" key={columnIndex}>
                                                    <ul className="mega-menu-category" key={columnIndex}>
                                                        {column.map((city, index) => (
                                                            <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                                <a href={city.href}>{city.name}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                    

                    </OffcanvasBody>
                </Offcanvas>
            </div>


        </nav>
    );
};

export default CustomNavbar;
