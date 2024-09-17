import React, { useRef, useEffect } from "react";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import styled, { createGlobalStyle } from "styled-components";
import bg from './img/balloonartsection.png'
import bg2 from './img/facepaintsection.png'
import bg3 from './img/balloonhall.png'
import bg4 from './img/floating.png'
import bg5 from './img/confetti2.png'
import bg6 from './img/flowerballoon.png'
import './FullPageScroll.css';

const GlobalStyle = createGlobalStyle`
  body, p, h1, h2, h3, h4, h5, h6, ul, li {
    font-family: 'Playfair Display', serif, 'Times New Roman', Times, serif !important;
    margin: 0;
    padding: 0;
  }

  .fp-section {
    font-family: 'Playfair Display', serif, 'Times New Roman', Times, serif !important;
  }
`;

const FullPageScroll = () => {
    const SectionStyle ={
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    };

    const NavbarStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px',
      color: 'white',
      overflow: 'hidden', // Ensure the message stays within the navbar
      zIndex: 1000,
      fontSize: '1.5em'
  };

  const movingMessageStyle = {
    animation: 'moveMessage 18s linear infinite', // Adjust duration and animation type as needed
  };
  const fullpageApiRef = useRef(null);

  const handleFullpageInit = (api) => {
    fullpageApiRef.current = api;
  };

  useEffect(() => {
    const fullpageInstance = new Fullpage('#fullpage', {
      // Fullpage options...
    });
  
    console.log('Fullpage Instance:', fullpageInstance);
  
    fullpageApiRef.current = fullpageInstance;
  
    return () => {
      if (fullpageApiRef.current && typeof fullpageApiRef.current.destroy === 'function') {
        fullpageApiRef.current.destroy('all');
      }
    };
  }, []);

  return (
    <div>
            <style>
        {`
          @keyframes moveMessage {
            0% {
              transform: translateX(900%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <div>
        <GlobalStyle/>
      <div style={NavbarStyle}>
      <div style={{ ...movingMessageStyle, marginRight: 'auto' }}>Call us at 657-236-7755 for a quote.</div>
      </div>
      <div id="fullpage">
        <Fullpage onInit={handleFullpageInit}>
          <FullpageNavigation />
          <FullPageSections>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${bg4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div style={{ textAlign: 'center', color: 'white', marginTop: '2vh' }}>
              <h1
                style={{
                  fontSize: '4vw',
                  marginBottom: '1vh',
                  textDecoration: 'underline',
                  marginTop: '5vh',
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                O.C. Balloons and Face Painting
              </h1>
              <ul
                style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2vw',
                  lineHeight: 1,
                }}
              >
                <li
                  style={{
                    marginRight: '0.5em',
                    transition: 'color 0.3s ease-in-out',
                    color: 'white',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#FF0000')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Family Reunions
                </li>
                <span style={{ margin: '0 0.5em', color: 'white' }}>•</span>
                <li
                  style={{
                    marginRight: '0.5em',
                    transition: 'color 0.3s ease-in-out',
                    color: 'white',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#00FF00')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Work Events
                </li>
                <span style={{ margin: '0 0.5em', color: 'white' }}>•</span>
                <li
                  style={{
                    marginRight: '0.5em',
                    transition: 'color 0.3s ease-in-out',
                    color: 'white',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#FFC0CB')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Birthday Parties
                </li>
                <span style={{ margin: '0 0.5em', color: 'white' }}>•</span>
                <li
                  style={{
                    marginRight: '0.5em',
                    transition: 'color 0.3s ease-in-out',
                    color: 'white',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#FFA500')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Baby Showers
                </li>
                <span style={{ margin: '0 0.5em', color: 'white' }}>•</span>
                <li
                  style={{
                    marginRight: '0.5em',
                    transition: 'color 0.3s ease-in-out',
                    color: 'white',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#800080')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  Graduation parties
                </li>
                <span style={{ margin: '0 0.5em', color: 'white' }}>•</span>
                <li
                style={{
                  fontFamily: 'Dancing Script',
                  color: 'white',
                  transition: 'color 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                much more!
              </li>
              </ul>
              <p
                style={{
                  fontSize: '2vw',
                  fontStyle: 'italic',
                  marginBottom: '1vh',
                  color: 'white',
                }}
              >
                Happily serving our community for over 10 years
              </p>
            </div>
          </FullpageSection>
          <FullpageSection style={{ ...SectionStyle, position: 'relative', overflow: 'hidden', background: 'black' }}>
            <div style={{ background: 'linear-gradient(to right, beige 50%, beige 50%)', height: '100%', width: '50%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}></div>
            <div style={{ textAlign: 'center', color: 'black', position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', width: '60%', zIndex: 3 }}>
              {/*circle-border with filled diamond */}
              <div
                key="diamond"
                style={{
                  width: '25vw',
                  height: '25vw',
                  background: 'orange', // Set background color to orange
                  zIndex: 1,
                  transform: 'rotate(45deg)',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(45deg)', // Apply rotation
                  border: '15px solid orange', // Add border for diamond shape
                  zIndex: 2,
                }}
              ></div>
              <h1 style={{ fontSize: 'clamp(4vw, 6vw, 8vh)', textDecoration: 'underline', marginBottom: 'clamp(2vh, 4vh, 5vh)', transition: 'transform 0.3s ease-in-out', zIndex: 3, position: 'relative' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Balloon Artistry
              </h1>
              <div style={{ fontSize: 'clamp(2vw, 3vw, 4vh)', lineHeight: 'clamp(3.5vw, 5vw, 5vw)', color: 'black', maxWidth: '80%', margin: 'auto', position: 'relative', zIndex: 3 }}>
                <p>Step into a world of enchantment with our</p>
                <p>captivating balloon artistry!</p>
                <p>Our skilled balloon artists meticulously</p>
                <p>craft intricate and imaginative designs for any occasion.</p>
                <p>Elevate your event with our vibrant and whimsical balloon creations!</p>
              </div>
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', backgroundImage: `url(${bg6})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', zIndex: 0 }}></div>
          </FullpageSection>
          <FullpageSection style={{ ...SectionStyle, position: 'relative', overflow: 'hidden', background: 'black' }}>
            <div style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%', width: '50%', position: 'absolute', top: 0, left: 0 }}></div>
            <div style={{ background: '#D2691E', height: '100%', width: '50%', position: 'absolute', top: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {[...Array(1)].map((_, index) => (
                <div
                key="blackDiamond"
                  style={{
                    width: '25vw',
                    height: '25vw',
                    background: 'black',
                    zIndex: 1,
                    transform: 'rotate(45deg)',
                    position: 'relative',
                  }}
                ></div>
              ))}
            </div>
            <div style={{ textAlign: 'center', color: 'white', position: 'absolute', top: '50%', right: '25%', transform: 'translate(50%, -50%)', width: '60%', zIndex: 2 }}>
              <h1 style={{ fontSize: '4vw', textDecoration: 'underline', marginBottom: '2.5vw', transition: 'transform 0.3s ease-in-out' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.4)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                Face Painting
              </h1>
              <div style={{ fontSize: '2.5vw', lineHeight: '4vw', color: 'white', maxWidth: '80%', margin: 'auto' }}>
                <p>Transform your face into a canvas of wonder!</p>
                <p>Our skilled artists use high-quality, non-toxic paints to create amazing designs.</p>
                <p>Perfect for events, parties, and celebrations!</p>
              </div>
              {/* Add any additional customization here */}
            </div>
          </FullpageSection>
          <FullpageSection style={{ ...SectionStyle, backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div style={{ textAlign: 'center', color: '#9370DB', marginTop: '5vh' }}>
              <h1 style={{ fontSize: '4vw', marginBottom: '2vh', textDecoration: 'underline', transition: 'transform 0.3s ease-in-out', color: '#9370DB' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.5)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Business Hours
              </h1>
              <div style={{ fontSize: '3vw', marginBottom: '2vh', color: '#9370DB' }}>
                <p>Mon - Fri: <span style={{ color: '#9370DB' }}> 9:00 AM – 5:00 PM</span></p>
                <p>Sat - Sun: <span style={{ color: '#9370DB' }}>10:00 AM – 4:00 PM</span></p>
              </div>
              <p style={{ fontSize: '2.4vw', color: '#9370DB' }}> Holidays may affect business hours</p>
              <p style={{ fontSize: '2.4vw', color: '#9370DB' }}> Services limited to the Orange County area only</p>
              {/* Add any additional customization here */}

              {/* Media Query for Mobile Devices */}
              <style>
                {`
                  @media (max-width: 768px) {
                    h1 {
                      font-size: 7vw; /* Adjust the font size for mobile devices */
                    }
                    p {
                      font-size: 5vw; /* Adjust the font size for mobile devices */
                    }
                  }
                `}
              </style>
            </div>
          </FullpageSection>
          <FullpageSection style={{ ...SectionStyle, backgroundImage: `url(${bg5})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div style={{ textAlign: 'center', color: 'white', marginTop: '10vh' }}>
              <h1 style={{ fontSize: '4vw', marginBottom: '2vh', textDecoration: 'underline', transition: 'transform 0.3s ease-in-out', color: 'white' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.5)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Contact Us
              </h1>
              {/* contact information goes here */}
              <div style={{ marginTop: '2em', fontSize: '2vw', color: 'white' }}>
                <p style={{ marginBottom: '1em' }}>Email: <span style={{ color: 'white' }}>ocfacepaintingandballoons@gmail.com</span></p>
                <p>Phone: <span style={{ color: 'white' }}>657-236-7755</span></p>
              </div>
              {/* Testimonials link goes here */}
              <div style={{ marginTop: '2em', fontSize: '1.6vw' }}>
                <a
                  className="App-link"
                  href="https://www.google.com/search?hl=en-US&gl=us&q=OC+Face+Painting+and+Balloons+%7C+High+Quality+at+Affordable+Prices+%7C+Book+Now+and+Save&ludocid=1357003351175359527&lsig=AB86z5X44on-Xtql8uqmiNsRh-6e#lrd=0x80dd274cf11fa857:0x12d50b5bb1d26c27,1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white', fontSize: '2.8vw' }}
                >
                  Testimonials
                </a>
              </div>
              {/* Leave us a review link goes here */}
              <section className="container mt-5 mb-5">
                <a
                  className="App-link"
                  href="https://www.google.com/search?hl=en-US&gl=us&q=OC+Face+Painting+and+Balloons+%7C+High+Quality+at+Affordable+Prices+%7C+Book+Now+and+Save&ludocid=1357003351175359527&lsig=AB86z5X44on-Xtql8uqmiNsRh-6e#lrd=0x80dd274cf11fa857:0x12d50b5bb1d26c27,3"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white', fontSize: '2.8vw' }}
                >
                  Leave us a review!
                </a>
              </section>
            </div>
              {/* "Sparkle Sparkle" text with stars at the bottom */}
              < div style={{ position: 'absolute', bottom: '0', width: '100%', textAlign: 'center', fontSize: '10px', color: 'white' }}>
                <span>★ Sparkle Sparkle ★</span>
            </div>
          </FullpageSection>
          </FullPageSections>
        </Fullpage>
      </div>
    </div>
    </div>
  );
};

export default FullPageScroll;
