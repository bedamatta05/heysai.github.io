import React from "react";
import "./Main.css";
import scratch from "./images/scratch.png";
import movie from "./images/movie.png";
import chef from "./images/chef.jpeg";

const Main = () => {
  return (
    <div className="main container">
      <div className="row">
        <div className="col-1">
          <div className="col-img">
            <img src={scratch} alt=""/>
          </div>
          <div className="col-heading">Scratch - Simple Note Taking App</div>
          <div className="content">
            <div className="content-decription">
              Scratch is a simple CRUD (Create, Read, Update & Delete)
              Serverless responsive web app made with React.js, Node.js and AWS
              which inputs notes from user, stores in db, user can edit, update
              or delete the note.
            </div>
            <div className="content-techs">
              Programming languages and Tools -
            </div>
            <div className="content-techs-items">
              <img src="https://img.icons8.com/color/20/000000/html-5--v1.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/css3.png" alt="" />
              <img src="https://img.icons8.com/color/20/000000/bootstrap.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/react-native.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/nodejs.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/api-settings.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/amazon-web-services.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/github--v1.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/visual-studio-code-2019.png" alt=""/>
            </div>
            <div className="content-feature">Features -</div>
            <div className="content-feature-items">
              <ol>
                <li>
                  Simple UI/UX responsive design using React JSX, CSS3 &
                  Bootstrap.
                </li>
                <li>Sign up and Login with AWS cognito.</li>
                <li>AWS S3 for storage of files.</li>
                <li>Dynamodb as database.</li>
              </ol>
            </div>
            <div className="content-link">
              <a
                href="https://note-app-sai.netlify.app/"
                alt="scratch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Here<i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="col-img">
            <img src={movie} alt=""/>
          </div>
          <div className="col-heading">Movie Recommendation System</div>
          <div className="content">
            <div className="content-decription">
              Movie recommendation system is a type of information filtering
              system using IMDb api which attempts to predict the preferences of
              a user, and can suggest a set of movies to the users based on
              their interest, or the popularities of the movies.
            </div>
            <div className="content-techs">
              Programming languages and Tools -
            </div>
            <div className="content-techs-items">
              <img src="https://img.icons8.com/color/20/000000/html-5--v1.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/css3.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/javascript--v1.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/learning.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/python--v1.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/tableau-software.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/github--v1.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/visual-studio-code-2019.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/imdb.png" alt=""/>
            </div>
            <div className="content-feature">Features -</div>
            <div className="content-feature-items">
              <ol>
                <li>
                  Simple UI/UX responsive web design using HTML5, CSS3 &
                  JavaScript.
                </li>
                <li>IMDb API</li>
                <li>Hosted on Horuko</li>
                <li>Used machine learing to recommed movies</li>
              </ol>
            </div>
            <div className="content-link"><a
                href="http://movierecommendationproject.herokuapp.com/"
                alt="movie"
                target="_blank"
                rel="noopener noreferrer"
              >
              Visit Here<i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="col-img">
            <img src={chef} alt=""/>
          </div>
          <div className="col-heading">Digital Chef (Food Ordering App)</div>
          <div className="content">
            <div className="content-decription">
              Digital Chef is a user interactive online food ordering app where
              a user can sign up/login, pick the food items by choosing the
              specific trending menu/ category items/ restaurants nearby and can
              logged out when the work will be done.
            </div>
            <div className="content-techs">
              Programming languages and Tools -
            </div>
            <div className="content-techs-items">
              <img src="https://img.icons8.com/color/20/000000/java-coffee-cup-logo--v1.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/kotlin.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/material-ui.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/android-studio--v2.png" alt=""/>
              <img src="https://img.icons8.com/color/20/000000/github--v1.png" alt=""/>
            </div>
            <div className="content-feature">Used Android Features -</div>
            <div className="content-feature-items">
              <ol>
                <li>ViewPager & Recyclerview</li>
                <li>Constraint, Linear and Tab layouts </li>
                <li>Shared Preference</li>
                <li>Glide</li>
                <li>Activity, Fragment and Intents</li>
              </ol>
            </div>
            <div className="content-link">
            <a
                href="https://drive.google.com/drive/folders/1bIlPVIMM3R0yciImUfeMTanfRROutxYI"
                alt="food"
                target="_blank"
                rel="noopener noreferrer"
              >
              Visit Here<i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
