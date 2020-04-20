import { Person } from './person.js';
import { Dao } from './dao.js';

export class Model {
  constructor() {
    this.dao = new Dao();
    this.personList = this.dao.read();
  }

  // CREATE
  addPerson(person) {
    this.personList.push(person);
    this.safe();
  }

  // READ
  getAllPersons() {
    return this.personList;
  }

  getPerson(index) {
    return this.personList[index];
  }

  // UPDATE
  updatePerson(index, newPerson) {
    this.personList[index] = newPerson;
    this.safe();
  }

  // DELETE
  deletePerson(index) {
    this.personList.splice(index, 1);
    this.safe();
  }

  safe() {
    this.dao.write(this.personList);
  }
}
