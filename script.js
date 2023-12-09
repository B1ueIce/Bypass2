
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
  var browserFrame = createFrame(230 + "vh", "https://browser.rammerhead.org/");
  var FirefoxFrame = createFrame2(330 + "vh", "https://replit.com/@kornineq/Unblocked-Browser?embed=true");
 

  //createObject(container1, "rgb(0,0,0)", "Browser", "https://cloudflare.rammerhead.org");

  createObject(container1, "rgba(0,0,0,0)", "Scroll all the way down for 2 unblocked browsers", " ");

  createObject(container2, "rgb(0,0,0)", "Dino game", "https://chromedino.com/");
  createObject(container2, "rgb(0,0,0)", "Slime Simulator", "https://turbowarp.org/688840478/embed");
  createObject(container2, "rgb(0,0,0)", "Clicker Heroes", "https://games-online.io/game/ClickerHeroes/");
  createObject(container2, "rgb(0,0,0)", "FNF", "https://static.playunblocked.com/2021/04/friday-night-funkin/");
  createObject(container2, "rgb(0,0,0)", "Chess", "https://toytheater.com/chess.php");

  //createObject(container2, "rgb(0,0,0)", "diep.io", "https://diep.io/");
  
  createObject(container3, "rgb(0,0,0)", "Subway Surfers", "https://superteamxx.github.io/Subway-Surfers/");
  createObject(container3, "rgb(0,0,0)", "GD Scratch", "https://turbowarp.org/105500895/embed");
  createObject(container3, "rgb(0,0,0)", "Youtube bypass", "https://speedtesting.herokuapp.com/videodrive/?m=Video_To_Drive");
  createObject(container3, "rgb(0,0,0)", "2d Minecraft", "https://turbowarp.org/10128407/embed");
  createObject(container3, "rgb(0,0,0)", "Mario", "https://jcw87.github.io/c2-smb1/");
  createObject(container3, "rgb(0,0,0)", "Bored button", "https://www.boredbutton.com/random");
  
  createObject(container4, "rgb(0,0,0)", "Riddle School", "https://sz-games.github.io/games/ridd");
  createObject(container4, "rgb(0,0,0)", "Riddle School 2", "https://sz-games.github.io/games/ridd2");
  createObject(container4, "rgb(0,0,0)", "Riddle School 3", "https://sz-games.github.io/games/ridd3");
  createObject(container4, "rgb(0,0,0)", "Riddle School 4", "https://sz-games.github.io/games/ridd4");
  createObject(container4, "rgb(0,0,0)", "Riddle School 5", "https://sz-games.github.io/games/ridd5");
  createObject(container4, "rgb(0,0,0)", "Riddle Transfer", "https://sz-games.github.io/games/ridd6");
  createObject(container4, "rgb(0,0,0)", "Riddle Transfer 2", "https://sz-games.github.io/games/ridd7");
  
  createObject(container5, "rgb(0,0,0)", "Smash Karts", "https://games.crazygames.com/en_US/smash-karts/index.html");
  createObject(container5, "rgb(0,0,0)", "Agar.io", "https://emupedia.net/emupedia-game-agar.io/");
  createObject(container5, "rgb(0,0,0)", "Stack", "https://sz-games.github.io/games/stack");
  createObject(container5, "rgb(0,0,0)", "Checkers", "https://toytheater.com/checkers.php");
  
  createObject(container6, "rgb(0,0,0)", "Crossy Road", "https://sz-games.github.io/cr/");
  createObject(container6, "rgb(0,0,0)", "Fluids", "https://sz-games.github.io/storage3/1/");
  createObject(container6, "rgb(0,0,0)", "Temple Run 2", "https://mr-funkinguy.github.io/Abc6782/games/temple-run-2/index.html");
  
  createObject(container7, "rgb(0,0,0)", "Doodle Jump", "https://mr-funkinguy.github.io/gfile/doodle/index.html");
  createObject(container7, "rgb(0,0,0)", "Paper.io 2", "https://paper-io.com/");
  createObject(container7, "rgb(0,0,0)", "Fruit Ninja", "https://mr-funkinguy.github.io/Abc6782/games/fruitNinja/index.html");
  createObject(container7, "rgb(0,0,0)", "Bloxorz", " https://bloxorz.io/1.embed");

  createObject(container8, "rgb(0,0,0)", "BTD", "https://mr-funkinguy.github.io/GameStuff/gfiles/btd/");
  createObject(container8, "rgb(0,0,0)", "BTD2", "https://mr-funkinguy.github.io/GameStuff/gfiles/btd2/index.html");
  createObject(container8, "rgb(0,0,0)", "BTD3", "https://games.crazygames.com/en_US/bloons-tower-defense-3/index.html");
  createObject(container8, "rgb(0,0,0)", "BTD4", "https://games.crazygames.com/en_US/bloons-tower-defense-4/index.html");
  createObject(container8, "rgb(0,0,0)", "BTD5", "https://www.miniplay.com/embed/bloons-td-5");

  createObject(container9, "rgb(0,0,0)", "Tiny Fishing", "https://html5.gamedistribution.com/5ee4b0222a474e44880b6c6d9f96754d/?gd_sdk_referrer_url=https://tinyfishing.co/tiny-fishing-unblocked");
  createObject(container9, "rgb(0,0,0)", "The Impossible Quiz", "https://cdn2.addictinggames.com/addictinggames-content/ag-assets/content-items/html5-games/theimpossiblequiz/index.html");
  createObject(container9, "rgb(0,0,0)", "Stupid Clicker", "https://turbowarp.org/774324107/embed");
  createObject(container9, "rgb(0,0,0)", "Lil Oasis", "https://turbowarp.org/859599778/embed");
  createObject(container9, "rgb(0,0,0)", "Lil Oasis Expanded", "https://turbowarp.org/860600597/embed")
  createObject(container9, "rgb(0,0,0)", "Google Snake!", "https://mr-funkinguy.github.io/gfile/snake/index.html");;

  createObject(container10,"rgb(0,0,0)", "Are you kidding me?", "https://turbowarp.org/836226987/embed");
  createObject(container10, "rgb(0,0,0)", "AYKM Hard Mode", "https://turbowarp.org/846897438/embed");
  createObject(container10, "rgb(0,0,0)", "AYKM Easy Mode", "https://turbowarp.org/863130622/embed");
  createObject(container10, "rgb(0,0,0)", "AYKM Cursed Mode", "https://turbowarp.org/863109457/embed");
  createObject(container10, "rgb(0,0,0)", "AYKM Sanic Mode", "https://turbowarp.org/863584949/embed");
  createObject(container10, "rgb(0,0,0)", "AYKM Lots of Stuff Mode", "https://turbowarp.org/863553943/embed");
  createObject(container10, "rgb(0,0,0)", "AYKM Dark Mode", "https://turbowarp.org/863602237/embed");
  
  createObject(container11, "rgb(0,0,0)", "FNAF", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-1/index.html");
  createObject(container11, "rgb(0,0,0)", "FNAF 2 (Remake)", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-2/index.html");
  createObject(container11, "rgb(0,0,0)", "FNAF 3", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-3/index.html");
  createObject(container11, "rgb(0,0,0)", "FNAF 4", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-4/index.html");

  createObject(container12, "rgb(0,0,0)", "Little Alchemy", "https://littlealchemy.com");
  createObject(container12, "rgb(0,0,0)", "Little Alchemy 2", "https://littlealchemy2.com");
  createObject(container12, "rgb(0,0,0)", "Blackjack", "https://www.247blackjack.com/");

  createObject(container13, "rgb(0,0,0)", "Spotify", "https://open.spotify.com/");
  createObject(container13, "rgb(0,0,0)", "GBA games", "https://bobzgames.github.io/GBA/");
  createObject(container13, "rgb(0,0,0)", "Mario 64", "https://sm64webbackup--collintyes.repl.co/");
  createObject(container13, "rgb(0,0,0)", "Minecraft (kinda)", "https://ubg100.github.io/games/eaglercraft/index.html");
  createObject(container13, "rgb(0,0,0)", "Tunnel Rush", "https://tunnelrush.github.io/games/tunnel-rush/index.html");

  createObject(container14, "rgb(0,0,0)", "SZ Games", "https://sz-games.github.io/");

  createObject(container15, "rgb(0,0,0)","2048", "https://play2048.co");
  createObject(container15, "rgb(0,0,0)","9007199254740992", "https://dmitrykuzmenko.github.io/2048/");
  createObject(container15, "rgb(0,0,0)","11", "http://suki.ipb.ac.rs/11/");
  createObject(container15, "rgb(0,0,0)","590295810358705700000", "https://thereal23.github.io/590295810358705700000/");
  createObject(container15, "rgb(0,0,0)","2048 Alphabet", "https://vdmitriyev.github.io/2048/");

  createObject(container16, "rgb(0,0,0)", "Slope", "https://slope2.online/1.embed");
  createObject(container16, "rgb(0,0,0)", "Pinball", "https://toytheater.com/space-pinball.php");
  createObject(container16, "rgb(0,0,0)", "Ocarina of Time", "https://static.arcadespot.com/retroemulator.php?system=n64&game=2017/06/the-legend-of-zelda-ocarina-of-time.zip");

  createObject(container17, "rgb(0,0,0)", "Basket Random", "https://files.twoplayergames.org/files/games/other/Basket_Random/index.html");
  createObject(container17, "rgb(0,0,0)", "Volley Random", "https://www.twoplayergames.org/gameframe/volley-random");
  createObject(container17, "rgb(0,0,0)", "Soccer Random", "https://www.twoplayergames.org/gameframe/soccer-random");
  createObject(container17, "rgb(0,0,0)", "Boxing Random", "https://www.twoplayergames.org/gameframe/boxing-random");

  createObject(container18, "rgb(0,0,0)", "Tomb of the Mask", "https://tombofthemask.github.io/g8/tomb-of-the-mask/");
  createObject(container18, "rgb(0,0,0)", "Bitlife", "https://mr-funkinguy.github.io/Abc6782/games/bitlife/");
  createObject(container18, "rgb(0,0,0)", "1v1.lol", "https://1v1.lol/");

  createObject(container19, "rgb(0,0,0)", "Smash 64", "https://gamesfrog.com/games/n64/super-smash-bros/iframe");

  createObject(container20,"rgb(0,0,0)", "Super Smash Flash", "https://mr-funkinguy.github.io/GameStuff/gfiles/ssf/");
  createObject(container20,"rgb(0,0,0)", "Flappy Bird", "https://mr-funkinguy.github.io/83/flappy-bird/index.html");
  createObject(container20,"rgb(0,0,0)", "UNO! but ripoff", "https://sz-games.github.io/games/game.html?game=https://mr-funkinguy.github.io/Abc6782/games/uno/index.html");
  createObject(container20,"rgb(0,0,0)", "Wordle", "https://sz-games.github.io/Games2/wordle");

  createObject(container21,"rgb(0,0,0)", "Stickman Hook", "https://sz-games.github.io/Games5/stickman-hook");
  createObject(container21,"rgb(0,0,0)", "Cell Machine", "https://html-classic.itch.zone/html/2472216/index.html");
  createObject(container21,"rgb(0,0,0)", "Street Fighter II", "https://sz-games.github.io/games3/fighter2");
  createObject(container21,"rgb(0,0,0)", "5 nights at winstons", "https://mr-funkinguy.github.io/75/projects/fnaw/index.html");
  createObject(container21,"rgb(0,0,0)", "MOTO X3M", "https://tbg95.github.io/moto-x3m/game");

  createObject(container22,"rgb(0,0,0)", "Cut the Rope", "https://sz-games.github.io/Games5/ctr");
  createObject(container22,"rgb(0,0,0)", "Stackball", "https://sz-games.github.io/Games7/stackball/");
  createObject(container22,"rgb(0,0,0)", "Paper Fold", "https://sz-games.github.io/Games8/paper-fold");
  createObject(container22,"rgb(0,0,0)", "Sand Game", "https://sz-games.github.io/Games6/sand-game");

  createObject(container22,"rgb(0,0,0)", "SANS FIGHT", "https://sz-games.github.io/Games6/sansfight");
  createObject(container22,"rgb(0,0,0)", "Run 3", "https://sz-games.github.io/Games-2/run3/");
  createObject(container22,"rgb(0,0,0)", "Money Rush", "https://sz-games.github.io/Games8/MONEYRUSH");

  createObject(container23, "rgb(0,0,0)", "Clockwork", "https://clockwork-os.vercel.app/os/");
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
        var fontSize = Math.floor(buttonWidth / 14);
        if (fontSize > 60) {
          button.style.fontSize = "60px";
        } else {
          button.style.fontSize = fontSize + "px";
        }
        var containerHeight = parent.getBoundingClientRect().height;
        if (button.offsetHeight > containerHeight) {
          button.style.height = containerHeight + "px";
          button.style.fontSize = Math.floor(containerHeight * 0.8) + "px"; // Adjust font size based on container height
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
