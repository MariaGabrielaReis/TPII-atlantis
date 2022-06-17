import Document from './Document';
import Address from './Address';
import Phone from './Phone';

export default class Customer {
  public name: string;
  public nickname: string;
  public birthDate: Date;
  public registrationDate: Date;
  public phones: Phone[] = [];
  public address: Address;
  public documents: Document[] = [];
  public dependents: Customer[] = [];
  public bearer: Customer;

  constructor(
    name: string,
    nickname: string,
    birthDate: Date,
    registrationDate: Date,
    address: Address,
    phones: Phone[],
    bearer: Customer = null,
    dependents: Customer[] = []
  ) {
    this.name = name;
    this.nickname = nickname;
    this.registrationDate = birthDate;
    this.birthDate = registrationDate;
    this.address = address;
    this.phones = phones;
    if (dependents !== null) this.dependents = dependents;
    if (bearer !== null) this.bearer = bearer;
  }

  public clonePhones(): Phone[] {
    let clonedPhones: Phone[] = [];
    this.phones.forEach(phone => clonedPhones.push(phone.clone() as Phone));
    return clonedPhones;
  }
}
