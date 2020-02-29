import Light from "./receiver/light";
import LightRemote from "./invokers/light-remote";
import TurnLightOnCommand from "./commands/turn-light-on-command";
import TurnLightOffCommand from "./commands/turn-light-off-command";

describe("Testing Light control remote", () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });

  it("testing turn on light", () => {
    const light = new Light();
    const turnOnLight = new TurnLightOnCommand(light);
    const lightRemote = new LightRemote(turnOnLight);

    lightRemote.setCommand(turnOnLight);
    lightRemote.pressButton();

    expect(global.console.log).toHaveBeenCalledWith("Light is on");
  });

  it("testing turn off light", () => {
    const light = new Light();
    const turnOffLight = new TurnLightOffCommand(light);
    const lightRemote = new LightRemote(turnOffLight);

    lightRemote.setCommand(turnOffLight);
    lightRemote.pressButton();

    expect(global.console.log).toHaveBeenCalledWith("Light is off");
  });
});
