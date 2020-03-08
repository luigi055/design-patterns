interface Component {
  operation(depth: number): void;
}

class Composite implements Component {
  private children: Component[] = [];

  constructor(private name: string) {}

  public add(component: Component): void {
    this.children.push(component);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
  }

  public operation(depth: number): void {
    const identationLevel = "".padStart(depth, "-");
    console.log(`${identationLevel} ${this.name}`);

    this.children.forEach(component => component.operation(depth + 2));
  }

  public getChild(childNumber: number): Component {
    return this.children[childNumber];
  }
}

class Leaf implements Component {
  constructor(private name: string) {}

  public operation(depth: number): void {
    const identationLevel = "".padStart(depth, "-");
    console.log(`${identationLevel} ${this.name}`);
  }
}

const clientCode = () => {
  const root: Composite = new Composite("root");
  root.add(new Leaf("Leaf A"));
  root.add(new Leaf("Leaf B"));

  const comp: Composite = new Composite("Composite X");
  comp.add(new Leaf("Leaf XA"));
  comp.add(new Leaf("Leaf XB"));

  root.add(comp);
  root.add(new Leaf("Leaf C"));

  const leaf: Leaf = new Leaf("Leaf D");
  root.add(leaf);
  root.remove(leaf);

  root.operation(1);
};

clientCode();
