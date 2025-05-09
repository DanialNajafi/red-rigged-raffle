// __     __        _
// \ \   / /__ _ __| | ___  ___ _   _ _ __   __ _
//  \ \ / / _ \ '__| |/ _ \/ __| | | | '_ \ / _` |
//   \ V /  __/ |  | | (_) \__ \ |_| | | | | (_| |
//    \_/ \___|_|  |_|\___/|___/\__,_|_| |_|\__, |

import { GewinnerZieher } from "./absneakender-hase.js";
import { GewinnbarerHase } from "./gewinnbarer-hase.js";

//
export class Verlosung {

  public starten() {
    
    const teilnehmerListe = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@Ronaldo7",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
    ];
    
  
    const preise = [
      new GewinnbarerHase("iPhone 16 Pro", 1),
      new GewinnbarerHase("Trip nach Dubi", 1),
      new GewinnbarerHase("Stepper nach Isti", 1),
      new GewinnbarerHase("10 kg Haribo", 2),
      new GewinnbarerHase("PlayStation 5 Slim", 3),
      new GewinnbarerHase("gebrauchte Sneaker", 5),
    ];
    
   
    const luckyMuckies = new GewinnerZieher(teilnehmerListe, preise).verlosen();
    
   
    for (const [teilnehmer, gewonnenerPreis] of luckyMuckies.entries()) {
      console.log(`${teilnehmer} gewinnt ${gewonnenerPreis}`);
    }
  }
}

// Starten der Verlosung
new Verlosung().starten();