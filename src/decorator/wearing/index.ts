interface IClothes {
  chest: string;
  gloves: string;
  pants: string;
  shoes: string;
}

export class Clothes implements IClothes {
  public chest: string = "none";
  public gloves: string = "none";
  public pants: string = "none";
  public shoes: string = "none";
}

interface IPerson {
  wear(): Clothes;
}

export class Person implements IPerson {
  public wear(): IClothes {
    const clothes: IClothes = new Clothes();
    return clothes;
  }
}

export class WearingDecorator implements IPerson {
  constructor(protected person: IPerson) {}

  public wear(): IClothes {
    return this.person.wear();
  }
}

export class WearJeansPants extends WearingDecorator {
  public wear(): IClothes {
    const clothes: IClothes = super.wear();
    clothes.pants = "Blue Jeans";

    return clothes;
  }
}
export class WearBootsShoes extends WearingDecorator {
  public wear(): IClothes {
    const clothes: IClothes = super.wear();
    clothes.shoes = "Boots";

    return clothes;
  }
}

export class WearLumberjackShirt extends WearingDecorator {
  public wear(): IClothes {
    const clothes: IClothes = super.wear();
    clothes.chest = "Lumberjack Shirt";

    return clothes;
  }
}

export class WearLeatherGloves extends WearingDecorator {
  public wear(): IClothes {
    const clothes: IClothes = super.wear();
    clothes.gloves = "Leather gloves";

    return clothes;
  }
}
