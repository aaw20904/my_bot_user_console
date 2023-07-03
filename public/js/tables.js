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

  _makeRow(keyList=["id","name"], rowData={name:"Boby",id:213}) {
    let tr = document.createElement("tr");
    for (let idx = 0; idx < keyList.length; idx++) {
        let td = document.createElement("td");
        th.innerText = rowData[keyList[idx]];
        tr.appendChild(td);
    }
    return tr;
  }

  createTable(arg=[{id:1,name:"Bob"},{id:2,name:"Lucy"},{id:3,name:"Jimmy"}], colNames=false) {
    let keys;
    //1)get keys:
    if (colNames) {
        //when we already have keys 
        keys = colNames; 
    } else {
        //othervise extract it
        keys = Object.keys(arg[0]);
    }
    //2) create rows
    for (let y =0; y < arg.length; y++) {
        
    }
    

  }




}