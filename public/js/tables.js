class BootstrapTable {
  constructor(){

  }
  _makeHead (arg=["first","second","thrid"]) {
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
            trElem.appendChild(th);
        }
    //append TR to Thead
    tabHead.appendChild(trElem);
    return tabHead;
  }

  _makeRow(keyList=["id","name"], rowData={name:"Boby",id:213}, keyAttrRow=false) {
    let tr = document.createElement("tr");
    for (let idx = 0; idx < keyList.length; idx++) {
        //when keyAttrRow exists - hide it in HTML:
        if (keyList[idx] != keyAttrRow) {
                let td = document.createElement("td");
                td.innerText = rowData[keyList[idx]];
                tr.appendChild(td);
        }
     
    }
    if ( keyAttrRow ) {
        tr.setAttribute('data-tbl-id', rowData[keyAttrRow]);
    }
    return tr;
  }
  ///@keyOfRow - value of column with this name write in row`s attribute
  /// It helps to identify row.
  ///@colNames - when you already array names of columns. The columns created from the first 
  //element of an array to the last
  createTable(arg=[{id:1,name:"Bob"},{id:2,name:"Lucy"},{id:3,name:"Jimmy"}], keyOfRow=false ,colNames=false) {
    let keys;
    //1)get keys:
    if (colNames) {
        //when we already have keys 
        keys = colNames; 
    } else {
        //othervise extract it
        keys = Object.keys(arg[0]);
        //exclude when keyOfRow exists
        keys = keys.filter((item)=>item !== keyOfRow);
    }

    let table = document.createElement("table");
    table.classList.add('table');
    let tbody= document.createElement('thead');
    let thead = this._makeHead(keys);
    //2) create rows
    for (let y =0; y < arg.length; y++) {
        let tmpRow = this._makeRow(keys,arg[y],'id');
        tbody.appendChild(tmpRow);
    }
    //3)construct all the table
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
  }


}

window.onload = function () {
    let myTable = new BootstrapTable();
    let tbl = myTable.createTable([{id:1,name:"vasya",number:4},{id:2,name:"Kolya",number:44}],"id");
    let tblContainer = document.querySelector('div.tbl');
    tblContainer.appendChild(tbl);
}