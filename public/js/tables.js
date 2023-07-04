class BootstrapTable {
  constructor(){

  }
  _makeHead (arg=["first","second","thrid"], hideRow=false) {
    //crete first two elems
    let tabHead = document.createElement("thead");
    let trElem = document.createElement("tr");
    ///iterate list of elems
        for (let idx=0; idx<arg.length; idx++) {
            //create th elem
            let th = document.createElement('th');
            //assign Bootstrap styles
            th.setAttribute("scope","col");
            th.innerText = arg[idx];
            if (arg[idx] == hideRow) {
              th.style.display="none";
            }
            trElem.appendChild(th);
        }
    //append TR to Thead
    tabHead.appendChild(trElem);
    return tabHead;
  }

  _makeRow(keyList=["id","name"], rowData={name:"Boby",id:213}, hideRow=false) {
    let tr = document.createElement("tr");
    for (let idx = 0; idx < keyList.length; idx++) {
              let td = document.createElement("td");
                td.innerText = rowData[keyList[idx]];
                 //when keyAttrRow exists - hide it in the HTML table:
                if (keyList[idx] == hideRow) {
                  td.style.display = "none";
                }
                tr.appendChild(td);
        
     
    }
  
    return tr;
  }
  ///@keyOfRow - value of column with this name write in row`s attribute
  /// It helps to identify row.
  ///@colNames - when you already array names of columns. The columns created from the first 
  //element of an array to the last
  createTable(arg=[{id:1,name:"Bob"},{id:2,name:"Lucy"},{id:3,name:"Jimmy"}],  hideRow=false, callbackOnClick=()=>null) {
    let keys;
    //1)get keys:
        keys = Object.keys(arg[0]);

    let table = document.createElement("table");
    table.classList.add('table');
    let tbody = document.createElement('tbody');
    let thead = this._makeHead(keys, hideRow);
    //2) create rows
    for (let y =0; y < arg.length; y++) {
        let tmpRow = this._makeRow(keys, arg[y],hideRow);
        //when a callback listener exists - add it:
        if (callbackOnClick) {
          tmpRow.addEventListener('click', callbackOnClick);
        } 
        tbody.appendChild(tmpRow);
    }
    //3)construct all the table
    table.appendChild(thead);
    table.appendChild(tbody);
    return {table, header:thead};
  }

 static objRepresentationOfRow (table_header, table_row) {
     //get keys
     let tableHeadersList = table_header.querySelector("tr");
     tableHeadersList = tableHeadersList.querySelectorAll("th")
     tableHeadersList = Array.prototype.slice.call(tableHeadersList,0);
     //array names of columns 
     tableHeadersList = tableHeadersList.map((item)=>{
      return item.innerText;
     })
     //get list of values
     let valuesList = table_row.querySelectorAll("td");
     //convert to an array
     valuesList = Array.prototype.slice.call(valuesList,0);
     valuesList = valuesList.map((x)=>{
      return x.innerText;
     });
     //crete object representation of the row
     let result = {};
     for (let index=0; index < tableHeadersList.length; index++) {
      result[tableHeadersList[index]] = valuesList[index];
     }
      return result;
  }


}

window.onload = function () {
    let myTable = new BootstrapTable();
    let tbl;
  const onTableEditClick = (event) =>{
    let row = event.target.parentNode;
    let objRepr = BootstrapTable.objRepresentationOfRow(tbl.header, row);
    alert(JSON.stringify(objRepr));
   }
   
     tbl = myTable.createTable([{id:1,name:"vasya",number:4},{id:2,name:"Kolya",number:44}],'id', onTableEditClick);
    let tblContainer = document.querySelector('div.tbl');
    tblContainer.appendChild(tbl.table);
   //change modal
    const myModalChange = document.querySelector('.modal_chng_row');
     
    const openBtnModChng = document.querySelector('.btn_edit_string');
    const closeBtnModChng = document.querySelector('.btn-close');

     openBtnModChng.addEventListener('click', (event)=>{
        let header = tbl.querySelector("thead");
        let tbody = tbl.querySelector("tbody");
        let row = tbody.querySelector('tr');
        BootstrapTable.objRepresentationOfRow(header, row)
     })


   
    /* closeBtnModChng.addEventListener('click', (event)=>{
        myModalChange.style.display = "none";
     })
*/
}