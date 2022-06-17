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

  public clonePhones(): Phone[] {
    let clonedPhones: Phone[] = [];
    this.phones.forEach(phone => clonedPhones.push(phone.clone() as Phone));
    return clonedPhones;
  }
}
