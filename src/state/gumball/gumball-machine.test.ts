import GumBallMachine from "./gumball-machine";
import HasQuarterState from "./state/has-quarter-state";
import SoldOutState from "./state/sold-out-state";
import SoldState from "./state/sold-state";
import NoQuarterState from "./state/no-quarter-state";

describe("Testing GumBall Machine class", () => {
  beforeEach(() => (global.console.log = jest.fn()));

  it("should create a instance of gumball machine with 5 gumballs", () => {
    const gumballMachine = new GumBallMachine(5);

    expect(gumballMachine.getGumballAmount()).toBe(5);
  });

  it("should refill 20 gumballs and the current state should be no_quarter", () => {
    const gumballMachine = new GumBallMachine(0);

    expect(gumballMachine.getCurrentState()).toBeInstanceOf(SoldOutState);
    gumballMachine.refill(20);

    expect(gumballMachine.getGumballAmount()).toBe(20);
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(NoQuarterState);
  });

  it("should be 23 gumballs and refill 20 and the machine currently has 3", () => {
    const gumballMachine = new GumBallMachine(3);

    expect(gumballMachine.getCurrentState()).toBeInstanceOf(NoQuarterState);
    gumballMachine.refill(20);

    expect(gumballMachine.getGumballAmount()).toBe(23);
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(NoQuarterState);
  });

  it("should create a instance of gumball machine with SOLD OUT as initial state", () => {
    const gumballMachine = new GumBallMachine(0);

    expect(gumballMachine.getCurrentState()).toBeInstanceOf(SoldOutState);
  });

  it("should create a instance of gumball machine with NO_QUARTER as initial state", () => {
    const gumballMachine = new GumBallMachine(5);

    expect(gumballMachine.getCurrentState()).toBeInstanceOf(NoQuarterState);
  });

  it("should return the sold out State when set this state", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.setState(gumballMachine.getSoldOutState());

    expect(gumballMachine.getCurrentState()).toBeInstanceOf(SoldOutState);
  });

  it("should return the sold State when set this state", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.setState(gumballMachine.getSoldState());

    expect(gumballMachine.getCurrentState()).toBeInstanceOf(SoldState);
  });

  it("should return the has_quarter State when set this state", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.setState(gumballMachine.getHasQuarterState());

    expect(gumballMachine.getCurrentState()).toBeInstanceOf(HasQuarterState);
  });

  it("should return the no_quarter State when set this state", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.setState(gumballMachine.getNoQuarterState());

    expect(gumballMachine.getCurrentState()).toBeInstanceOf(NoQuarterState);
  });

  it("should stay as no_quarter when the client try to reject the quarter", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.ejectQuarter();

    expect(global.console.log).toHaveBeenCalledWith(
      "There is not quarter in the machine, please insert a quarter"
    );
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(NoQuarterState);
  });

  it("should insert a quarter and the state should change to has_quarter", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.insertQuarter();

    expect(global.console.log).toHaveBeenCalledWith("You inserted a quarter");
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(HasQuarterState);
  });

  it("should not let the user insert another quarter and the state should remain as to has_quarter", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.insertQuarter();
    gumballMachine.insertQuarter();

    expect(global.console.log).toHaveBeenCalledWith(
      "You can't insert another quarter"
    );
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(HasQuarterState);
  });

  it("should eject the quarter and the state should change to no_quarter", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.insertQuarter();
    gumballMachine.ejectQuarter();

    expect(global.console.log).toHaveBeenCalledWith("You inserted a quarter");
    expect(global.console.log).toHaveBeenCalledWith("Quarter returned");
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(NoQuarterState);
  });

  it("should not insert a quarter the machine is out of gumballs", () => {
    const gumballMachine = new GumBallMachine(0);

    gumballMachine.insertQuarter();

    expect(global.console.log).toHaveBeenCalledWith(
      "You can't insert a quarter, the machine is sold out"
    );

    expect(gumballMachine.getCurrentState()).toBeInstanceOf(SoldOutState);
  });

  it("should not eject a quarter when the machine is out of gumballs", () => {
    const gumballMachine = new GumBallMachine(0);

    gumballMachine.ejectQuarter();

    expect(global.console.log).toHaveBeenCalledWith(
      "You can't eject, you haven't inserted a quarter yet"
    );
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(SoldOutState);
  });

  it("should not release a ball when turn crank the gumball and the machine is out of gumballs", () => {
    const gumballMachine = new GumBallMachine(0);

    gumballMachine.turnCrank();

    expect(global.console.log).toHaveBeenCalledWith(
      "You turned, but there are no gumballs"
    );
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(SoldOutState);
  });

  it("should not release turn crank the gumball when the client havent inserted the quarter", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.turnCrank();

    expect(global.console.log).toHaveBeenCalledWith(
      "There is not quarter in the machine, please insert a quarter after turn crank the machine"
    );
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(NoQuarterState);
  });

  it("should release a gumball and change the current state to no_quarter", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    expect(global.console.log).toHaveBeenCalledWith("You turned...");
    expect(global.console.log).toHaveBeenCalledWith(
      "A gumball comes rolling out the slot..."
    );
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(NoQuarterState);
  });

  it("should release a gumball and change the current state to sold_out when the last gumball was sold", () => {
    const gumballMachine = new GumBallMachine(1);

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    expect(global.console.log).toHaveBeenCalledWith(
      "A gumball comes rolling out the slot..."
    );
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(SoldOutState);
  });

  it("should not release a gumball when the client eject the quarter and turn crank the machine ", () => {
    const gumballMachine = new GumBallMachine(5);

    gumballMachine.insertQuarter();
    gumballMachine.ejectQuarter();
    gumballMachine.turnCrank();

    expect(global.console.log).toHaveBeenCalledWith(
      "There is not quarter in the machine, please insert a quarter after turn crank the machine"
    );
    expect(gumballMachine.getCurrentState()).toBeInstanceOf(NoQuarterState);
  });
});
