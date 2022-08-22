const router = require('express').Router()

router.get('/minecraft', (req, res) => {
  //res.render('minecraft', { title: 'HYPED | Minecraft Server' });
  //res.sendFile('/home/runner/hypedscom/html/Minecraft.html')
  //res.redirect(`https://mc.hypeds.com`)

  res.send(`<!DOCTYPE html>
<html style="font-size: 16px;"><head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="keywords" content="Hyped MC​, Planos VIP, hypeds, hyped store, compre vip, hyped bot">
    <meta name="description" content="Hyped MC store">
    <title>HYPED MC | Store</title>
    <link rel="stylesheet" href="https://www.hypeds.com/css/2nicepage.css" media="screen">
    <link rel="shortcut icon" href="https://static.wixstatic.com/media/a926b2_cfc2b507c19546d88a6a2231b832b022%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/a926b2_cfc2b507c19546d88a6a2231b832b022%7Emv2.png" type="image/png">
<link rel="stylesheet" href="https://www.hypeds.com/css/VIP.css" media="screen">
    <script class="u-script" type="text/javascript" src="https://www.hypeds.com/js/jquery.js" defer=""></script>
    <script class="u-script" type="text/javascript" src="https://www.hypeds.com/js/nicepage.js" defer=""></script>
    <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">
    <link id="u-page-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700">
    <meta name="theme-color" content="#478ac9">
    <meta property="og:title" content="VIP">
    <meta property="og:type" content="website">
  </head>
  <body class="u-body u-xl-mode"><header class="u-clearfix u-grey-75 u-header u-header" id="sec-b08d"><div class="u-clearfix u-sheet u-sheet-1">
        <a href="https://www.hypeds.com/" class="u-image u-logo u-image-1" data-image-width="640" data-image-height="642" title="Home">
          <img src="https://www.hypeds.com/images/hyped.png" class="u-logo-image u-logo-image-1">
        </a>
        <nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div class="menu-collapse" style="font-size: 1rem; letter-spacing: 0px; font-weight: 700; text-transform: uppercase;">
            <a class="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
              <svg class="u-svg-link" viewBox="0 0 24 24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menu-hamburger"></use></svg>
              <svg class="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>
</g></svg>
            </a>
          </div>
          <div class="u-custom-menu u-nav-container">
            <ul class="u-nav u-spacing-30 u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/" style="padding: 10px 0px;">Home</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com//hypedmusic" style="padding: 10px 0px;">Hyped Music</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com//minecraft" style="padding: 10px 0px;">Minecraft</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com//docs" style="padding: 10px 0px;">Docs</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="https://api.hypeds.com/v5/oauth/login" style="padding: 10px 0px;">Login</a>
</li></ul>
          </div>
          <div class="u-custom-menu u-nav-container-collapse">
            <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div class="u-inner-container-layout u-sidenav-overflow">
                <div class="u-menu-close"></div>
                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/" style="padding: 10px 0px;">Home</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com//hypedmusic" style="padding: 10px 0px;">Hyped Music</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com//minecraft" style="padding: 10px 0px;">Minecraft</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com//docs" style="padding: 10px 0px;">Docs</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://api.hypeds.com/v5/oauth/login" style="padding: 10px 0px;">Login</a>
</li></ul>
              </div>
            </div>
            <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
      </div></header>
    <section class="u-align-left u-clearfix u-image u-shading u-section-1" src="" data-image-width="1920" data-image-height="1080" id="sec-e503">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h1 class="u-custom-font u-font-oswald u-text u-title u-text-1">
          <span style="font-weight: 400;">Nossos Planos VIP </span>
        </h1>
        <p class="u-large-text u-text u-text-variant u-text-2">Veja abaixo!</p>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-grey-70 u-section-2" id="sec-f333">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-text u-text-default u-text-1">Planos VIP</h2>
        <div class="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
          <div class="u-gutter-0 u-layout">
            <div class="u-layout-row">
              <div class="u-align-center u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-container-style u-grey-5 u-layout-cell u-left-cell u-radius-20 u-shape-round u-size-15 u-size-30-md u-layout-cell-1">
                <div class="u-container-layout u-container-layout-1">
                  <h4 class="u-text u-text-2">Normal</h4>
                  <h2 class="u-text u-text-3">Free</h2>
                  <p class="u-align-center u-text u-text-4">Rank Padrão</p>
                </div>
              </div>
              <div class="u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-container-style u-grey-10 u-layout-cell u-radius-20 u-shape-round u-size-15 u-size-30-md u-layout-cell-2">
                <div class="u-container-layout u-valign-middle u-container-layout-2">
                  <h4 class="u-align-center u-text u-text-5">VIP</h4>
                  <h2 class="u-align-center u-text u-text-6">R$ 9,99</h2>
                  <p class="u-align-center u-text u-text-7">30 DIAS</p>
                  <a href="https://api.hypeds.com/v5/checkout/vip" class="u-border-none u-btn u-btn-round u-button-style u-palette-1-base u-radius-50 u-btn-1">Compre</a>
                </div>
              </div>
              <div class="u-container-style u-grey-15 u-layout-cell u-radius-20 u-shape-round u-size-15 u-size-30-md u-layout-cell-3">
                <div class="u-container-layout u-container-layout-3">
                  <h4 class="u-align-center u-text u-text-8">MVP</h4>
                  <h2 class="u-align-center u-text u-text-9">R$ 24,99</h2>
                  <p class="u-align-center u-text u-text-10">30 DIAS</p>
                  <a href="https://api.hypeds.com/v5/checkout/mvp" class="u-border-none u-btn u-btn-round u-button-style u-palette-1-dark-2 u-radius-50 u-btn-2">Compre</a>
                </div>
              </div>
              <div class="u-align-center u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-container-style u-grey-10 u-layout-cell u-radius-20 u-right-cell u-shape-round u-size-15 u-size-30-md u-layout-cell-4">
                <div class="u-container-layout u-valign-middle u-container-layout-4">
                  <h4 class="u-text u-text-11">MVP+</h4>
                  <h2 class="u-text u-text-12">R$ 49,99</h2>
                  <p class="u-text u-text-13">30 DIAS</p>
                  <a href="https://api.hypeds.com/v5/checkout/mvpplus" class="u-border-none u-btn u-btn-round u-button-style u-palette-5-dark-3 u-radius-50 u-btn-3">Compre</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-grey-70 u-section-3" id="sec-0db6">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-expanded-width u-table u-table-responsive u-table-1">
          <table class="u-table-entity u-table-entity-1">
            <colgroup>
              <col width="25%">
              <col width="24.1%">
              <col width="25.9%">
              <col width="25%">
            </colgroup>
            <thead class="u-palette-4-base u-table-header u-table-header-1">
              <tr style="height: 68px;">
                <th class="u-grey-70 u-table-cell u-table-cell-1"></th>
                <th class="u-palette-1-base u-table-cell u-table-cell-2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; VIP</th>
                <th class="u-palette-1-dark-2 u-table-cell u-table-cell-3">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;MVP</th>
                <th class="u-palette-5-dark-3 u-table-cell u-table-cell-4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; MVP +</th>
              </tr>
            </thead>
            <tbody class="u-table-body">
              <tr style="height: 75px;">
                <td class="u-border-2 u-border-grey-60 u-first-column u-palette-1-dark-1 u-table-cell u-table-cell-5">BENEFÍCIOS RANKUP</td>
                <td class="u-grey-10 u-table-cell u-table-cell-6"></td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-7"></td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-8"></td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-first-column u-grey-5 u-table-cell u-table-cell-9">Apoie o servidor</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-10">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-11">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-12">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 74px;">
                <td class="u-border-2 u-border-grey-60 u-first-column u-grey-5 u-table-cell u-table-cell-13">Voar no Lobby</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-14">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-15">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-first-column u-grey-5 u-table-cell u-table-cell-17">Não perde XP ao
morrer</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-18">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-19">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-20">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-21">Desconto no /shop</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-22">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;5%</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-23">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;10%</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-24">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;15%</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-25">Acesso ao chat com cores</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-26">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-27">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-28">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 75px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-29">Kit mensal/semanal/diário</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-30">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;VIP</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-31">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;VIP e MVP</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-32">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;VIP e MVP e MVP+</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-33">Mina Especial</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-34">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;VIP</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-35">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;VIP e MVP</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-36">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;VIP e MVP e MVP+</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-palette-1-dark-1 u-table-cell u-table-cell-37">BENEFÍCIOS FACTIONS</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-38"></td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-39"></td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-40"></td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-41">Cores no Chat</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-42">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-43">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-44">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-45">Não perder XP ao morrer</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-46">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-47">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-48">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-49">Usar cores em placas</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-50">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-51">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-52">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-53">Voar no Lobby</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-54">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-55">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-56">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-57">Voar na Fac</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-58">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-59">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-60">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-61">/back</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-62">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-63">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-64">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-65">/craft</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-66">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-67">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-68">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-69">Kit mensal/semanal/diário</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-70">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;VIP</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-71">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;VIP e MVP</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-72">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;VIP e MVP e MVP+</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-73">Bônus ao vender itens</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-74">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;10%</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-75">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;20%</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-76">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;30%</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-77">Nunca fica com fome</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-78">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-79">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-80">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-81">Echest maior(2x)</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-82">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-83">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-84">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-palette-1-dark-1 u-table-cell u-table-cell-85">BENEFÍCIOS SKY/BED WARS</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-86">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-87"></td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-88"></td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-89">Voar no lobby</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-90">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-91">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-92">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-93">Cosméticos exclusivos</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-94">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-95">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-96">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-97">Seletor de Mapas</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-98">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-99">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-100">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-101">Espectar outras partidas</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-102">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-103">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-104">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-palette-1-dark-1 u-table-cell u-table-cell-105">BENEFÍCIOS DISCORD</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-106"></td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-107"></td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-108"></td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-109">Sala de voz exclusiva</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-110">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-111">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-112">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-113">Cargo exclusivo</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-114">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-115">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-116">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-117">Alterar o Apelido</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-118">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Não</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-119">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-120">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sim</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-grey-5 u-table-cell u-table-cell-121">Bônus de XP no HYPED | Bot</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-122">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1.5x</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-123">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2x</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-124">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3x</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-border-2 u-border-grey-60 u-palette-1-light-1 u-table-cell u-table-cell-125">Bônus de cash em primeira compra</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-126">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;500</td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-127">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1000</td>
                <td class="u-border-1 u-border-grey-30 u-grey-10 u-table-cell u-table-cell-128">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2000</td>
              </tr>
              <tr style="height: 76px;">
                <td class="u-grey-70 u-table-cell u-table-cell-129"></td>
                <td class="u-border-1 u-border-grey-30 u-palette-1-light-1 u-table-cell u-table-cell-130"></td>
                <td class="u-border-1 u-border-grey-30 u-grey-15 u-table-cell u-table-cell-131"></td>
                <td class="u-border-1 u-border-grey-30 u-palette-1-dark-1 u-table-cell u-table-cell-132"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <a href="https://api.hypeds.com/v5/checkout/vip" class="u-border-none u-btn u-btn-round u-button-style u-palette-1-base u-radius-50 u-btn-1">Compre</a>
        <a href="https://api.hypeds.com/v5/checkout/mvp" class="u-border-none u-btn u-btn-round u-button-style u-palette-1-dark-2 u-radius-50 u-btn-2">Compre</a>
        <a href="https://api.hypeds.com/v5/checkout/mvpplus" class="u-border-none u-btn u-btn-round u-button-style u-palette-5-dark-3 u-radius-50 u-btn-3">Compre</a>
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
            <a href="https://www.hypeds.com//discord" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-3">Discord</a>
          </span>
          <br>
        </p>
        <p class="u-text u-text-2">
          <a href="https://www.hypeds.com//tos" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4">TOS</a>
        </p>
        <p class="u-small-text u-text u-text-variant u-text-3">© HYPED GROUP 2022</p>
      </div></footer>
  
</body></html>`)
})

module.exports = router;