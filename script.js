
function clear() {
  var body = document.body;
  var childNodes = body.childNodes;
  for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];
    if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.name !== "BROWSER") {
      body.removeChild(node);
    }
  }
}

function change() {

  document.title = "Blues Bypass";
  clear();
  var link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = 'favicon.ico';


  var script = document.createElement('script');

  script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';

  script.setAttribute('async', '');
  script.setAttribute('defer', '');

  function initializeCrate() {
      new Crate({
          server: '1184246690761424987', 
          channel: '1184246692485288120' 
      });
  }


script.onload = initializeCrate;


document.body.appendChild(script);

  var favicons = document.getElementsByTagName('link');
  for (var i = 0; i < favicons.length; i++) {
    if (favicons[i].rel === 'icon') {
      document.head.removeChild(favicons[i]);
      break;
    }
  }

  scrollTo(0, 0)
  document.body.style.alignItems = "center";
  document.body.style.justifyContent = "center";
  document.body.style.overflow = "visible";
  document.body.style.height = "330vh";


  document.body.style.backgroundColor = "#444444";
  var bg = document.createElement('div');
  bg.id = "background"
  document.body.appendChild(bg);

  for (let i = 1; i <= 25; i++) {
    var containerName = 'container' + i;
    window[containerName] = createContainer(15 + (7.5 * (i - 1)) + '%');
   
  }
  
  
  function createContainer(top) {
    var container = document.createElement("div");
    container.style.top = top;
    container.classList.add("container")
    document.body.appendChild(container);
    return container;
  }

  function createFrame(top, src) {
    var existingFrame = document.querySelector('iframe[name="BROWSER"]');
    
    // Check if the iframe with name "BROWSER" exists
    if (!existingFrame) {
      var container = document.createElement("iframe");
      container.src = src;
      container.style.top = top;
      container.classList.add("iframe");
      container.name = "BROWSER";
      document.body.appendChild(container);
      return container;
    } else {
      console.log("Iframe already exists. Not creating a new one.");
      return existingFrame;
    }
  }
  function createFrame2(top, src) {
    var existingFrame = document.querySelector('iframe[name="BROWSER2"]');
    
    // Check if the iframe with name "BROWSER" exists
    if (!existingFrame) {
      var container = document.createElement("iframe");
      container.src = src;
      container.style.top = top;
      container.classList.add("iframe");
      container.name = "BROWSER2";
      document.body.appendChild(container);
      return container;
    } else {
      console.log("Iframe already exists. Not creating a new one.");
      return existingFrame;
    }
  }
  
  // Call the function
  var browserFrame = createFrame(250 + "vh", "https://browser.rammerhead.org/");
  var FirefoxFrame = createFrame2(350 + "vh", "https://replit.com/@kornineq/Unblocked-Browser?embed=true");
 

  createObject(container1, "rgba(0,0,0,0)", "Scroll all the way down for 2 unblocked browsers", " ");

  createObject(container2, "rgba(0,0,0,0.5)", "Dino game", "https://chromedino.com/");
  createObject(container2, "rgba(0,0,0,0.5)", "Slime Simulator", "https://turbowarp.org/688840478/embed");
  createObject(container2, "rgba(0,0,0,0.5)", "FNF", "https://static.playunblocked.com/2021/04/friday-night-funkin/");
  createObject(container2, "rgba(0,0,0,0.5)", "Chess", "https://toytheater.com/chess.php");

  createObject(container3, "rgba(0,0,0,0.5)", "Subway Surfers", "https://superteamxx.github.io/Subway-Surfers/");
  createObject(container3, "rgba(0,0,0,0.5)", "GD Scratch", "https://turbowarp.org/105500895/embed");
  createObject(container3, "rgba(0,0,0,0.5)", "Youtube bypass", "https://speedtesting.herokuapp.com/videodrive/?m=Video_To_Drive");
  createObject(container3, "rgba(0,0,0,0.5)", "2d Minecraft", "https://turbowarp.org/10128407/embed");
  createObject(container3, "rgba(0,0,0,0.5)", "Mario", "https://jcw87.github.io/c2-smb1/");
  createObject(container3, "rgba(0,0,0,0.5)", "Bored button", "https://www.boredbutton.com/random");
  
  createObject(container4, "rgba(0,0,0,0.5)", "Riddle School", "https://sz-games.github.io/games/ridd");
  createObject(container4, "rgba(0,0,0,0.5)", "Riddle School 2", "https://sz-games.github.io/games/ridd2");
  createObject(container4, "rgba(0,0,0,0.5)", "Riddle School 3", "https://sz-games.github.io/games/ridd3");
  createObject(container4, "rgba(0,0,0,0.5)", "Riddle School 4", "https://sz-games.github.io/games/ridd4");
  createObject(container4, "rgba(0,0,0,0.5)", "Riddle School 5", "https://sz-games.github.io/games/ridd5");
  createObject(container4, "rgba(0,0,0,0.5)", "Riddle Transfer", "https://sz-games.github.io/games/ridd6");
  createObject(container4, "rgba(0,0,0,0.5)", "Riddle Transfer 2", "https://sz-games.github.io/games/ridd7");
  
  createObject(container5, "rgba(0,0,0,0.5)", "Smash Karts", "https://games.crazygames.com/en_US/smash-karts/index.html");
  createObject(container5, "rgba(0,0,0,0.5)", "Agar.io", "https://emupedia.net/emupedia-game-agar.io/");
  createObject(container5, "rgba(0,0,0,0.5)", "Stack", "https://sz-games.github.io/games/stack");
  createObject(container5, "rgba(0,0,0,0.5)", "Checkers", "https://toytheater.com/checkers.php");
  
  createObject(container6, "rgba(0,0,0,0.5)", "Crossy Road", "https://sz-games.github.io/cr/");
  createObject(container6, "rgba(0,0,0,0.5)", "Fluids", "https://sz-games.github.io/storage3/1/");
  createObject(container6, "rgba(0,0,0,0.5)", "Temple Run 2", "https://mr-funkinguy.github.io/Abc6782/games/temple-run-2/index.html");
  
  createObject(container7, "rgba(0,0,0,0.5)", "Doodle Jump", "https://mr-funkinguy.github.io/gfile/doodle/index.html");
  createObject(container7, "rgba(0,0,0,0.5)", "Paper.io 2", "https://paper-io.com/");
  createObject(container7, "rgba(0,0,0,0.5)", "Fruit Ninja", "https://mr-funkinguy.github.io/Abc6782/games/fruitNinja/index.html");
  createObject(container7, "rgba(0,0,0,0.5)", "Bloxorz", " https://bloxorz.io/1.embed");

  createObject(container8, "rgba(0,0,0,0.5)", "BTD", "https://mr-funkinguy.github.io/GameStuff/gfiles/btd/");
  createObject(container8, "rgba(0,0,0,0.5)", "BTD2", "https://mr-funkinguy.github.io/GameStuff/gfiles/btd2/index.html");
  createObject(container8, "rgba(0,0,0,0.5)", "BTD3", "https://games.crazygames.com/en_US/bloons-tower-defense-3/index.html");
  createObject(container8, "rgba(0,0,0,0.5)", "BTD4", "https://games.crazygames.com/en_US/bloons-tower-defense-4/index.html");
  createObject(container8, "rgba(0,0,0,0.5)", "BTD5", "https://www.miniplay.com/embed/bloons-td-5");

  createObject(container9, "rgba(0,0,0,0.5)", "Tiny Fishing", "https://html5.gamedistribution.com/5ee4b0222a474e44880b6c6d9f96754d/?gd_sdk_referrer_url=https://tinyfishing.co/tiny-fishing-unblocked");
  createObject(container9, "rgba(0,0,0,0.5)", "The Impossible Quiz", "https://cdn2.addictinggames.com/addictinggames-content/ag-assets/content-items/html5-games/theimpossiblequiz/index.html");
  createObject(container9, "rgba(0,0,0,0.5)", "Stupid Clicker", "https://turbowarp.org/774324107/embed");
  createObject(container9, "rgba(0,0,0,0.5)", "Lil Oasis", "https://turbowarp.org/859599778/embed");
  createObject(container9, "rgba(0,0,0,0.5)", "Lil Oasis Expanded", "https://turbowarp.org/860600597/embed")
  createObject(container9, "rgba(0,0,0,0.5)", "Google Snake!", "https://mr-funkinguy.github.io/gfile/snake/index.html");;

  createObject(container10,"rgba(0,0,0,0.5)", "Are you kidding me?", "https://turbowarp.org/836226987/embed");
  createObject(container10, "rgba(0,0,0,0.5)", "AYKM Hard Mode", "https://turbowarp.org/846897438/embed");
  createObject(container10, "rgba(0,0,0,0.5)", "AYKM Easy Mode", "https://turbowarp.org/863130622/embed");
  createObject(container10, "rgba(0,0,0,0.5)", "AYKM Cursed Mode", "https://turbowarp.org/863109457/embed");
  createObject(container10, "rgba(0,0,0,0.5)", "AYKM Sanic Mode", "https://turbowarp.org/863584949/embed");
  createObject(container10, "rgba(0,0,0,0.5)", "AYKM Lots of Stuff Mode", "https://turbowarp.org/863553943/embed");
  createObject(container10, "rgba(0,0,0,0.5)", "AYKM Dark Mode", "https://turbowarp.org/863602237/embed");

  createObject(container11, "rgba(0,0,0,0)", "All remakes -->", " ");
  createObject(container11, "rgba(0,0,0,0.5)", "FNAF", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-1/index.html");
  createObject(container11, "rgba(0,0,0,0.5)", "FNAF 2", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-2/index.html");
  createObject(container11, "rgba(0,0,0,0.5)", "FNAF 3", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-3/index.html");
  createObject(container11, "rgba(0,0,0,0.5)", "FNAF 4", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-4/index.html");

  createObject(container12, "rgba(0,0,0,0.5)", "Little Alchemy", "https://littlealchemy.com");
  createObject(container12, "rgba(0,0,0,0.5)", "Little Alchemy 2", "https://littlealchemy2.com");
  createObject(container12, "rgba(0,0,0,0.5)", "Blackjack", "https://www.247blackjack.com/");

  createObject(container13, "rgba(0,0,0,0.5)", "Spotify", "https://open.spotify.com/");
  createObject(container13, "rgba(0,0,0,0.5)", "GBA games", "https://bobzgames.github.io/GBA/");
  createObject(container13, "rgba(0,0,0,0.5)", "Mario 64", "https://sm64webbackup--collintyes.repl.co/");
  createObject(container13, "rgba(0,0,0,0.5)", "Minecraft (kinda)", "https://ubg100.github.io/games/eaglercraft/index.html");
  createObject(container13, "rgba(0,0,0,0.5)", "Tunnel Rush", "https://tunnelrush.github.io/games/tunnel-rush/index.html");

  createObject(container14, "rgba(0,0,0,0.5)", "SZ Games", "https://sz-games.github.io/");

  createObject(container15, "rgba(0,0,0,0.5)","2048", "https://play2048.co");
  createObject(container15, "rgba(0,0,0,0.5)","9007199254740992", "https://dmitrykuzmenko.github.io/2048/");
  createObject(container15, "rgba(0,0,0,0.5)","11", "http://suki.ipb.ac.rs/11/");
  createObject(container15, "rgba(0,0,0,0.5)","590295810358705700000", "https://thereal23.github.io/590295810358705700000/");
  createObject(container15, "rgba(0,0,0,0.5)","2048 Alphabet", "https://vdmitriyev.github.io/2048/");

  createObject(container16, "rgba(0,0,0,0.5)", "Slope", "https://slope2.online/1.embed");
  createObject(container16, "rgba(0,0,0,0.5)", "Pinball", "https://toytheater.com/space-pinball.php");
  createObject(container16, "rgba(0,0,0,0.5)", "Ocarina of Time", "https://static.arcadespot.com/retroemulator.php?system=n64&game=2017/06/the-legend-of-zelda-ocarina-of-time.zip");

  createObject(container17, "rgba(0,0,0,0.5)", "Basket Random", "https://files.twoplayergames.org/files/games/other/Basket_Random/index.html");
  createObject(container17, "rgba(0,0,0,0.5)", "Volley Random", "https://www.twoplayergames.org/gameframe/volley-random");
  createObject(container17, "rgba(0,0,0,0.5)", "Soccer Random", "https://www.twoplayergames.org/gameframe/soccer-random");
  createObject(container17, "rgba(0,0,0,0.5)", "Boxing Random", "https://www.twoplayergames.org/gameframe/boxing-random");

  createObject(container18, "rgba(0,0,0,0.5)", "Tomb of the Mask", "https://tombofthemask.github.io/g8/tomb-of-the-mask/");
  createObject(container18, "rgba(0,0,0,0.5)", "Bitlife", "https://mr-funkinguy.github.io/Abc6782/games/bitlife/");
  createObject(container18, "rgba(0,0,0,0.5)", "1v1.lol", "https://1v1.lol/");

  createObject(container19, "rgba(0,0,0,0.5)", "Smash 64", "https://gamesfrog.com/games/n64/super-smash-bros/iframe");

  createObject(container20,"rgba(0,0,0,0.5)", "Super Smash Flash", "https://mr-funkinguy.github.io/GameStuff/gfiles/ssf/");
  createObject(container20,"rgba(0,0,0,0.5)", "Flappy Bird", "https://mr-funkinguy.github.io/83/flappy-bird/index.html");
  createObject(container20,"rgba(0,0,0,0.5)", "UNO! but ripoff", "https://mr-funkinguy.github.io/Abc6782/games/uno/index.html");
  createObject(container20,"rgba(0,0,0,0.5)", "Wordle", "https://sz-games.github.io/Games2/wordle");

  createObject(container21,"rgba(0,0,0,0.5)", "Stickman Hook", "https://sz-games.github.io/Games5/stickman-hook");
  createObject(container21,"rgba(0,0,0,0.5)", "Cell Machine", "https://html-classic.itch.zone/html/2472216/index.html");
  createObject(container21,"rgba(0,0,0,0.5)", "Street Fighter II", "https://sz-games.github.io/games3/fighter2");
  createObject(container21,"rgba(0,0,0,0.5)", "5 nights at winstons", "https://mr-funkinguy.github.io/75/projects/fnaw/index.html");
  createObject(container21,"rgba(0,0,0,0.5)", "MOTO X3M", "https://tbg95.github.io/moto-x3m/game");

  createObject(container22,"rgba(0,0,0,0.5)", "Cut the Rope", "https://sz-games.github.io/Games5/ctr");
  createObject(container22,"rgba(0,0,0,0.5)", "Stackball", "https://sz-games.github.io/Games7/stackball/");
  createObject(container22,"rgba(0,0,0,0.5)", "Paper Fold", "https://sz-games.github.io/Games8/paper-fold");
  createObject(container22,"rgba(0,0,0,0.5)", "Sand Game", "https://sz-games.github.io/Games6/sand-game");

  createObject(container22,"rgba(0,0,0,0.5)", "SANS FIGHT", "https://sz-games.github.io/Games6/sansfight");
  createObject(container22,"rgba(0,0,0,0.5)", "Run 3", "https://sz-games.github.io/Games-2/run3/");
  createObject(container22,"rgba(0,0,0,0.5)", "Money Rush", "https://sz-games.github.io/Games8/MONEYRUSH");

  createObject(container23, "rgba(0,0,0,0.5)", "Clockwork", "https://clockwork-os.vercel.app/os/");
  createObject(container23, "rgba(0,0,0,0.5)", "Sodium", "https://sodium-5h8.pages.dev/welcome");
  createObject(container23, "rgba(0,0,0,0.5)", "Zatoga", "https://zatoga.net/");
  createObject(container23, "rgba(0,0,0,0.5)", "Utopia", "https://howtomath.org/main.html");

  createObject(container24, "rgba(0,0,0,0.5)", "Cookie Clicker", "https://cookieclickerunblocked.github.io/games/cookie-clicker/index.html");
  createObject(container24, "rgba(0,0,0,0.5)", "Antimatter Dimensions", "https://ivark.github.io/AntimatterDimensions/");
  createObject(container24, "rgba(0,0,0,0.5)", "Clicker Heroes", "https://games-online.io/game/ClickerHeroes/");

  createObject(container25, "rgba(0,0,0,0.5)", "Discord", "https://discord.com/app");
  createObject(container25, "rgba(0,0,0,0.5)", "Neal.fun", "https://neal.fun");

  function createObject(parent, backgroundColor, text, url) {
    var button = document.createElement("button");
    button.classList.add("button");
    button.style.backgroundColor = backgroundColor;
    button.textContent = text;
    button.onclick = function () {
      if (url !== " ") {
        clear();
        open(url);
      }
    
    };
  
    var textColor = "#ffffff"
    button.style.color = textColor;
  
    var observer = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) {
        var buttonWidth = entry.contentRect.width;
        var fontSize = Math.floor(buttonWidth/12);
        if (fontSize > 40) {
          button.style.fontSize = "40px";
        } else {
          button.style.fontSize = fontSize + "px";
        }
      });
    });
    parent.appendChild(button);
    observer.observe(button);
  }
  
  
  



  
  function open(url) {
    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.classList.add("emulation-container")
    document.body.appendChild(iframe);
    browserFrame.style.height = "0%"
    browserFrame.style.width = "0%"
    FirefoxFrame.style.height = "0%"
    FirefoxFrame.style.width = "0%"
  
    var button = document.createElement("button");
    button.id = "buttonback";
    button.textContent = "X"
    button.onclick = function () {
      
      change();
      browserFrame.style.height = "100%"
      browserFrame.style.width = "100%"
      FirefoxFrame.style.height = "100%"
      FirefoxFrame.style.width = "100%"
      
    };
  
    document.body.appendChild(button);
  }
}
