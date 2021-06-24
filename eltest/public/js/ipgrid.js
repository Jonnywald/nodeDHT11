
function grid(element, params, datatb) {

    var desdiv = document.getElementById(element);
    /*
    element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element
Method	Description
element.setAttribute(attribute, value)

document.appendChild(element)

document.getElementById(id).onclick = function(){code}
<table class="table table-striped table-dark">
 <thead>
   <tr>
     <th scope="col"><i class="fas fa-tools"></i>Part Number</th>
     <th scope="col"><i class="far fa-clock"></i>Entrada</th>
     <th scope="col"><i class="far fa-compass"></i>Local Atual</th>
     <th scope="col"><i class="fas fa-truck-loading"></i>Plataforma descida</th>
     <th scope="col"><i class="far fa-clock"></i>Descida</th>
     <th scope="col"><i class="fas fa-stopwatch"></i>Atrasado / No Tempo</th>
     <th scope="col"><i class="fas fa-box-open"></i>Embal.</th>
     <th scope="col"><i class="fas fa-truck"></i>Destino</th>
   </tr>
 </thead>
 <tbody id="dashData">

 </tbody>
    */

    var table = document.createElement('table');
    table.setAttribute("class", params.GridClass);

    var th = document.createElement('thead');
    var tr = document.createElement('tr');
    var size = params.Header.length - 1;

    for (var i = 0; i <= size; i++) {


        tr.appendChild(document.createElement('th'));
        tr.cells[i].innerHTML = params.Header[i].Name;
        th.appendChild(tr);
    }

    table.appendChild(th);
    var tb = document.createElement('tbody');
    tb.innerHTML = datatb;    
    table.appendChild(tb);
    desdiv.appendChild(table);
}
