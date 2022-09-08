const router = require('express').Router()
const config = require('./config.json')
const request = require('https')
const db = require('quick.db')

router.get('/profile/:uid', (req, res) => {
  if(!req.params.uid) {
    return res.redirect("https://www.hypeds.com/profile")
  }
  request.get(`${config.API.path}/${config.API.version}/db/profile/${config.API.token}/${req.params.uid}`, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });//JSON.parse(data).value
    
    resp.on('end', () => {
      let nickName = JSON.parse(data).nickname
      let aboutMe = JSON.parse(data).aboutme
      let profileViews = db.get(`Clicks_UserID_${req.params.uid}`)
      let postViews = db.get(`Clicks_PostID_${req.params.uid}`)
      let commentsNumber = db.get(`CommentsNumber_${req.params.uid}`)
      let joinedAt = JSON.parse(data).joinedAt
      let userWebsite = JSON.parse(data).website
      let userLocation = JSON.parse(data).location
      let FollowersNumber = JSON.parse(data).followers
      let FollowingNumber = JSON.parse(data).following
        
      res.send(`<!DOCTYPE html>
<html style="font-size: 16px;"><head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="keywords" content="Fim da linha. . . Dê aquele refresh e veja novos posts!">
    <meta name="description" content="">
    <title>HYPED | Profile</title>
    <link rel="stylesheet" href="https://www.hypeds.com/css/HypedLib.css" media="screen">
<link rel="stylesheet" href="https://www.hypeds.com/css/Profile.css" media="screen">
    <script class="u-script" type="text/javascript" src="https://www.hypeds.com/js/jquery.js" defer=""></script>
    <script class="u-script" type="text/javascript" src="https://www.hypeds.com/js/nicepage.js" defer=""></script>
    <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">
    <meta name="theme-color" content="#478ac9">
    <meta property="og:title" content="Profile">
    <meta property="og:type" content="website">
  </head>
  <body class="u-body u-xl-mode"><header class="u-align-center-xs u-clearfix u-grey-80 u-header u-sticky u-sticky-07a1 u-header" id="sec-b08d"><div class="u-clearfix u-sheet u-sheet-1">
        <a href="/" class="u-image u-logo u-image-1" data-image-width="640" data-image-height="642">
          <img src="https://www.hypeds.com/images/hyped.png" class="u-logo-image u-logo-image-1">
        </a>
        <form action="#" method="get" class="u-border-1 u-border-grey-90 u-radius-35 u-search u-search-right u-search-1">
          <button class="u-search-button" type="submit">
            <span class="u-search-icon u-spacing-10 u-text-grey-40">
              <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 56.966 56.966" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-b04b"></use></svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-b04b" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" class="u-svg-content"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </span>
          </button>
          <input class="u-search-input" type="search" name="search" value="" placeholder="Search">
        </form>
        <nav class="u-align-left u-menu u-menu-dropdown u-nav-spacing-25 u-offcanvas u-menu-1">
          <div class="menu-collapse" style="font-size: 1rem; letter-spacing: 0px; text-transform: uppercase; font-weight: 700;">
            <a class="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-text-shadow u-custom-top-bottom-menu-spacing u-nav-link" href="#" style="padding: 2px 0px; font-size: calc(1em + 4px);">
              <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-7b92"></use></svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-7b92" x="0px" y="0px" viewBox="0 0 302 302" style="enable-background:new 0 0 302 302;" xml:space="preserve" class="u-svg-content"><g><rect y="36" width="302" height="30"></rect><rect y="236" width="302" height="30"></rect><rect y="136" width="302" height="30"></rect>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </a>
          </div>
          <div class="u-custom-menu u-nav-container">
            <ul class="u-custom-font u-nav u-spacing-30 u-text-font u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-2 u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/feed" style="padding: 10px 0px;">Home</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-2 u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/notifications" style="padding: 10px 0px;">Notifications</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-2 u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/profile" style="padding: 10px 0px;">Profile</a>
</li></ul>
          </div>
          <div class="u-custom-menu u-nav-container-collapse">
            <div class="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div class="u-inner-container-layout u-sidenav-overflow">
                <div class="u-menu-close"></div>
                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/feed">Home</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/notifications">Notifications</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/profile">Profile</a>
</li></ul>
              </div>
            </div>
            <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
      </div></header>
    <section class="u-align-center u-clearfix u-grey-60 u-section-1" id="sec-9acc">
      <div class="u-align-left u-clearfix u-sheet u-sheet-1">
        <div class="u-align-left u-container-style u-grey-80 u-group u-radius-26 u-shape-round u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <img class="u-image u-image-round u-radius-32 u-image-1" src="https://www.hypeds.com/images/main_resource2.png" alt="" data-image-width="1920" data-image-height="1080" data-href="https://www.hypeds.com/i/B${req.params.uid}">
            <div class="u-border-3 u-border-grey-80 u-image u-image-circle u-preserve-proportions u-image-2" alt="" data-image-width="1024" data-image-height="1024" data-href="https://www.hypeds.com/i/${req.params.uid}"></div>
            <a href="https://www.hypeds.com/follow/${req.params.uid}" class="u-active-palette-1-base u-border-2 u-border-black u-btn u-btn-round u-button-style u-hover-black u-none u-radius-35 u-text-hover-white u-btn-1">SEGUIR</a>
            <h4 class="u-text u-text-default u-text-1">${nickName}&nbsp;</h4>
            <h6 class="u-text u-text-default u-text-2">@${req.params.uid}</h6>
            <p class="u-large-text u-text u-text-variant u-text-3">${aboutMe}</p>
            <div class="u-container-style u-grey-90 u-group u-radius-30 u-shape-round u-group-2">
              <div class="u-container-layout u-container-layout-2">
                <h3 class="u-text u-text-4">Profile Stats:</h3>
                <p class="u-large-text u-text u-text-variant u-text-5">Views: ${profileViews}</p>
                <p class="u-large-text u-text u-text-variant u-text-6">PostViews: ${postViews}</p>
                <p class="u-large-text u-text u-text-variant u-text-7">Comments: ${commentsNumber}</p>
                <h3 class="u-text u-text-8">Info:</h3>
                <p class="u-text u-text-9"><span class="u-file-icon u-icon u-text-grey-25"><img src="https://www.hypeds.com/images/747310.png" alt=""></span>&nbsp;Entrou em: ${joinedAt}&nbsp;
                </p>
                <p class="u-text u-text-10"><span class="u-file-icon u-icon u-text-grey-25"><img src="https://www.hypeds.com/images/455691.png" alt=""></span>&nbsp;${userWebsite}
                </p>
                <p class="u-text u-text-11"><span class="u-icon"><svg class="u-svg-content" viewBox="0 0 54.757 54.757" x="0px" y="0px" style="width: 1em; height: 1em;"><g><path d="M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5
		s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z"></path><path d="M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952
		L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4
		C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031
		C45.576,13.08,46.321,24.468,41.099,31.431z"></path>
</g></svg><img></span>&nbsp;${userLocation}
                </p>
              </div>
            </div><span class="u-file-icon u-grey-80 u-icon u-icon-rectangle u-icon-4" data-href="https://www.hypeds.com/profile/${req.params.uid}/comment"><img src="https://www.hypeds.com/images/1246332.png" alt=""></span>
            <h5 class="u-text u-text-default u-text-12">Followers: ${FollowersNumber}&nbsp; &nbsp;Following: ${FollowingNumber}</h5>
          </div>
        </div>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-grey-60 u-section-2" id="sec-1975">
      <div class="u-align-left u-clearfix u-sheet u-sheet-1">
        <div class="u-align-left u-container-style u-grey-80 u-group u-radius-26 u-shape-round u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <div class="u-image u-image-circle u-preserve-proportions u-image-1" alt="" data-image-width="1024" data-image-height="1024" data-href="https://www.hypeds.com/profile/${req.params.uid}"></div>
            <h4 class="u-text u-text-default u-text-1">${nickName}&nbsp;</h4>
            <h6 class="u-text u-text-default u-text-2">@${req.params.uid}</h6>
            <p class="u-large-text u-text u-text-variant u-text-3">POST WITH A IMAGE EXAMPLE</p>
            <img class="u-image u-image-round u-radius-32 u-image-2" src="https://www.hypeds.com/i/:id" alt="" data-image-width="1920" data-image-height="1080" data-href="https://www.hypeds.com/i/:id"><span class="u-file-icon u-grey-80 u-icon u-icon-rectangle u-icon-1" data-href="https://www.hypeds.com/post/:id"><img src="https://www.hypeds.com/images/1246332.png" alt=""></span>
          </div>
        </div>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-grey-60 u-section-3" id="sec-b9cf">
      <div class="u-align-left u-clearfix u-sheet u-sheet-1">
        <div class="u-align-left u-container-style u-grey-80 u-group u-radius-26 u-shape-round u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <div class="u-image u-image-circle u-preserve-proportions u-image-1" alt="" data-image-width="1024" data-image-height="1024" data-href="https://www.hypeds.com/profile/${req.params.uid}"></div>
            <h4 class="u-text u-text-default u-text-1">${nickName}&nbsp;</h4>
            <h6 class="u-text u-text-default u-text-2">@${req.params.uid}</h6>
            <p class="u-large-text u-text u-text-variant u-text-3">POST WITH ONLY TEXT</p><span class="u-file-icon u-grey-80 u-icon u-icon-rectangle u-icon-1" data-href="https://www.hypeds.com/post/:id"><img src="https://www.hypeds.com/images/1246332.png" alt=""></span>
          </div>
        </div>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-grey-70 u-section-4" id="sec-f899">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <h1 class="u-text u-text-default u-text-1">Fim da linha. . . Dê aquele refresh e veja novos posts!</h1>
      </div>
    </section>
    
    
    <footer class="u-align-center u-clearfix u-footer u-grey-90 u-footer" id="sec-4960"><div class="u-clearfix u-sheet u-sheet-1">
        <p class="u-text u-text-1">Links Úteis&nbsp;<br>
          <span style="font-weight: 400;">
            <a href="https://stats.uptimerobot.com/1BnoXi6Mgp" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-1"> Status Page</a>
          </span>
          <br>
          <span style="font-weight: 400;">
            <a href="https://v4.hypeds.com/api" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-2">API</a>
          </span>
          <br>
          <span style="font-weight: 400;">
            <a href="https://www.hypeds.com/discord" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-3">Discord</a>
          </span>
          <br>
        </p>
        <p class="u-text u-text-2">
          <a href="https://www.hypeds.com/tos" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4">TOS</a>
        </p>
        <p class="u-small-text u-text u-text-variant u-text-3">© HYPED GROUP 2022</p>
      </div></footer>
    <span style="height: 64px; width: 64px; margin-left: 0px; margin-right: auto; margin-top: 0px; background-image: none; right: 20px; bottom: 20px; padding: 15px;" class="u-back-to-top u-grey-75 u-icon u-icon-circle u-opacity u-opacity-85" data-href="#">
        <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 551.13 551.13"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-1d98"></use></svg>
        <svg class="u-svg-content" enable-background="new 0 0 551.13 551.13" viewBox="0 0 551.13 551.13" xmlns="http://www.w3.org/2000/svg" id="svg-1d98"><path d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z"></path></svg>
    </span>
  
</body></html>`)
    })
  })
  db.add(`Clicks_UserID_${req.params.uid}`, 1)
})

router.get('/profile/:uid/edit', (req, res) => {
  
})

router.get('/profile', (req, res) => {
  let random = '';
  let dict = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ'
  for(var i = 0; i < 8; i++) {
    random = random + dict.charAt(Math.floor(Math.random() * dict.length));
  }
  
  request.get(`${config.API.path}/${config.API.version}/db/get/${config.API.token}/SessionUser_${req.cookies.SessionId}`, (resp) => {
    let datas = '';

    resp.on('data', (chunk) => {
      datas += chunk;
    });

    resp.on('end', () => {
      if(JSON.parse(datas).value === req.query.username) {
        request.get(`${config.API.path}/${config.API.version}/db/profile/${config.API.token}/${req.query.username}`, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
            let nickName = JSON.parse(data).nickname
            let aboutMe = JSON.parse(data).aboutme
            let profileViews = db.get(`Clicks_UserID_${req.query.username}`)
            let postViews = db.get(`Clicks_PostID_${req.query.username}`)
            let commentsNumber = db.get(`CommentsNumber_${req.query.username}`)
            let joinedAt = JSON.parse(data).joinedAt
            let userWebsite = JSON.parse(data).website
            let userLocation = JSON.parse(data).location
            let FollowersNumber = JSON.parse(data).followers
            let FollowingNumber = JSON.parse(data).following

            res.send(`<!DOCTYPE html>
<html style="font-size: 16px;"><head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="keywords" content="Fim da linha. . . Dê aquele refresh e veja novos posts!">
    <meta name="description" content="">
    <title>HYPED | Profile</title>
    <link rel="stylesheet" href="https://www.hypeds.com/css/HypedLib.css" media="screen">
<link rel="stylesheet" href="https://www.hypeds.com/css/Profile.css" media="screen">
    <script class="u-script" type="text/javascript" src="https://www.hypeds.com/js/jquery.js" defer=""></script>
    <script class="u-script" type="text/javascript" src="https://www.hypeds.com/js/nicepage.js" defer=""></script>
    <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">
    <meta name="theme-color" content="#478ac9">
    <meta property="og:title" content="Profile">
    <meta property="og:type" content="website">
  </head>
  <body class="u-body u-xl-mode"><header class="u-align-center-xs u-clearfix u-grey-80 u-header u-sticky u-sticky-07a1 u-header" id="sec-b08d"><div class="u-clearfix u-sheet u-sheet-1">
        <a href="/" class="u-image u-logo u-image-1" data-image-width="640" data-image-height="642">
          <img src="https://www.hypeds.com/images/hyped.png" class="u-logo-image u-logo-image-1">
        </a>
        <form action="#" method="get" class="u-border-1 u-border-grey-90 u-radius-35 u-search u-search-right u-search-1">
          <button class="u-search-button" type="submit">
            <span class="u-search-icon u-spacing-10 u-text-grey-40">
              <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 56.966 56.966" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-b04b"></use></svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-b04b" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" class="u-svg-content"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </span>
          </button>
          <input class="u-search-input" type="search" name="search" value="" placeholder="Search">
        </form>
        <nav class="u-align-left u-menu u-menu-dropdown u-nav-spacing-25 u-offcanvas u-menu-1">
          <div class="menu-collapse" style="font-size: 1rem; letter-spacing: 0px; text-transform: uppercase; font-weight: 700;">
            <a class="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-text-shadow u-custom-top-bottom-menu-spacing u-nav-link" href="#" style="padding: 2px 0px; font-size: calc(1em + 4px);">
              <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-7b92"></use></svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-7b92" x="0px" y="0px" viewBox="0 0 302 302" style="enable-background:new 0 0 302 302;" xml:space="preserve" class="u-svg-content"><g><rect y="36" width="302" height="30"></rect><rect y="236" width="302" height="30"></rect><rect y="136" width="302" height="30"></rect>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </a>
          </div>
          <div class="u-custom-menu u-nav-container">
            <ul class="u-custom-font u-nav u-spacing-30 u-text-font u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-2 u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/feed" style="padding: 10px 0px;">Home</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-2 u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/notifications" style="padding: 10px 0px;">Notifications</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-2 u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/profile" style="padding: 10px 0px;">Profile</a>
</li></ul>
          </div>
          <div class="u-custom-menu u-nav-container-collapse">
            <div class="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div class="u-inner-container-layout u-sidenav-overflow">
                <div class="u-menu-close"></div>
                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/feed">Home</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/notifications">Notifications</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/profile">Profile</a>
</li></ul>
              </div>
            </div>
            <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
      </div></header>
    <section class="u-align-center u-clearfix u-grey-60 u-section-1" id="sec-9acc">
      <div class="u-align-left u-clearfix u-sheet u-sheet-1">
        <div class="u-align-left u-container-style u-grey-80 u-group u-radius-26 u-shape-round u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <img class="u-image u-image-round u-radius-32 u-image-1" src="https://www.hypeds.com/images/main_resource2.png" alt="" data-image-width="1920" data-image-height="1080" data-href="https://www.hypeds.com/i/B${req.query.username}">
            <div class="u-border-3 u-border-grey-80 u-image u-image-circle u-preserve-proportions u-image-2" alt="" data-image-width="1024" data-image-height="1024" data-href="https://www.hypeds.com/i/${req.query.username}"></div>
            <a href="https://www.hypeds.com/profile/${req.query.username}/edit" class="u-active-palette-1-base u-border-2 u-border-black u-btn u-btn-round u-button-style u-hover-black u-none u-radius-35 u-text-hover-white u-btn-1">EDITAR</a>
            <h4 class="u-text u-text-default u-text-1">${nickName}&nbsp;</h4>
            <h6 class="u-text u-text-default u-text-2">@${req.query.username}</h6>
            <p class="u-large-text u-text u-text-variant u-text-3">${aboutMe}</p>
            <div class="u-container-style u-grey-90 u-group u-radius-30 u-shape-round u-group-2">
              <div class="u-container-layout u-container-layout-2">
                <h3 class="u-text u-text-4">Profile Stats:</h3>
                <p class="u-large-text u-text u-text-variant u-text-5">Views: ${profileViews}</p>
                <p class="u-large-text u-text u-text-variant u-text-6">PostViews: ${postViews}</p>
                <p class="u-large-text u-text u-text-variant u-text-7">Comments: ${commentsNumber}</p>
                <h3 class="u-text u-text-8">Info:</h3>
                <p class="u-text u-text-9"><span class="u-file-icon u-icon u-text-grey-25"><img src="https://www.hypeds.com/images/747310.png" alt=""></span>&nbsp;Entrou em: ${joinedAt}&nbsp;
                </p>
                <p class="u-text u-text-10"><span class="u-file-icon u-icon u-text-grey-25"><img src="https://www.hypeds.com/images/455691.png" alt=""></span>&nbsp;${userWebsite}
                </p>
                <p class="u-text u-text-11"><span class="u-icon"><svg class="u-svg-content" viewBox="0 0 54.757 54.757" x="0px" y="0px" style="width: 1em; height: 1em;"><g><path d="M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5
		s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z"></path><path d="M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952
		L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4
		C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031
		C45.576,13.08,46.321,24.468,41.099,31.431z"></path>
</g></svg><img></span>&nbsp;${userLocation}
                </p>
              </div>
            </div><span class="u-file-icon u-grey-80 u-icon u-icon-rectangle u-icon-4" data-href="https://www.hypeds.com/profile/${req.query.username}/comment"><img src="https://www.hypeds.com/images/1246332.png" alt=""></span>
            <h5 class="u-text u-text-default u-text-12">Followers: ${FollowersNumber}&nbsp; &nbsp;Following: ${FollowingNumber}</h5>
          </div>
        </div>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-grey-60 u-section-2" id="sec-1975">
      <div class="u-align-left u-clearfix u-sheet u-sheet-1">
        <div class="u-align-left u-container-style u-grey-80 u-group u-radius-26 u-shape-round u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <div class="u-image u-image-circle u-preserve-proportions u-image-1" alt="" data-image-width="1024" data-image-height="1024" data-href="https://www.hypeds.com/profile/${req.query.username}"></div>
            <h4 class="u-text u-text-default u-text-1">${nickName}&nbsp;</h4>
            <h6 class="u-text u-text-default u-text-2">@${req.query.username}</h6>
            <p class="u-large-text u-text u-text-variant u-text-3">POST WITH A IMAGE EXAMPLE</p>
            <img class="u-image u-image-round u-radius-32 u-image-2" src="https://www.hypeds.com/i/:id" alt="" data-image-width="1920" data-image-height="1080" data-href="https://www.hypeds.com/i/:id"><span class="u-file-icon u-grey-80 u-icon u-icon-rectangle u-icon-1" data-href="https://www.hypeds.com/post/:id"><img src="https://www.hypeds.com/images/1246332.png" alt=""></span>
          </div>
        </div>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-grey-60 u-section-3" id="sec-b9cf">
      <div class="u-align-left u-clearfix u-sheet u-sheet-1">
        <div class="u-align-left u-container-style u-grey-80 u-group u-radius-26 u-shape-round u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <div class="u-image u-image-circle u-preserve-proportions u-image-1" alt="" data-image-width="1024" data-image-height="1024" data-href="https://www.hypeds.com/profile/${req.query.username}"></div>
            <h4 class="u-text u-text-default u-text-1">${nickName}&nbsp;</h4>
            <h6 class="u-text u-text-default u-text-2">@${req.query.username}</h6>
            <p class="u-large-text u-text u-text-variant u-text-3">POST WITH ONLY TEXT</p><span class="u-file-icon u-grey-80 u-icon u-icon-rectangle u-icon-1" data-href="https://www.hypeds.com/post/:id"><img src="https://www.hypeds.com/images/1246332.png" alt=""></span>
          </div>
        </div>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-grey-70 u-section-4" id="sec-f899">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <h1 class="u-text u-text-default u-text-1">Fim da linha. . . Dê aquele refresh e veja novos posts!</h1>
      </div>
    </section>
    
    
    <footer class="u-align-center u-clearfix u-footer u-grey-90 u-footer" id="sec-4960"><div class="u-clearfix u-sheet u-sheet-1">
        <p class="u-text u-text-1">Links Úteis&nbsp;<br>
          <span style="font-weight: 400;">
            <a href="https://stats.uptimerobot.com/1BnoXi6Mgp" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-1"> Status Page</a>
          </span>
          <br>
          <span style="font-weight: 400;">
            <a href="https://v4.hypeds.com/api" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-2">API</a>
          </span>
          <br>
          <span style="font-weight: 400;">
            <a href="https://www.hypeds.com/discord" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-3">Discord</a>
          </span>
          <br>
        </p>
        <p class="u-text u-text-2">
          <a href="https://www.hypeds.com/tos" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4">TOS</a>
        </p>
        <p class="u-small-text u-text u-text-variant u-text-3">© HYPED GROUP 2022</p>
      </div></footer>
    <span style="height: 64px; width: 64px; margin-left: 0px; margin-right: auto; margin-top: 0px; background-image: none; right: 20px; bottom: 20px; padding: 15px;" class="u-back-to-top u-grey-75 u-icon u-icon-circle u-opacity u-opacity-85" data-href="#">
        <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 551.13 551.13"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-1d98"></use></svg>
        <svg class="u-svg-content" enable-background="new 0 0 551.13 551.13" viewBox="0 0 551.13 551.13" xmlns="http://www.w3.org/2000/svg" id="svg-1d98"><path d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z"></path></svg>
    </span>
  
</body></html>`)
          })
        })
      } else {
        return res.redirect(`https://api.hypeds.com/v5/oauth2/login/${random}?redirectTo=https://www.hypeds.com/profile`)
      }
    })
  })
})

module.exports = router;