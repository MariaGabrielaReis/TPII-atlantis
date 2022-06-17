import Customer from '../model/Customer';
import Address from '../model/Address';

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

let dependent = new Customer();
dependent.name = `Isabel Cristina Leopoldina Augusta Micaela`;
dependent.nickname = `Princesa Isabel`;
dependent.registrationDate = new Date(1921, 10, 14);
dependent.birthDate = new Date(1846, 6, 29);
dependent.address = customer.address.clone() as Address;
dependent.bearer = customer;
customer.dependents.push(dependent);

console.log(customer);
console.log(dependent);
