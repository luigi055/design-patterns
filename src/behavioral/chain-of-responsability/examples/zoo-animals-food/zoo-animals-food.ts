import Handler from "./animal-handlers/animal-handler/types";

class ZooAnimalsFood {
  static main(handler: Handler) {
    const foods = ["Nut", "Banana", "MeatBall"];

    for (const food of foods) {
      console.log(`Client: Who wants a ${food}?`);

      const result = handler.handle(food);

      if (result) {
        console.log(`  ${result}`);
      } else {
        console.log(`  ${food} was left untouched.`);
      }
    }
  }
}

export default ZooAnimalsFood;
