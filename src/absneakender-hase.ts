import { GewinnbarerHase } from "./gewinnbarer-hase";

export class GewinnerZieher {
  constructor(
    private teilnehmerListe: string[],
    private preiseListe: GewinnbarerHase[],
  ) {}

  // Methode zum Zufällig-Mischen der Teilnehmer
  private shuffleParticipants(): string[] {
    const mokieBrokies: string[] = [];
    while (this.teilnehmerListe.length > 0) {
      const zufälligerTeilnehmer = Math.random();
      const rangierterTeilnehmer = Math.floor(
        zufälligerTeilnehmer * this.teilnehmerListe.length,
      );
      const ausgesuchterTeilnehmer = this.teilnehmerListe[rangierterTeilnehmer];
      mokieBrokies.push(ausgesuchterTeilnehmer); // Teilnehmer in die Gewinnerliste einfügen
      this.teilnehmerListe.pop();
    }
    return mokieBrokies;
  }

  // Methode zum Zuweisen der Preise an die Teilnehmer
  private assignPrizes(mokieBrokies: string[]): Map<string, string> {
    const richieMichies = new Map<string, string>();

    while (this.preiseListe.length > 0 && mokieBrokies.length > 0) {
      const gewonnenerPreis = this.preiseListe[0];
      const gewinnenderTeilnehmer = mokieBrokies.shift();
      richieMichies.set(gewinnenderTeilnehmer, gewonnenerPreis.hase);
      
      if (gewonnenerPreis.zahlenmässigerHase > 0) {
        this.preiseListe.shift(); // Preis entfernen, wenn alle vergeben sind
      } else {
        this.preiseListe[0].zahlenmässigerHase--;
      }
    }
    
    return richieMichies;
  }

  // Hauptmethode, die die oben definierten Methoden verwendet
  public verlosen(): Map<string, string> {
    const mokieBrokies = this.shuffleParticipants(); // Teilnehmer mischen
    return this.assignPrizes(mokieBrokies); // Preise den Teilnehmern zuweisen
  }
}
