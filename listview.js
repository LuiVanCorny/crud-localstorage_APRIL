export class ListView {
  constructor(presenter, personList) {
    this.presenter = presenter;

    // ---- HTML ----
    let htmlTable = '<tr><th>Name</th><th>Birthday</th><th>Tshirtgröße</th><th></th></tr>';
    for (let i = 0; i < personList.length; i++) {
      const person = personList[i];
      const htmlTr = `<tr>
              <td>${person.name}</td>
              <td>${person.birthday}</td>
              <td>${person.shirtSize}</td>
              <td><button class="buttonUpdate">Update</button></td>
              <td><button class="buttonDelete">Delete</button></td>
          </tr>`;
      htmlTable += htmlTr;
    }

    let htmlStatisticTable = '<tr><th>S</th><th>M</th><th>L</th><th>XL</th></tr>';
    htmlStatisticTable += "<tr id='counterRow'><td id='SCount'></td><td id='MCount'></td><td id='LCount'></td><td id='XLCount'></td></tr>"

    const html = `
        <h2>ListView</h2>
        <table>
            ${htmlTable}
        </table>
        <button id="buttonNew">New</button>
        <table>
            ${htmlStatisticTable}
        </table>
        `;
    this.app = document.getElementById('app');
    this.app.innerHTML = html;

    // ---- Events for buttons ----
    this._registerEvents();
  }

  _registerEvents() {
    const buttonsUpdate = document.getElementsByClassName('buttonUpdate');
    for (let i = 0; i < buttonsUpdate.length; i++) {
      buttonsUpdate[i].addEventListener('click', () => {
        this.presenter.buttonUpdateClicked(i);
      });
    }

    const buttonsDelete = document.getElementsByClassName('buttonDelete');
    for (let i = 0; i < buttonsDelete.length; i++) {
      buttonsDelete[i].addEventListener('click', () => {
        this.presenter.buttonDeleteClicked(i);
      });
    }

    const buttonNew = document.getElementById('buttonNew');
    buttonNew.addEventListener('click', () => {
      this.presenter.buttonNewClicked();
    });
  }

  setSCounter(counter){
    document.getElementById('SCount').innerHTML = counter;
  }

  setMCounter(counter){
    document.getElementById('MCount').innerHTML = counter;
  }

  setLCounter(counter){
    document.getElementById('LCount').innerHTML = counter;
  }

  setXLCounter(counter){
    document.getElementById('XLCount').innerHTML = counter;
  }
}
