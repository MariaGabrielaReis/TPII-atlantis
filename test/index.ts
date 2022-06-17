import Customer from '../model/Customer';
import Address from '../model/Address';
import Phone from '../model/Phone';

let customer = new Customer(
  'Pedro de Alcântara João Carlos Leopoldo Salvador',
  'Dom Pedro II',
  new Date(1840, 6, 23),
  new Date(1825, 11, 2),
  _createAddress(),
  [new Phone('12', '123456789'), new Phone('11', '999999999')]
);

let dependent = new Customer(
  'Isabel Cristina Leopoldina Augusta Micaela',
  'Princesa Isabel',
  new Date(1921, 10, 14),
  new Date(1846, 6, 29),
  customer.address.clone() as Address,
  customer.clonePhones() as Phone[],
  customer
);

customer.dependents.push(dependent);

//_showCustomerAndDependent();
_showCustomerAndDependentPhones();

function _createAddress(): Address {
  let address = new Address();
  address.street = `R. do Catete`;
  address.district = `Copacabana`;
  address.city = `Rio de Janeiro`;
  address.state = `Rio de Janeiro`;
  address.country = `Brasil`;
  address.zipCode = `22220-000`;
  return address;
}

function _showCustomerAndDependent() {
  console.log(customer);
  console.log(dependent);
}

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
