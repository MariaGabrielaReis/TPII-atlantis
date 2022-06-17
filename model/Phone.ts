import Prototype from '../interface/Prototype';

export default class Phone implements Prototype {
  public ddd: string;
  public number: string;

  public clone(): Prototype {
    let phone = new Phone();
    phone.ddd = this.ddd;
    phone.number = this.number;
    return phone;
  }
}
