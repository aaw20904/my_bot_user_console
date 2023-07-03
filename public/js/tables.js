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

  _makeRow(keyList=["id","name"], rowData={name:"Boby",id:213},keyAttrRow=false) {
    let tr = document.createElement("tr");
    for (let idx = 0; idx < keyList.length; idx++) {
        let td = document.createElement("td");
        th.innerText = rowData[keyList[idx]];
        tr.appendChild(td);
    }
    if ( keyAttrRow ) {
        tr.setAttribute('data-tbl-id', rowData[keyAttrRow]);
    }
    return tr;
  }

  createTable(arg=[{id:1,name:"Bob"},{id:2,name:"Lucy"},{id:3,name:"Jimmy"}],keyAttrRow=false ,colNames=false) {
    let keys;
    //1)get keys:
    if (colNames) {
        //when we already have keys 
        keys = colNames; 
    } else {
        //othervise extract it
        keys = Object.keys(arg[0]);
    }

    let table = document.createElement("table");
    table.classList.add('table');
    let tbody= document.createElement('thead');
    let thead = this._makeHead(keys);
    //2) create rows
    for (let y =0; y < arg.length; y++) {
        let tmpRow = this._makeRow(keys,arg[y]);
        tbody.appendChild(tmpRow);
    }
    //3)construct all the table
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
    

  }




}