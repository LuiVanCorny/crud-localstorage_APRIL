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

  getSCount(){
    let Scounter = 0;
    this.personList.forEach(person => {
        if(person.shirtSize === "S"){
          Scounter++;
        }
    });
    return Scounter;
  }

  getMCount(){
    let Mcounter = 0;
    this.personList.forEach(person => {
        if(person.shirtSize === "M"){
          Mcounter++;
        }
    });
    return Mcounter;
  }

  getLCount(){
    let Lcounter = 0;
    this.personList.forEach(person => {
        if(person.shirtSize === "L"){
          Lcounter++;
        }
    });
    return Lcounter;
  }

  getXLCount(){
    let XLcounter = 0;
    this.personList.forEach(person => {
        if(person.shirtSize === "XL"){
          XLcounter++;
        }
    });
    return XLcounter;
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
