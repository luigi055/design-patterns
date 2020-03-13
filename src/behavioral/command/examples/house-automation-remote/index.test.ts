import AutomationRemote from "./invoker/automation-remote";
import Light from "./vendors/light";
import Command, {
  LightOffCommand,
  LightOnCommand,
  CeilingFanHighCommand,
  CeilingFanOffCommand,
  TelevisionOnCommand,
  TelevisionOffCommand,
  HottubOnCommand,
  HottubOffCommand,
  StereoOnCommand,
  StereoOffCommand,
  MacroCommand
} from "./commands";
import CeilingFan from "./vendors/ceiling-fan";
import Television from "./vendors/television";
import Hottub from "./vendors/hottub";
import Stereo from "./vendors/stereo";

describe("Testing the integration among automation remote, commands and vendors", () => {
  beforeEach(() => (global.console.log = jest.fn()));

  it("should do nothing when execute a command when press an unassigned slot", () => {
    const remoteControl = new AutomationRemote();

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);

    expect(console.log).not.toHaveBeenCalled();
  });

  it("should turn the living room light on", () => {
    const remoteControl = new AutomationRemote();
    const light = new Light("Living Room");
    const lightOff = new LightOffCommand(light);
    const lightOn = new LightOnCommand(light);

    remoteControl.setCommand(0, lightOn, lightOff);

    remoteControl.onButtonWasPushed(0);

    expect(console.log).toHaveBeenCalledWith("Light is on");
  });

  it("should turn the ceiling fan on and high speed in the living room and add the command to the second slot", () => {
    const remoteControl = new AutomationRemote();
    const light = new Light("Living Room");
    const ceilingFan = new CeilingFan("Living Room");
    const ceilingFanOn = new CeilingFanHighCommand(ceilingFan);
    const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);
    const lightOff = new LightOffCommand(light);
    const lightOn = new LightOnCommand(light);

    remoteControl.setCommand(0, lightOn, lightOff);
    remoteControl.setCommand(1, ceilingFanOn, ceilingFanOff);

    remoteControl.onButtonWasPushed(1);

    expect(console.log).toHaveBeenCalledWith(
      "Living Room ceiling fan is on high"
    );
  });

  it("should turn the ceiling fan off in the living room and add the command to the second slot", () => {
    const remoteControl = new AutomationRemote();
    const light = new Light("Living Room");
    const ceilingFan = new CeilingFan("Living Room");
    const ceilingFanOn = new CeilingFanHighCommand(ceilingFan);
    const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);
    const lightOff = new LightOffCommand(light);
    const lightOn = new LightOnCommand(light);

    remoteControl.setCommand(0, lightOn, lightOff);
    remoteControl.setCommand(1, ceilingFanOn, ceilingFanOff);

    remoteControl.offButtonWasPushed(1);

    expect(console.log).toHaveBeenCalledWith("Living Room ceiling fan is off");
  });

  it("should turn the ceiling fan on and high speed in the living room and then undo", () => {
    const remoteControl = new AutomationRemote();
    const light = new Light("Living Room");
    const ceilingFan = new CeilingFan("Living Room");
    const ceilingFanOn = new CeilingFanHighCommand(ceilingFan);
    const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);
    const lightOff = new LightOffCommand(light);
    const lightOn = new LightOnCommand(light);

    remoteControl.setCommand(0, lightOn, lightOff);
    remoteControl.setCommand(1, ceilingFanOn, ceilingFanOff);

    remoteControl.onButtonWasPushed(1);

    expect(console.log).toHaveBeenCalledWith(
      "Living Room ceiling fan is on high"
    );

    remoteControl.undoButtonWasPushed();

    expect(console.log).toHaveBeenCalledWith("Living Room ceiling fan is off");
  });

  it("should turn the living room light off", () => {
    const remoteControl = new AutomationRemote();
    const light = new Light("Living Room");
    const lightOff = new LightOffCommand(light);
    const lightOn = new LightOnCommand(light);

    remoteControl.setCommand(0, lightOn, lightOff);

    remoteControl.offButtonWasPushed(0);

    expect(console.log).toHaveBeenCalledWith("Light is off");
  });

  it("should turn the living room light on and then when the user click undo button turn the light off", () => {
    const remoteControl = new AutomationRemote();
    const light = new Light("Living Room");
    const lightOff = new LightOffCommand(light);
    const lightOn = new LightOnCommand(light);

    remoteControl.setCommand(0, lightOn, lightOff);

    remoteControl.onButtonWasPushed(0);
    remoteControl.undoButtonWasPushed();

    expect(console.log).toHaveBeenCalledWith("Light is on");
    expect(console.log).toHaveBeenCalledWith("Light is off");
  });

  it("should turn the television on", () => {
    const remoteControl = new AutomationRemote();
    const television = new Television("Living Room");
    const televisionOnCommand = new TelevisionOnCommand(television);
    const televisionOffCommand = new TelevisionOffCommand(television);

    remoteControl.setCommand(0, televisionOnCommand, televisionOffCommand);

    remoteControl.onButtonWasPushed(0);

    expect(console.log).toHaveBeenCalledWith("Living Room TV is on");
  });

  it("should turn the television off", () => {
    const remoteControl = new AutomationRemote();
    const television = new Television("Living Room");
    const televisionOnCommand = new TelevisionOnCommand(television);
    const televisionOffCommand = new TelevisionOffCommand(television);

    remoteControl.setCommand(0, televisionOnCommand, televisionOffCommand);

    remoteControl.offButtonWasPushed(0);

    expect(console.log).toHaveBeenCalledWith("Living Room TV is off");
  });

  it("should turn the television on and then turn it off when press undo", () => {
    const remoteControl = new AutomationRemote();
    const television = new Television("Living Room");
    const televisionOnCommand = new TelevisionOnCommand(television);
    const televisionOffCommand = new TelevisionOffCommand(television);

    remoteControl.setCommand(0, televisionOnCommand, televisionOffCommand);

    remoteControl.onButtonWasPushed(0);
    remoteControl.undoButtonWasPushed();

    expect(console.log).toHaveBeenCalledWith("Living Room TV is on");
    expect(console.log).toHaveBeenCalledWith("Living Room TV is off");
  });

  it("should turn the party (MacroCommand) mode on", () => {
    const remoteControl = new AutomationRemote();
    const television = new Television("Living Room");
    const light = new Light("Living Room");
    const hottub = new Hottub();
    const stereo = new Stereo("Living Room");

    const televisionOn = new TelevisionOnCommand(television);
    const televisionOff = new TelevisionOffCommand(television);
    const hottubOn = new HottubOnCommand(hottub);
    const hottubOff = new HottubOffCommand(hottub);
    const stereoOn = new StereoOnCommand(stereo);
    const stereoOff = new StereoOffCommand(stereo);
    const lightOff = new LightOffCommand(light);
    const lightOn = new LightOnCommand(light);

    const partyOnCommands: Command[] = [
      lightOn,
      stereoOn,
      televisionOn,
      hottubOn
    ];
    const partyOffCommands: Command[] = [
      lightOff,
      stereoOff,
      televisionOff,
      hottubOff
    ];

    const partyOnMacro = new MacroCommand(partyOnCommands);
    const partyOffMacro = new MacroCommand(partyOffCommands);

    remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

    remoteControl.onButtonWasPushed(0);

    expect(console.log).toHaveBeenCalledWith("Living Room TV is on");
  });

  it("should turn the party (MacroCommand) mode on", () => {
    const remoteControl = new AutomationRemote();
    const television = new Television("Living Room");
    const light = new Light("Living Room");
    const hottub = new Hottub();
    const stereo = new Stereo("Living Room");

    const televisionOn = new TelevisionOnCommand(television);
    const televisionOff = new TelevisionOffCommand(television);
    const hottubOn = new HottubOnCommand(hottub);
    const hottubOff = new HottubOffCommand(hottub);
    const stereoOn = new StereoOnCommand(stereo);
    const stereoOff = new StereoOffCommand(stereo);
    const lightOff = new LightOffCommand(light);
    const lightOn = new LightOnCommand(light);

    const partyOnCommands: Command[] = [
      lightOn,
      stereoOn,
      televisionOn,
      hottubOn
    ];
    const partyOffCommands: Command[] = [
      lightOff,
      stereoOff,
      televisionOff,
      hottubOff
    ];

    const partyOnMacro = new MacroCommand(partyOnCommands);
    const partyOffMacro = new MacroCommand(partyOffCommands);

    remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

    remoteControl.onButtonWasPushed(0);

    expect(console.log).toHaveBeenCalledWith("Light is on");
    expect(console.log).toHaveBeenCalledWith("Living Room stereo is on");
    expect(console.log).toHaveBeenCalledWith(
      "Living Room TV channel is set for DVD"
    );
    expect(console.log).toHaveBeenCalledWith("Hottub is bubbling!");
    expect(console.log).toHaveBeenCalledWith(
      "Hottub is heating to a steaming 104 degrees"
    );
  });

  it("should turn the party (MacroCommand) mode off", () => {
    const remoteControl = new AutomationRemote();
    const television = new Television("Living Room");
    const light = new Light("Living Room");
    const hottub = new Hottub();
    const stereo = new Stereo("Living Room");

    const televisionOn = new TelevisionOnCommand(television);
    const televisionOff = new TelevisionOffCommand(television);
    const hottubOn = new HottubOnCommand(hottub);
    const hottubOff = new HottubOffCommand(hottub);
    const stereoOn = new StereoOnCommand(stereo);
    const stereoOff = new StereoOffCommand(stereo);
    const lightOff = new LightOffCommand(light);
    const lightOn = new LightOnCommand(light);

    const partyOnCommands: Command[] = [
      lightOn,
      stereoOn,
      televisionOn,
      hottubOn
    ];
    const partyOffCommands: Command[] = [
      lightOff,
      stereoOff,
      televisionOff,
      hottubOff
    ];

    const partyOnMacro = new MacroCommand(partyOnCommands);
    const partyOffMacro = new MacroCommand(partyOffCommands);

    remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

    remoteControl.offButtonWasPushed(0);

    expect(console.log).toHaveBeenCalledWith("Light is off");
    expect(console.log).toHaveBeenCalledWith("Living Room stereo is off");
    expect(console.log).toHaveBeenCalledWith("Living Room TV is off");

    expect(console.log).toHaveBeenCalledWith(
      "Hottub is heating to a steaming 98 degrees"
    );
    expect(console.log).toHaveBeenCalledWith("Hottub is off");
  });

  it("should turn the party (MacroCommand) mode on and then undo the change", () => {
    const remoteControl = new AutomationRemote();
    const television = new Television("Living Room");
    const light = new Light("Living Room");
    const hottub = new Hottub();
    const stereo = new Stereo("Living Room");

    const televisionOn = new TelevisionOnCommand(television);
    const televisionOff = new TelevisionOffCommand(television);
    const hottubOn = new HottubOnCommand(hottub);
    const hottubOff = new HottubOffCommand(hottub);
    const stereoOn = new StereoOnCommand(stereo);
    const stereoOff = new StereoOffCommand(stereo);
    const lightOff = new LightOffCommand(light);
    const lightOn = new LightOnCommand(light);

    const partyOnCommands: Command[] = [
      lightOn,
      stereoOn,
      televisionOn,
      hottubOn
    ];
    const partyOffCommands: Command[] = [
      lightOff,
      stereoOff,
      televisionOff,
      hottubOff
    ];

    const partyOnMacro = new MacroCommand(partyOnCommands);
    const partyOffMacro = new MacroCommand(partyOffCommands);

    remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

    remoteControl.onButtonWasPushed(0);

    expect(console.log).toHaveBeenCalledWith("Light is on");
    expect(console.log).toHaveBeenCalledWith("Living Room stereo is on");
    expect(console.log).toHaveBeenCalledWith(
      "Living Room TV channel is set for DVD"
    );
    expect(console.log).toHaveBeenCalledWith("Hottub is bubbling!");
    expect(console.log).toHaveBeenCalledWith(
      "Hottub is heating to a steaming 104 degrees"
    );

    remoteControl.undoButtonWasPushed();

    expect(console.log).toHaveBeenCalledWith("Light is off");
    expect(console.log).toHaveBeenCalledWith("Living Room stereo is off");
    expect(console.log).toHaveBeenCalledWith("Living Room TV is off");
    expect(console.log).toHaveBeenCalledWith("Hottub is off");
  });
});
