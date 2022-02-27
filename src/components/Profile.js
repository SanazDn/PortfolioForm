import React from "react";
import ReactGA from "react-ga";
import Card from "./UI/Card";
import classes from "./Profile.module.css";
import ButtonList from "./UI/ButtonList";
import Button from "./UI/Button";



const Profile = () => {
  const handleClick = () => {
    ReactGA.ga("send", "event", {
      eventCategory: "Contact",
      eventAction: "Call",
      eventLabel: "Mobile Button",
    });
  };

  // onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"

  const buttonList = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sanadehghannayyeri/",
      onclick: null,
    },
    // {
    //   label: "Resume",
    //   href: "https://www.linkedin.com/in/sanadehghannayyeri/",
    //   onclick: null,
    // },
    {
      label: "Github",
      href: "https://github.com/SanazDn",
      onclick: null,
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/u/0/#inbox",
      onclick: null,
    },
    {
      label: "Message",
      href: "tel:4169173082",
      onclick: handleClick,
    },
    {
      label: "Contact",
      href: "tel:4169173082",
      onclick: handleClick,
    },
  ];
  return (
    <>
      <Card>
        <div>
          <img
            src={"a3.jpg"}
            alt="my profile"
            className={classes.roundedCircle}
          />
        </div>
        <span className={classes.badge}> Pro </span>
        <div className={classes.fonts}>
          <h5>Sanaz Dehghannayyeri</h5>
          <h6>Interactive Designer & Developer</h6>
          <p>
            I am a Front End web developer. I'm excited about web technologies
            and programming including React,JavaScript, SQL and I always push
            myself towards excellence. I created projects focused on React,
            Angular, SQL and C++ materials.{" "}
          </p>
        </div>
        <ButtonList style={classes.socialList}>
          {buttonList.map((button) => (
            <Button
              key={button.label}
              label={button.label}
              href={button.href}
              onclick={button.onclick}
            />
          ))}
        </ButtonList>
      </Card>
      <Card>
        <h3>My Projects</h3>
      </Card>
      <Card>
        <div className={classes.screenShot}>
          <img src={"p2-1.jpg"} alt="my profile" />
          <img src={"p2-2.jpg"} alt="p2" />
        </div>
        <video
          autoPlay="autoplay"
          className={classes.vid}
          width="400"
          height="250"
          loop="1"
          src="v2-E.mp4"
          muted
        />
        <div className={classes.Trow}>
          <div className={classes.TrowItem1}>
            <h4>Front-end Web</h4>
            <p>
              I made leverage services in Angular to enable our app to fetch
              real data from the Spotify Web API. Users are able to search for
              an artist, view related albums and song titles, add songs to a
              "favourites" list, in addition, play small audio snippets if audio
              samples are available.
            </p>
          </div>

          <div className={classes.TrowItem2}>
            <h4>Link</h4>
            <h4>
              <a href="https://github.com/SanazDn/FinalAss6.git">Code</a>
            </h4>
          </div>

          <div className={classes.TrowItem3}>
            <h4>Made with</h4>
            <p>
              Angular
              <br />
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <div className={classes.screenShot}>
          <img src={"p1.png"} alt="my profile" />

          <img src={"p1-2.jpg"} alt="p2" />
        </div>
        <video
          autoPlay="autoplay"
          className={classes.vid}
          width="400"
          height="250"
          loop="1"
          src="m1-l.mp4"
          muted
        />
        <div className={classes.Trow}>
          <div className={classes.TrowItem1}>
            <h4>Front-end Web</h4>
            <p>
              I created a single table that shows a subset of the restaurant
              data. I was making use of the Bootstrap framework to help design
              our UI, jQuery to work with the DOM, Lodash to specify our
              template(s) and Leaflet to render the map.
            </p>
          </div>

          <div className={classes.TrowItem2}>
            <h4>Link</h4>
            <h4>
              <a href="https://github.com/SanazDn/WEB422-Assignment3.git">
                Code
              </a>
            </h4>
          </div>

          <div className={classes.TrowItem3}>
            <h4>Made with</h4>
            <p>
              React
              <br />
              CSS/JS
              <br />
              Lodash
              <br />
              Moment.js
              <br />
              Leaflet
              <br />
              jQuery
              <br />
              Bootstrap
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <video
          autoPlay="autoplay"
          className={classes.vid}
          width="2500"
          height="400"
          loop="1"
          src="Server.mp4"
          muted
        />
        <div className={classes.Trow}>
          <div className={classes.TrowItem1}>
            <h4>Express server and Home page</h4>
            <p>
              In this assignment, I built an Express server and the home page
              for my web application.
            </p>
          </div>

          <div className={classes.TrowItem2}>
            <h4>Link</h4>
            <h4>
              <a href="https://github.com/SanazDn/Assignment-4.git">Code</a>
            </h4>
          </div>

          <div className={classes.TrowItem3}>
            <h4>Made with</h4>
            <p>
              Javascript
              <br />
              Express
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <div className={classes.screenShot}>
          <img src={"sql2.png"} alt="my profile" />
        </div>
        <div className={classes.Trow}>
          <div className={classes.TrowItem1}>
            <h4>SQL</h4>
            <p>
              In this assignment, I created a simple Retail application using
              the C++ programming language and Oracle (PL/SQL). DBS311.sql
              covers all materials learned on Oracle SQL SELECT statements.
            </p>
          </div>

          <div className={classes.TrowItem2}>
            <h4>Link</h4>
            <h4>
              <a href="https://github.com/SanazDn/DBS311-FinalProject.git">
                Code
              </a>
            </h4>
          </div>

          <div className={classes.TrowItem3}>
            <h4>Made with</h4>
            <p>
              C++
              <br />
              SQL
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <div className={classes.screenShot}>
          <img src={"sql1.png"} alt="my profile" />
        </div>
        <div className={classes.Trow}>
          <div className={classes.TrowItem1}>
            <h4>MYSQL</h4>
            <p>
              In this assignment, I created a simple HR application using the
              C++ programming language and MySQL server. This application allows
              user to insert, update, and delete the employee information.
            </p>
          </div>

          <div className={classes.TrowItem2}>
            <h4>Link</h4>
            <h4>
              <a href="https://github.com/SanazDn/DBS311-FinalProject.git">
                Code
              </a>
            </h4>
          </div>

          <div className={classes.TrowItem3}>
            <h4>Made with</h4>
            <p>
              C++
              <br />
              MYSQL
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Profile;
