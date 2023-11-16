
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
  document.body.style.height = "300vh";


  document.body.style.backgroundColor = "#444444";
  var bg = document.createElement('div');
  bg.id = "background"
  document.body.appendChild(bg);

  for (let i = 1; i <= 20; i++) {
    var containerName = 'container' + i;
    window[containerName] = createContainer(10 + (15 * (i - 1)) + '%');
   
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
  
  // Call the function
  var browserFrame = createFrame(15 * (20 - 1)+ 7 + '%', "https://browser.rammerhead.org/");
  

  //createButton(container1, "rgb(0,0,0)", "Browser", "https://cloudflare.rammerhead.org");
  createButton(container1, "rgb(0,0,0)", "Clockwork", "https://clockwork-os.vercel.app/os/");

  createButton(container2, "rgb(0,0,0)", "Dino game", "https://chromedino.com/");
  createButton(container2, "rgb(0,0,0)", "Slime Simulator", "https://turbowarp.org/688840478/embed");
  createButton(container2, "rgb(0,0,0)", "Clicker Heroes", "https://games-online.io/game/ClickerHeroes/");
  createButton(container2, "rgb(0,0,0)", "FNF", "https://static.playunblocked.com/2021/04/friday-night-funkin/");
  createButton(container2, "rgb(0,0,0)", "Chess", "https://toytheater.com/chess.php");

  //createButton(container2, "rgb(0,0,0)", "diep.io", "https://diep.io/");
  
  createButton(container3, "rgb(0,0,0)", "Subway Surfers", "https://superteamxx.github.io/Subway-Surfers/");
  createButton(container3, "rgb(0,0,0)", "GD Scratch", "https://turbowarp.org/105500895/embed");
  createButton(container3, "rgb(0,0,0)", "Youtube bypass", "https://speedtesting.herokuapp.com/videodrive/?m=Video_To_Drive");
  createButton(container3, "rgb(0,0,0)", "2d Minecraft", "https://turbowarp.org/10128407/embed");
  createButton(container3, "rgb(0,0,0)", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(container3, "rgb(0,0,0)", "Bored button", "https://www.boredbutton.com/random");
  
  createButton(container4, "rgb(0,0,0)", "Riddle School", "https://sz-games.github.io/games/ridd");
  createButton(container4, "rgb(0,0,0)", "Riddle School 2", "https://sz-games.github.io/games/ridd2");
  createButton(container4, "rgb(0,0,0)", "Riddle School 3", "https://sz-games.github.io/games/ridd3");
  createButton(container4, "rgb(0,0,0)", "Riddle School 4", "https://sz-games.github.io/games/ridd4");
  createButton(container4, "rgb(0,0,0)", "Riddle School 5", "https://sz-games.github.io/games/ridd5");
  createButton(container4, "rgb(0,0,0)", "Riddle Transfer", "https://sz-games.github.io/games/ridd6");
  createButton(container4, "rgb(0,0,0)", "Riddle Transfer 2", "https://sz-games.github.io/games/ridd7");
  
  createButton(container5, "rgb(0,0,0)", "Smash Karts", "https://mr-funkinguy.github.io/75/projects/smashkarts/index.html");
  createButton(container5, "rgb(0,0,0)", "Agar.io", "https://emupedia.net/emupedia-game-agar.io/");
  createButton(container5, "rgb(0,0,0)", "Stack", "https://sz-games.github.io/games/stack");
  createButton(container5, "rgb(0,0,0)", "Checkers", "https://toytheater.com/checkers.php");
  
  createButton(container6, "rgb(0,0,0)", "Crossy Road", "https://sz-games.github.io/cr/");
  createButton(container6, "rgb(0,0,0)", "Fluids", "https://sz-games.github.io/storage3/1/");
  createButton(container6, "rgb(0,0,0)", "Temple Run 2", "https://mr-funkinguy.github.io/Abc6782/games/temple-run-2/index.html");
  
  createButton(container7, "rgb(0,0,0)", "Doodle Jump", "https://mr-funkinguy.github.io/gfile/doodle/index.html");
  createButton(container7, "rgb(0,0,0)", "Paper.io 2", "https://script.google.com/macros/s/AKfycbxO8jKpDOwFYpSGrGbReR4Mv2e1-6T4uHsWBphygjzyG8Qqpvij/exec");
  createButton(container7, "rgb(0,0,0)", "Fruit Ninja", "https://mr-funkinguy.github.io/Abc6782/games/fruitNinja/index.html");
  createButton(container7, "rgb(0,0,0)", "Bloxorz", " https://sz-games.github.io/games/bloxx");

  createButton(container8, "rgb(0,0,0)", "BTD", "https://mr-funkinguy.github.io/GameStuff/gfiles/btd/");
  createButton(container8, "rgb(0,0,0)", "BTD2", "https://mr-funkinguy.github.io/GameStuff/gfiles/btd2/index.html");
  createButton(container8,"rgb(0,0,0)", "Super Smash Flash", "https://mr-funkinguy.github.io/GameStuff/gfiles/ssf/");
  createButton(container8,"rgb(0,0,0)", "Flappy Bird", "https://mr-funkinguy.github.io/83/flappy-bird/index.html");
  createButton(container8,"rgb(0,0,0)", "UNO! but ripoff", "https://sz-games.github.io/games/game.html?game=https://mr-funkinguy.github.io/Abc6782/games/uno/index.html");

  createButton(container9, "rgb(0,0,0)", "Tiny Fishing", "https://html5.gamedistribution.com/5ee4b0222a474e44880b6c6d9f96754d/?gd_sdk_referrer_url=https://tinyfishing.co/tiny-fishing-unblocked");
  createButton(container9, "rgb(0,0,0)", "The Impossible Quiz", "https://cdn2.addictinggames.com/addictinggames-content/ag-assets/content-items/html5-games/theimpossiblequiz/index.html");
  createButton(container9, "rgb(0,0,0)", "Stupid Clicker", "https://turbowarp.org/774324107/embed");
  createButton(container9, "rgb(0,0,0)", "Lil Oasis", "https://turbowarp.org/859599778/embed");
  createButton(container9, "rgb(0,0,0)", "Lil Oasis Expanded", "https://turbowarp.org/860600597/embed")
  createButton(container9, "rgb(0,0,0)", "Google Snake!", "https://mr-funkinguy.github.io/gfile/snake/index.html");;

  createButton(container10,"rgb(0,0,0)", "Are you kidding me?", "https://turbowarp.org/836226987/embed");
  createButton(container10, "rgb(0,0,0)", "AYKM Hard Mode", "https://turbowarp.org/846897438/embed");
  createButton(container10, "rgb(0,0,0)", "AYKM Easy Mode", "https://turbowarp.org/863130622/embed");
  createButton(container10, "rgb(0,0,0)", "AYKM Cursed Mode", "https://turbowarp.org/863109457/embed");
  createButton(container10, "rgb(0,0,0)", "AYKM Sanic Mode", "https://turbowarp.org/863584949/embed");
  createButton(container10, "rgb(0,0,0)", "AYKM Lots of Stuff Mode", "https://turbowarp.org/863553943/embed");
  createButton(container10, "rgb(0,0,0)", "AYKM Dark Mode", "https://turbowarp.org/863602237/embed");
  
  createButton(container11, "rgb(0,0,0)", "FNAF", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-1/index.html");
  createButton(container11, "rgb(0,0,0)", "FNAF 2", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-2/index.html");
  createButton(container11, "rgb(0,0,0)", "FNAF 3", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-3/index.html");
  createButton(container11, "rgb(0,0,0)", "FNAF 4", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-4/index.html");

  createButton(container12, "rgb(0,0,0)", "Little Alchemy", "https://littlealchemy.com");
  createButton(container12, "rgb(0,0,0)", "Little Alchemy 2", "https://littlealchemy2.com");

  createButton(container13, "rgb(0,0,0)", "Spotify", "https://open.spotify.com/");
  createButton(container13, "rgb(0,0,0)", "GBA games", "https://bobzgames.github.io/GBA/");
  createButton(container13, "rgb(0,0,0)", "Mario 64", "https://sm64webbackup--collintyes.repl.co/");
  createButton(container13, "rgb(0,0,0)", "Minecraft (kinda)", "https://ubg100.github.io/games/eaglercraft/index.html");
  createButton(container13, "rgb(0,0,0)", "Tunnel Rush", "https://tunnelrush.github.io/games/tunnel-rush/index.html");

  createButton(container14, "rgb(0,0,0)", "SZ Games", "https://sz-games.github.io/");

  createButton(container15, "rgb(0,0,0)","2048", "https://play2048.co");
  createButton(container15, "rgb(0,0,0)","9007199254740992", "https://dmitrykuzmenko.github.io/2048/");
  createButton(container15, "rgb(0,0,0)","11", "http://suki.ipb.ac.rs/11/");
  createButton(container15, "rgb(0,0,0)","590295810358705700000", "https://thereal23.github.io/590295810358705700000/");

  createButton(container16, "rgb(0,0,0)", "Slope", "https://slope2.online/1.embed");
  createButton(container16, "rgb(0,0,0)", "Slope 2", "https://slope2.online/2.embed");
  createButton(container16, "rgb(0,0,0)", "Pinball", "https://sz-games.github.io/Games6/space-cadet-pinball/");


  function createButton(parent, backgroundColor, text, url) {
    var button = document.createElement("button");
    button.classList.add("button");
    button.style.backgroundColor = backgroundColor;
    button.textContent = text;
    button.onclick = function () {
      clear();
      open(url);
    };
  
    var bgColor = backgroundColor.toLowerCase();
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
    
  
    var button = document.createElement("button");
    button.id = "buttonback";
    button.textContent = "X"
    button.onclick = function () {
      
      change();
      browserFrame.style.height = "100%"
      browserFrame.style.width = "100%"
      
    };
  
    document.body.appendChild(button);
  }
}