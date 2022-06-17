import Customer from '../model/Customer';
import Address from '../model/Address';
import Phone from '../model/Phone';

let customer = new Customer();
customer.name = `Pedro de Alcântara João Carlos Leopoldo Salvador`;
customer.nickname = `Dom Pedro II`;
customer.registrationDate = new Date(1840, 6, 23);
customer.birthDate = new Date(1825, 11, 2);

let address = new Address();
address.street = `R. do Catete`;
address.district = `Copacabana`;
address.city = `Rio de Janeiro`;
address.state = `Rio de Janeiro`;
address.country = `Brasil`;
address.zipCode = `22220-000`;
customer.address = address;

let phone1 = new Phone();
phone1.ddd = '12';
phone1.number = '123456789';
customer.phones.push(phone1);
let phone2 = new Phone();
phone2.ddd = '11';
phone2.number = '999999999';
customer.phones.push(phone2);

let dependent = new Customer();
dependent.name = `Isabel Cristina Leopoldina Augusta Micaela`;
dependent.nickname = `Princesa Isabel`;
dependent.registrationDate = new Date(1921, 10, 14);
dependent.birthDate = new Date(1846, 6, 29);
dependent.address = customer.address.clone() as Address;
dependent.bearer = customer;
dependent.phones = customer.clonePhones();
customer.dependents.push(dependent);

console.log(customer);
console.log(dependent);

_showCustomerAndDependentPhones();

function _showCustomerAndDependentPhones() {
  let customerPhones: String[] = [];
  customer.phones.forEach(phone =>
    customerPhones.push(`${phone.ddd} ${phone.number}`)
  );

  let dependentPhones: String[] = [];
  dependent.phones.forEach(phone =>
    dependentPhones.push(`${phone.ddd} ${phone.number}`)
  );

  console.table([
    {
      cliente: customerPhones,
      dependente: dependentPhones,
    },
  ]);
}
