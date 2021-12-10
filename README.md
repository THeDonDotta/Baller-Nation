# Baller-Nation

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Baller Nation** this app is built for sports fans. It is a forum that provides live nba scores and allows users to communicate during the games. Users are able to post and comment. They are able to create, update, delete any post. Also any user is able to comment on any post. You can check in to see the standings in the league as well._


<br>

## MVP

> the Forum will be able to post, update, and delete any post. users are also able to post anything to the forum. has live game scores and the current standings of the east and west conference in the NBA.

<br>

### Goals

- get it to run functionally with good styling
- be able to add some postMVP functionality


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end |
|   Material UI    | for styling |
|   rapidAPI  | 3rd party api for NBA data |
|   Ruby on rails  | backend |

<br>

### Client (Front End)

#### Wireframes

![wireframes](https://www.figma.com/file/D5TDc8yEkYPxBVpHGoSSIm/Baller-central-(Copy)?node-id=0%3A1)
https://www.figma.com/file/D5TDc8yEkYPxBVpHGoSSIm/Baller-central-(Copy)?node-id=0%3A1


#### Component Tree


[Component Tree](https://app.diagrams.net/#G1nFlXT6LGpE6D_wnoA0W-7QxJ0IoGhcPl)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ css
      |__ images
|__ components/
      |__ nav.jsx
      |__ feed.js
      |__ liveGames.js
      |__ liveStandings.js
      |__ footer.js
      |__ teamImages.js
      |__ tickets.js
      |__ mvp.js
      
|__ services/
      |__ apiConfig.js
      |__ Post.js
      |__ Comments.js
|__ screens/
      |__ landingPage.js
      |__ home.js
      |__ about.js
      |__ Standings.js
      

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | 
| ------------------- | :------: | :------------: | :-----------: | 
| Add game scores/standings   |    M     |     8 hrs      |     NA hrs     |  
| Create CRUD Actions |    H     |     10 hrs      |     NA hrs     |   
| styling             |   M      |      5 hrs    |     NA hrs      |
| TOTAL               |          |     23 hrs      |     NA hrs     | 



<br>

### Server (Back End)

#### ERD Model


[ERD Sample](https://lucid.app/lucidchart/3e270027-71ba-43ea-8b16-a3980276dd18/edit?page=0_0&invitationId=inv_31c43e2f-2b00-4575-af96-60ae4866b4bf#)
<br>

***

## Post-MVP

- add users and verification
- add individual sections for each team
- add ability to use pictures and videos in posts on the feed

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
