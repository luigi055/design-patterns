import Amplifier from "./subsystems/amplifier";
import Tuner from "./subsystems/tuner";
import DvdPlayer from "./subsystems/dvd-player";
import CdPlayer from "./subsystems/cd-player";
import Projector from "./subsystems/projector";
import TheaterLights from "./subsystems/theater-lights";
import Screen from "./subsystems/screen";
import PopcornPopper from "./subsystems/popcorn-popper";
import HomeTheaterFacade from "./home-theater-facade";

describe("Testing the home theater facade", () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });
  it("should start the movie", () => {
    const amp: Amplifier = new Amplifier("Top-O-Line Amplifier");
    const tuner: Tuner = new Tuner("Top-O-Line AM/FM Tuner", amp);
    const dvd: DvdPlayer = new DvdPlayer("Top-O-Line DVD Player", amp);
    const cd: CdPlayer = new CdPlayer("Top-O-Line CD Player", amp);
    const projector: Projector = new Projector("Top-O-Line Projector", dvd);
    const lights: TheaterLights = new TheaterLights("Theater Ceiling Lights");
    const screen: Screen = new Screen("Theater Screen");
    const popper: PopcornPopper = new PopcornPopper("Popcorn Popper");

    const homeTheater: HomeTheaterFacade = new HomeTheaterFacade(
      amp,
      tuner,
      dvd,
      cd,
      projector,
      screen,
      lights,
      popper
    );

    homeTheater.watchMovie("Raiders of the Lost Ark");
    // homeTheater.endMovie();

    expect(console.log).toHaveBeenCalledWith("Get ready to watch a movie...");
    expect(console.log).toHaveBeenCalledWith("Popcorn Popper on");
    expect(console.log).toHaveBeenCalledWith("Popcorn Popper popping popcorn!");
    expect(console.log).toHaveBeenCalledWith(
      "Theater Ceiling Lights dimming to 10%"
    );
    expect(console.log).toHaveBeenCalledWith("Theater Screen going down");
    expect(console.log).toHaveBeenCalledWith("Top-O-Line Projector on");
    expect(console.log).toHaveBeenCalledWith(
      "Top-O-Line Projector in widescreen mode (16x9 aspect ratio)"
    );
    expect(console.log).toHaveBeenCalledWith("Top-O-Line Amplifier on");
    expect(console.log).toHaveBeenCalledWith(
      "Top-O-Line Amplifier setting DVD player to Top-O-Line DVD Player"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Top-O-Line Amplifier surround sound on (5 speakers, 1 subwoofer)"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Top-O-Line Amplifier setting volume to 5"
    );
    expect(console.log).toHaveBeenCalledWith("Top-O-Line DVD Player on");
    expect(console.log).toHaveBeenCalledWith(
      'Top-O-Line DVD Player playing "Raiders of the Lost Ark"'
    );
  });

  it("should end the movie", () => {
    const amp: Amplifier = new Amplifier("Top-O-Line Amplifier");
    const tuner: Tuner = new Tuner("Top-O-Line AM/FM Tuner", amp);
    const dvd: DvdPlayer = new DvdPlayer("Top-O-Line DVD Player", amp);
    const cd: CdPlayer = new CdPlayer("Top-O-Line CD Player", amp);
    const projector: Projector = new Projector("Top-O-Line Projector", dvd);
    const lights: TheaterLights = new TheaterLights("Theater Ceiling Lights");
    const screen: Screen = new Screen("Theater Screen");
    const popper: PopcornPopper = new PopcornPopper("Popcorn Popper");

    const homeTheater: HomeTheaterFacade = new HomeTheaterFacade(
      amp,
      tuner,
      dvd,
      cd,
      projector,
      screen,
      lights,
      popper
    );

    homeTheater.watchMovie("Raiders of the Lost Ark");
    homeTheater.endMovie();

    expect(console.log).toHaveBeenCalledWith("Shutting movie theater down...");
    expect(console.log).toHaveBeenCalledWith("Popcorn Popper off");
    expect(console.log).toHaveBeenCalledWith("Theater Ceiling Lights on");
    expect(console.log).toHaveBeenCalledWith("Theater Screen going up");
    expect(console.log).toHaveBeenCalledWith("Top-O-Line Projector off");
    expect(console.log).toHaveBeenCalledWith("Top-O-Line Amplifier off");
    expect(console.log).toHaveBeenCalledWith(
      `Top-O-Line DVD Player stopped "Raiders of the Lost Ark"`
    );
    expect(console.log).toHaveBeenCalledWith(`Top-O-Line DVD Player eject`);
    expect(console.log).toHaveBeenCalledWith(`Top-O-Line DVD Player off`);
  });
});
