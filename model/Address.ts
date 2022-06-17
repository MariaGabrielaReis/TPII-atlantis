import Prototype from '../interface/Prototype';

export default class Address implements Prototype {
  public street: string;
  public district: string;
  public city: string;
  public state: string;
  public country: string;
  public zipCode: string;

  public clone(): Prototype {
    let address = new Address();
    address.street = this.street;
    address.district = this.district;
    address.city = this.city;
    address.state = this.state;
    address.country = this.country;
    address.zipCode = this.zipCode;
    return address;
  }
}
