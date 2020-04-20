export class Dao{
    write(liste){
        let dataString = JSON.stringify(liste);
        localStorage.setItem('personen', dataString);
    }

    read(){
        let personenArray;
        if(localStorage.getItem('personen')){
            let dataString = localStorage.getItem('personen');
            personenArray = JSON.parse(dataString);
        }else{
            personenArray = [];    
        }

        return personenArray;
    }
}