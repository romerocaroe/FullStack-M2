var elSenateTable = document.getElementById('senateData');
var members = data.results[0].members;
var checkArrays = ['R', 'D', 'I'];
var select = "";
addTableToHTML(members);

function addTableToHTML(membersFunction) {
    var theHtml = "<tbody>";
    membersFunction.forEach(nodo => {
        theHtml += "<tr>";
        if (nodo.middle_name === null) {
            theHtml += '<td><a class="text-dark" href="' + nodo.url + '">' + nodo.first_name + ' ' + nodo.last_name + '</td>';
        } else {
            theHtml += '<td><a class="text-dark" href="' + nodo.url + '">' + nodo.first_name + ' ' + nodo.middle_name + ' ' + nodo.last_name + '</td>';
        }
        theHtml += '<td class="Party">' + nodo.party + '</td>';
        theHtml += '<td class="State">' + nodo.state + '</td>';
       	theHtml += '<td>' + nodo.seniority + '</td>';
       	theHtml += '<td>' + nodo.votes_with_party_pct + '% </td>';
       	theHtml += '</tr>';
    });
    theHtml += '</tbody>';
    elSenateTable.innerHTML = theHtml;
}


function filter() {
    var filtered = [];
    var joinFiltered = [];
    let selected = document.querySelector("#selectState").value;
    if(selected=="All"){
        checkArrays.forEach(element => {
        filtered = members.filter(member => member.party === element);
        filtered.forEach(element => {
                joinFiltered.push(element);
            })
        });
            
        }else{
            checkArrays.forEach(element => {            
            filtered = members.filter(member => member.party === element && member.state === selected);
            filtered.forEach(element => {
                joinFiltered.push(element)});
                            });
            
        }
    addTableToHTML(joinFiltered);
}

function checkPartys(element){
    elSenateTable.innerHTML = "";
    element.checked ? checkArrays.push(element.name) : checkArrays.splice(checkArrays.indexOf(element.name),1);
    filter(members);
}

function checkStates(element){
    elSenateTable.innerHTML = "";
    let selected = querySelector("#selectState").value;
    element.checked ? selected.push(element.name) : selected.splice(selected.indexOf(element.name),1);
    filter(members);
}


//https://www.youtube.com/watch?v=rRgD1yVwIvE

