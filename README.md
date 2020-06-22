# GameCord - Front End

GameCord is a Full-Stack app built for the Summer 2020 Tech Talent Pipeline bootcamp. This repository serves as the front end portion of the app. Built with React, Redux, Node, Express, Sequelize, PostgreSQL and other supported packages.

Group Members: Alan Eappen, Jan Markus Milan, Mohammed Othman, Taojie Tan

## Link to Deployed Web-App

Deployed on Heroku at ...

## Home Page

![Home Page](https://i.imgur.com/7CEhuo8.png)

Upon clicking on the link, the user will be greeted with the home screen. At the top, there is a navbar with the name of the project (GameCord), an "About", "Login" and "Register" button, each linking to another aspect of the application.

Below the navbar, there are two separate columns. The left column contains the all the different filters, which include filtering by ratings, release date, platforms and genres. The right column contains all the different games, and each page can load a total of 21 games.

## Game Page

![Game Page Top](https://i.imgur.com/p3pgUie.png)
![Game Page Bottom](https://i.imgur.com/JGvB9EF.png)

When the user clicks on a game, the user will be sent to the respective game page. At the top, there will be either a video about the game or a screenshot if the video is not available. There is an overlay to show the name of the game and the link to the game's website.

Below that are two separate columns. The left column contains the release date, the platforms it supports, a like button and the amount of likes the game has, the description of the game, and an add comment section. The right column contains up to six screenshots of the game. Each screenshot is clickable and can be viewed in high-clarity. Note that the comment and like features are only available if the user is logged in to their account.

At the very bottom are the comments about the game. The name of the user and their comment will be shown in that section.

## About Page

![About Page Top](https://i.imgur.com/TwCYiSf.png)
![About Page Bottom](https://i.imgur.com/8jPPbMa.png)

When the user clicks on the "About" button in the navbar, the user will be redirected to the about page. There, a cool animation will be displayed at the top of the page, and at the bottom, the names of all the people who worked on the project will be shown.

## Registration Page

![Registration Page](https://i.imgur.com/Xozb2zb.png)

In order to get the full experience of our web app, we implemented a user authentication system in order to exclusively access certain functionalities. Pressing the "Register" button on the navbar will send the user to a separate page and prompt the user to enter their first name, last name, email, username and password that will be associated with their account. That data will be stored in the database to be used for validation on login.

## Login Page

![Login Page](https://i.imgur.com/xh3jtMT.png)

What comes next after registration is the login feature. Pressing the "Login" button on the navbar will send the user to a separate page and prompt the user to enter their username and password. Upon logging in, the navbar will adjust accordingly, displaying the user's name next to the 'Logout' button. The user will also be able to like and comment on each game.

## Search Page

![Search Page Top](https://i.imgur.com/SUtRXcw.png)
![Search Page Bottom](https://i.imgur.com/Pe7HpHf.png)

The final feature to note is the search feature. Typing in the name of a game in the search bar and submitting will redirect the user to a separate page containing the search results. The user will be able to click on each game and view the respective game page.

## Final Note

This project was inspired by our love for video games and coding, and our willingness to learn and experience new things. We hope people who share the same passions will appreciate this project of ours and possibly be inspired to do something similar with their own interests.
