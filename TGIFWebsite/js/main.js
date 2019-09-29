var app = new Vue({
  el: '#app',
  data: {
    ...
  }
});
var members = data.results[0].members;
var glanceTable = document.getElementById('glanceTable');
var leastEngaged = document.getElementById('leastEngaged');
var mostEngaged = document.getElementById('mostEngaged');
var theTable;

//second (Number of members)
var members = data.results[0].members;

function numberOfSenators(data) {
    data.forEach(element => {
        if(element.party === "D"){
            statistics.membersStatistics[0].partys[0].membersParty.push(element);
            statistics.membersStatistics[0].partys[0].numberOfDemocrats = statistics.membersStatistics[0].partys[0].membersParty.length;
        }
        if(element.party === "R"){
            statistics.membersStatistics[0].partys[1].membersParty.push(element);
            statistics.membersStatistics[0].partys[1].numberOfRepublicans = statistics.membersStatistics[0].partys[1].membersParty.length;
        }
        if(element.party === "I"){
            statistics.membersStatistics[0].partys[2].membersParty.push(element);
            statistics.membersStatistics[0].partys[2].numberOfIndependents = statistics.membersStatistics[0].partys[2].membersParty.length;
        }
    });
};
numberOfSenators(members);

//third (Votes with Party)
function averageVotesWithParty (x,y){
    var length = x.length;
    var averageVotesWhithPartyFunction = statistics.membersStatistics[0].partys[y].averageVotesWhithParty;
    var total = 0; 
    for(var i = 0; i < length; i++){
        var votes = x[i].votes_with_party_pct;
        total += votes;
    }
    var averageThirdFunction = total / length;
    var averageThirdFunctionRounded = Math.round(averageThirdFunction);
    statistics.membersStatistics[0].partys[y].averageVotesWhithParty = averageThirdFunctionRounded;
}
averageVotesWithParty(statistics.membersStatistics[0].partys[0].membersParty, 0);
averageVotesWithParty(statistics.membersStatistics[0].partys[1].membersParty, 1);
averageVotesWithParty(statistics.membersStatistics[0].partys[2].membersParty, 2);

// glance table.
function addTableToHTMLglance() {
    var theHtml = "<thead>" + "<tr>" + "<th>" + "Party" + "</th>" + "<th>" + "Nº. of Reps." + "</th>" + "<th>" + "% Voted w/ Party" + "</th>" + "</tr>" + "</thead>" + "<tbody>";
    theHtml += "<tr>";
    theHtml += "<td>" + "Democrat" + "</td>";
    theHtml += "<td>" + statistics.membersStatistics[0].partys[0].numberOfDemocrats + "</td>";
    theHtml += "<td>" + statistics.membersStatistics[0].partys[0].averageVotesWhithParty + "</td>";
    theHtml += "</tr>";
    theHtml += "<tr>";
    theHtml += "<td>" + "Republican" + "</td>";
    theHtml += "<td>" + statistics.membersStatistics[0].partys[1].numberOfRepublicans + "</td>";
    theHtml += "<td>" + statistics.membersStatistics[0].partys[1].averageVotesWhithParty + "</td>";
    theHtml += "</tr>";
    theHtml += "<tr>";
    theHtml += "<td>" + "Independent" + "</td>";
    theHtml += "<td>" + statistics.membersStatistics[0].partys[2].numberOfIndependents + "</td>";
    theHtml += "<td>" + statistics.membersStatistics[0].partys[2].averageVotesWhithParty + "</td>";
    theHtml += "</tr>";
    theHtml += "</tbody>";
    glanceTable.innerHTML = theHtml;
}
addTableToHTMLglance();
//fourth (members who least often vote with their party).
function whoLeastOftenVote (){
    members.sort(function (a, b) {
        return (b.missed_votes - a.missed_votes);
    })
    tableLeastEngaged();
}
whoLeastOftenVote();

function whoMostOftenVote (){
    members.reverse();
    tableMostEngaged();
}
whoMostOftenVote();

function tableLeastEngaged (){
    theTable = document.createElement("tbody");
    let max = Math.round((10*members.length)/100);
    let start = 0;
    let myRow;
    let myCell;
    let text;
    members.forEach(member => {
        if(start <= max){
            myRow = document.createElement("tr");
            myCell = document.createElement("td");
            text = document.createTextNode(member.last_name);
            myCell.appendChild(text);
            myRow.appendChild(myCell);
            //
            myCell = document.createElement("td");
            text = document.createTextNode(member.missed_votes);
            myCell.appendChild(text);
            myRow.appendChild(myCell);
            //
            myCell = document.createElement("td");
            text = document.createTextNode(member.missed_votes_pct);
            myCell.appendChild(text);
            myRow.appendChild(myCell);

            theTable.appendChild(myRow);
        }
        start++;
    })
    leastEngaged.appendChild(theTable);
}

function tableMostEngaged (){
    theTable = document.createElement("tbody");
    let max = Math.round((10*members.length)/100);
    let start = 0;
    let myRow;
    let myCell;
    let text;
    members.forEach(member => {
        if(start <= max){
            myRow = document.createElement("tr");
            myCell = document.createElement("td");
            text = document.createTextNode(member.last_name);
            myCell.appendChild(text);
            myRow.appendChild(myCell);
            //
            myCell = document.createElement("td");
            text = document.createTextNode(member.missed_votes);
            myCell.appendChild(text);
            myRow.appendChild(myCell);
            //
            myCell = document.createElement("td");
            text = document.createTextNode(member.missed_votes_pct);
            myCell.appendChild(text);
            myRow.appendChild(myCell);
            
            theTable.appendChild(myRow);
        }
        start++;
    })
    mostEngaged.appendChild(theTable);
}
