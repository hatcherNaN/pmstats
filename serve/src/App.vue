<template>
  <div id="app" align="center">
    <div class="header">
      <div class="header-inner">
        <ul class="nav" align="center">
          <li><router-link to="/" class="button nav-first">使用率曲线</router-link></li>
          <li><router-link to="/Tm" class="button nav-last">队友选择</router-link></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
/*! CSS Used from: https://pokemonshowdown.com/style/main.css?v14 */
a img{border:0;}
.header{margin:0 0 30px;background:#e5ecfb;background:-webkit-gradient(linear,left top,left bottom,from(#E8EEFC),to(#D7DEEA));background:-moz-linear-gradient(top,#E8EEFC,#D7DEEA);background:linear-gradient(top,#E8EEFC,#D7DEEA);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#E8EEFC',endColorstr='#D7DEEA');border-bottom:1px solid #aaa;box-shadow:inset 1px 1px 0 rgba(255,255,255,.6),0 2px 2px rgba(0,0,0,.15);min-height:50px;}
.header-inner{max-width:500px;margin:0 auto;}
.nav,.nav li,.nav-play,.nav-play li{display:block;list-style:none;margin:0;padding:0;float:left;}
.nav{padding:15px 6px;}
.header .nav{padding:15px 0 15px 155px;}
.header .nav-play{padding:15px 0 15px 10px;}
.nav .button{position:relative;padding:5px 10px;margin:0 -1px 0 0;border-radius:0;}
.nav .button img{position:absolute;top:-8px;left:-150px;}
.nav .button.cur,.nav .button.cur:hover{color:#777;background:#f8f8f8;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);-moz-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2);}
.nav .button.cur:hover{border:solid 1px #888;}
.nav .button:hover{z-index:10;}
.nav .button.nav-first{border-top-left-radius:5px;border-bottom-left-radius:5px;}
.nav .button.nav-last{border-top-right-radius:5px;border-bottom-right-radius:5px;}
@media (max-width:600px){
.header .nav{padding:60px 0 15px 6px;}
.header .nav-play{position:absolute;top:-38px;left:313px;}
.nav .button img{position:absolute;top:-50px;left:0;}
}
@media (max-width:400px){
.header .nav-play{position:absolute;top:-38px;left:auto;right:15px;}
.header .nav li:last-child{display:none;}
.nav.nav-play li:last-child{display:block;}
}
.button{outline:none;cursor:pointer;text-align:center;text-decoration:none;text-shadow:0 1px 0 rgba(255,255,255,.4);border-radius:5px;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2),inset 0 -1px 2px #fff;-moz-box-shadow:0 1px 2px rgba(0,0,0,.2),inset 0 -1px 2px #fff;box-shadow:0 1px 2px rgba(0,0,0,.2),inset 0 -1px 2px #fff;white-space:nowrap;color:#222;border:solid 1px #aaa;background:#e3e3e3;background:-webkit-gradient(linear,left top,left bottom,from(#f6f6f6),to(#e3e3e3));background:-moz-linear-gradient(top,#f6f6f6,#e3e3e3);background:linear-gradient(top,#f6f6f6,#e3e3e3);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6',endColorstr='#e3e3e3');}
.button:hover{background:#cfcfcf;background:-webkit-gradient(linear,left top,left bottom,from(#f2f2f2),to(#cfcfcf));background:-moz-linear-gradient(top,#f2f2f2,#cfcfcf);background:linear-gradient(top,#f2f2f2,#cfcfcf);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f2f2f2',endColorstr='#cfcfcf');border-color:#606060;}
.button:active{background:-webkit-gradient(linear,left top,left bottom,from(#cfcfcf),to(#f2f2f2));background:-moz-linear-gradient(top,#cfcfcf,#f2f2f2);background:linear-gradient(top,#cfcfcf,#f2f2f2);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#cfcfcf',endColorstr='#f2f2f2');}
.greenbutton{background:#ebf3e8;background:-webkit-gradient(linear,left top,left bottom,from(hsl(100,30%,97%)),to(hsl(100,30%,84%)));background:-moz-linear-gradient(top,hsl(100,30%,97%),hsl(100,30%,84%));background:linear-gradient(top,hsl(100,30%,97%),hsl(100,30%,84%));border-color:#abc99c;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6',endColorstr='#e3e3e3');}
.greenbutton:hover{background:#dbe8d4;background:-webkit-gradient(linear,left top,left bottom,from(hsl(100,30%,94%)),to(hsl(100,30%,77%)));background:-moz-linear-gradient(top,hsl(100,30%,94%),hsl(100,30%,77%));background:linear-gradient(top,hsl(100,30%,94%),hsl(100,30%,77%));border-color:#5e8849;}
.greenbutton:active{background:#bed6b3;background:-webkit-gradient(linear,left top,left bottom,from(hsl(100,30%,77%)),to(hsl(100,30%,83%)));background:-moz-linear-gradient(top,hsl(100,30%,77%),hsl(100,30%,83%));background:linear-gradient(top,hsl(100,30%,77%),hsl(100,30%,83%));border-color:#5e8849;}
</style>
