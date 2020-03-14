import Amplifier from "./subsystems/amplifier";
import Tuner from "./subsystems/tuner";
import Projector from "./subsystems/projector";
import TheaterLights from "./subsystems/theater-lights";
import Screen from "./subsystems/screen";
import PopcornPopper from "./subsystems/popcorn-popper";
import DvdPlayer from "./subsystems/dvd-player";
import CdPlayer from "./subsystems/cd-player";

class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private tuner: Tuner,
    private dvd: DvdPlayer,
    private cd: CdPlayer,
    private projector: Projector,
    private screen: Screen,
    private lights: TheaterLights,
    private popper: PopcornPopper
  ) {
    this.amplifier = amplifier;
    this.tuner = tuner;
    this.dvd = dvd;
    this.cd = cd;
    this.projector = projector;
    this.screen = screen;
    this.lights = lights;
    this.popper = popper;
  }

  public watchMovie(movie: string): void {
    console.log("Get ready to watch a movie...");
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amplifier.on();
    this.amplifier.setDvd(this.dvd);
    this.amplifier.setSurroundSound();
    this.amplifier.setVolume(5);
    this.dvd.on();
    this.dvd.play(movie);
  }

  public endMovie(): void {
    console.log("Shutting movie theater down...");
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amplifier.off();
    this.dvd.stop();
    this.dvd.eject();
    this.dvd.off();
  }

  public listenToCd(cdTitle: string): void {
    console.log("Get ready for an audiopile experence...");
    this.lights.on();
    this.amplifier.on();
    this.amplifier.setVolume(5);
    this.amplifier.setCd(this.cd);
    this.amplifier.setStereoSound();
    this.cd.on();
    this.cd.play(cdTitle);
  }

  public endCd(): void {
    console.log("Shutting down CD...");
    this.amplifier.off();
    this.amplifier.setCd(this.cd);
    this.cd.eject();
    this.cd.off();
  }

  public listenToRadio(frequency: number): void {
    console.log("Tuning in the airwaves...");
    this.tuner.on();
    this.tuner.setFrequency(frequency);
    this.amplifier.on();
    this.amplifier.setVolume(5);
    this.amplifier.setTuner(this.tuner);
  }

  public endRadio(): void {
    console.log("Shutting down the tuner...");
    this.tuner.off();
    this.amplifier.off();
  }
}

export default HomeTheaterFacade;
