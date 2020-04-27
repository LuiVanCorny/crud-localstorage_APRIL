import { Person } from './person.js';
import { ListView } from './listview.js';
import { Model } from './model.js';
import { DetailView } from './detailview.js';

export class Presenter {
  //------ S T A R T -------------
  constructor() {
    this.model = new Model();
    this._showListView();
  }

  _showListView() {
    const personList = this.model.getAllPersons();
    this.view = new ListView(this, personList);
    this.view.setSCounter(this.model.getSCount());
    this.view.setMCounter(this.model.getMCount());
    this.view.setLCounter(this.model.getLCount());
    this.view.setXLCounter(this.model.getXLCount());
  }

  //------ from ListView ----------
  buttonUpdateClicked(index) {
    const person = this.model.getPerson(index);

    this.actualIndex = index; // read, when buttonSaveClicked is called
    this.view = new DetailView(this);

    this.view.setName(person.name);
    this.view.setBirthday(person.birthday);
    this.view.setShirtSize(person.shirtSize);
  }

  buttonNewClicked() {
    const person = new Person('Please insert name', '1999-12-24', 'S');

    this.actualIndex = -1; // read, when buttonSaveClicked is called
    this.view = new DetailView(this);

    this.view.setName(person.name);
    this.view.setBirthday(person.birthday);
    this.view.setShirtSize(person.shirtSize);
  }

  buttonDeleteClicked(index) {
    this.model.deletePerson(index);
    this._showListView();
  }

  //------ from DetailView ------------
  buttonSaveClicked() {
    // read data from DetailView
    const newName = this.view.getName();
    const newBirthday = this.view.getBirthday();
    const newShirtSize = this.view.getShirtSize();

    const newPerson = new Person(newName, newBirthday, newShirtSize);

    // actualIndex is set in buttonNewClicked / buttonUpdateClicked
    if (this.actualIndex < 0) {
      // create new person
      this.model.addPerson(newPerson);
    } else {
      // update existing person
      this.model.updatePerson(this.actualIndex, newPerson);
    }

    this._showListView();
  }

  buttonCancelClicked() {
    this._showListView();
  }
}
