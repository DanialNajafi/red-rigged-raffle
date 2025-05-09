import { GewinnerZieher } from "././absneakender-hase";
import { GewinnbarerHase } from "././gewinnbarer-hase";

// Erstellen von Mock-Daten für Teilnehmer und Preise
const mockTeilnehmer = [
  "@Gangsta2007", "@LockeDerBoss", "@MiiMiiSeinBruder",
  "@AlphaKevin", "@RedSoldier499", "@Louisa12",
];

const mockPreise = [
  new GewinnbarerHase("iPhone 16 Pro", 1),
  new GewinnbarerHase("Trip nach Dubi", 1),
  new GewinnbarerHase("PlayStation 5 Slim", 3),
];

test("Verlosung - Anzahl der vergebenen Preise stimmt mit der Anzahl der Preise überein", () => {
  const gewinnerZieher = new GewinnerZieher(mockTeilnehmer, mockPreise);
  const verlostePreise = gewinnerZieher.verlosen();

  // Überprüfen, dass die Anzahl der verlosten Preise gleich der Anzahl der Preise ist
  expect(verlostePreise.size).toBe(mockPreise.length);
});
