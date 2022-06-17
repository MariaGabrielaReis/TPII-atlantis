import Prototype from '../interface/Prototype';

export default class Phone implements Prototype {
  public ddd: string;
  public number: string;

  constructor(ddd: string, number: string) {
    this.ddd = ddd;
    this.number = number;
  }

  public clone(): Prototype {
    return new Phone(this.ddd, this.number);
  }
}
