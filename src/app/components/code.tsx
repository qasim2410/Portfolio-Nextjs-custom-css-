import React from 'react'
import Image from 'next/image'

function Code() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width= device-width. initial-scale=1.0" />
  <title> Qasim -Front End Developer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  {/* <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap"
    rel="stylesheet"
  /> */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/* <link rel="stylesheet" href="" /> */}
  {/* <link href="public/assets/css/styles.css" rel="stylesheet" /> */}
  <link rel="preload" as="image" href="/assets/images/Qasim.jpeg" />
  <link rel="preload" as="image" href="/assets/images/image-mask.svg" />
  <header className="header">
    <div className="container">
      <a href="#" className="logo">
        Qasim
      </a>
      <nav className="navbar" data-navbar="">
        <div className="navbar-top">
          <a href="#" className="logo">
            Qasim
          </a>
          <button className="navbar-close-btn" data-nav-toggler="">
            <i className="fa fa-window-close" style={{ color: "#fdff00" }} />
          </button>
        </div>
        <ul className="navbar-list">
          <li>
            <a href="#" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="theme-wrapper">
          <button id="theme-btn" className="btn theme">
            Change Theme
          </button>
        </div>
      </nav>
      <button className="nav-open-btn" data-nav-toggler="">
        <i className="fa-solid fa-bars" />
      </button>
      <div className="overlay" data-nav-toggler="" data-overlay="" />
    </div>
  </header>
  <main>
    <article>
      <section className="section hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 title">Hi, I&apos;m Qasim Front Web Developer.</h1>
            <p className="section-text">
              Hello! I&apos;m Qasim, a freelance Frontend Web Developer based in
              karachi. I&apos;m very passionate about the work that I do.
            </p>
            <div className="social-icons-wrapper">
              <i
                style={{ color: "#f3b500" }}
                className="fa-brands fa-linkedin"
              />
              <i
                style={{ color: "#ea07b9" }}
                className="fa-brands fa-twitter"
              />
              <i style={{ color: "#02e9cf" }} className="fa-brands fa-github" />
              <i
                style={{ color: "#ef7816" }}
                className="fa-brands fa-facebook"
              />
            </div>
            <div className="btn-wrapper">
              <button className="btn">See My Works</button>
              <button className="btn">Contact Me</button>
            </div>
          </div>
          <figure className="hero-banner">
            <Image
              src="/assets/images/Qasim.jpeg"
              width={560}
              height={560}
              alt="Qasim"
              className="w-100"
            />
          </figure>
        </div>
      </section>
      <div className="divider" />
      <section className="section about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <h2 className="h2 section-title">My Skills</h2>
              <p className="section-text">
                I am working on this technologies and also a wide range
                experience of this technologies.
                (HTML/CSS,Javascript,Typescript,NextJs,NodeJs,SQL,Python)
                FRONTEND DEVELOPMENT/ BACK END DEVELOPMENT/ FULL STACK
                DEVELOPMENT.
              </p>
            </div>
            <ul className="progress-list">
              <li className="progress-item">
                <div className="label-wrapper">
                  <p>Web Development</p>
                  <span className="span">100 %</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "100%", backgroundColor: "#f3b500" }}
                  />
                </div>
              </li>
              <li className="progress-item">
                <div className="label-wrapper">
                  <p>Mobile App Development</p>
                  <span className="span">80 %</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "80%", backgroundColor: "#ea07b9" }}
                  />
                </div>
              </li>
              <li className="progress-item">
                <div className="label-wrapper">
                  <p>Backend Development</p>
                  <span className="span">85 %</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "85%", backgroundColor: "#02e9cf" }}
                  />
                </div>
              </li>
              <li className="progress-item">
                <div className="label-wrapper">
                  <p>QE Testing</p>
                  <span className="span">90 %</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "90%", backgroundColor: "#ef7816" }}
                  />
                </div>
              </li>
            </ul>
          </div>
          <ul className="grid-list">
            <li>
              <div className="about-card">
                <div className="card-icon">
                  <i
                    style={{ color: "#f3b500" }}
                    className="fa-solid fa-code"
                  />
                </div>
                <h3 className="h4 card-title">Web Design</h3>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus totam expedita possimus, quis, autem impedit placeat.
                </p>
              </div>
            </li>
            <li>
              <div className="about-card">
                <div className="card-icon">
                  <i
                    style={{ color: "#ea07b9" }}
                    className="fa-solid fa-database"
                  />
                </div>
                <h3 className="h4 card-title">Web Design</h3>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus totam expedita possimus, quis, autem impedit placeat.
                </p>
              </div>
            </li>
            <li>
              <div className="about-card">
                <div className="card-icon">
                  <i
                    style={{ color: "#02e9cf" }}
                    className="fa-solid fa-file-code"
                  />
                </div>
                <h3 className="h4 card-title">Web Design</h3>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus totam expedita possimus, quis, autem impedit placeat.
                </p>
              </div>
            </li>
            <li>
              <div className="about-card">
                <div className="card-icon">
                  <i
                    style={{ color: "#ef7816" }}
                    className="fa-brands fa-codepen"
                  />
                </div>
                <h3 className="h4 card-title">Web Design</h3>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus totam expedita possimus, quis, autem impedit placeat.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="divider" />
      <section className="section project">
        <div className="container">
          <div className="title-wrapper">
            <div>
              <h2 className="h2 section-title">Latest Projects</h2>
              <p className="section-text">
                Check out some of my latest projects.
              </p>
            </div>
            <button className="btn">See All Projects</button>
          </div>
          <ul className="grid-list">
            <li>
              <div className="project-card project-card-one">
                <div className="card-content">
                  <p className="card-type">Web Design</p>
                  <h3 className="h3 card-title">Youtube Theme</h3>
                  <p className="card-text">
                    YouTube is a global video-sharing platform where users can
                    watch, upload, share, and comment on videos. Launched in
                    2005, it has grown to become the go-to destination for
                    diverse content, including tutorials, music videos, vlogs,
                    live streams, educational content, and more. Users can
                    subscribe to channels to stay updated on their favorite
                    content creators, engage through likes, shares, and
                    comments, and even create their own channels to share their
                    unique videos with a worldwide audience.
                  </p>
                  <a href="#" className="btn-text" style={{ color: "#a07cc5" }}>
                    <span className="span">See Project</span>
                  </a>
                </div>
                <figure className="card-banner">
                  <Image
                    src="/assets/images/project-1.png"
                    width={650}
                    height={370}
                    alt="Web-Design"
                    className="w-100"
                  />
                </figure>
              </div>
            </li>
            <li>
              <div className="project-card project-card-two">
                <div className="card-content">
                  <p className="card-type">Mobile Design</p>
                  <h3 className="h3 card-title">Twitter App</h3>
                  <p className="card-text">
                    Twitter is a powerful mobile app designed for real-time
                    communication and social networking.The Twitter app is
                    designed for quick and easy sharing, making it a go-to
                    platform for staying connected and informed on the go.
                  </p>
                  <a href="#" className="btn-text" style={{ color: "#3f78e0" }}>
                    <span className="span">See Project</span>
                  </a>
                </div>
                <figure className="card-banner">
                  
                  <Image
                    src="/assets/images/project-2.png"
                    width={650}
                    height={370}
                    alt="Web-Design"
                    className="w-100"
                  />
                </figure>
              </div>
            </li>
            <li>
              <div className="project-card project-card-three">
                <div className="card-content">
                  <p className="card-type">Mobile Design</p>
                  <h3 className="h3 card-title">Facebook App</h3>
                  <p className="card-text">
                    Facebook is a comprehensive social networking platform where
                    users can connect with friends and family, share updates,
                    photos, and videos, and join communities based on interests.
                    Users can create profiles, send friend requests, and
                    interact through likes, comments, and shares. Facebook also
                    offers features such as events, groups, marketplace, and
                    pages for businesses, allowing for broad social interaction,
                    communication, and content sharing.
                  </p>
                  <a href="#" className="btn-text" style={{ color: "#7cb798" }}>
                    <span className="span">See Project</span>
                  </a>
                </div>
                <figure className="card-banner">
                  <Image
                    src="/assets/images/project-3.png"
                    width={650}
                    height={370}
                    alt="Web-Design"
                    className="w-100"
                  />
                </figure>
              </div>
            </li>
            <li>
              <div className="project-card project-card-four">
                <div className="card-content">
                  <p className="card-type">Mobile Design</p>
                  <h3 className="h3 card-title">Github Design</h3>
                  <p className="card-text">
                    GitHub is a web-based platform used for version control and
                    collaborative software development. It utilizes Git, an
                    open-source version control system, to track changes in
                    code. GitHub offers features like repositories, branches,
                    pull requests, and issues, enabling multiple developers to
                    work on projects simultaneously while managing and merging
                    changes efficiently. It also supports code review, project
                    management, and integration with various development tools,
                    making it a central hub for open-source and private projects
                    alike.
                  </p>
                  <a href="#" className="btn-text" style={{ color: "#d16b86" }}>
                    <span className="span">See Project</span>
                  </a>
                </div>
                <figure className="card-banner">
                  <Image
                    src="/assets/images/project-4.png"
                    width={650}
                    height={370}
                    alt="Web-Design"
                    className="w-100"
                  />
                </figure>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="divider" />
      <section className="section contact">
        <div className="container">
          <div className="contact-card">
            <div className="contact-content">
              <div className="card-icon">
                <i style={{ fontSize: 50 }} className="fa-solid fa-envelope" />
              </div>
              <h2 className="h2 section-title">Let&apos;s Connect and Explore.</h2>
              <p className="section-text">
                Thank you for taking the time to explore my portfolio. I hope
                you&apos;ve enjoyed learning about my work and the projects I&apos;m
                passionate about what can i do. Feel free to reach out to me.
                Email[qasim.hussain2410@gmail.com].
              </p>
            </div>
            <form action="" method="post" className="contact-form">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  // required=""
                  className="input-field"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  // required=""
                  className="input-field"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message *"
                // required=""
                className="input-field"
                defaultValue={""}
              />
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="divider" />
      <footer className="footer">
        <div className="container">
          <div className="footer-inner-container">
            <p className="copyright">© 2024 qasim. All rights reserved.</p>
            <ul className="social-icons-wrapper">
              <li>
                <a href="#" className="social-link">
                  <i
                    style={{ color: "#f3b500" }}
                    className="fa-brands fa-linkedin"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <i
                    style={{ color: "#ea07b9" }}
                    className="fa-brands fa-twitter"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <i
                    style={{ color: "#02e9cf" }}
                    className="fa-brands fa-github"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <i
                    style={{ color: "#ef7816" }}
                    className="fa-brands fa-facebook"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </article>
  </main>
</>
    </div>
  )
}

export default Code


