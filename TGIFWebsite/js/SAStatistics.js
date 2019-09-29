//first (JSON statistics object)
var statistics = {
    "membersStatistics": [{
        "partys": [{
            "abreviation": "D",
            "party": "democrats",
            "numberOfDemocrats": 0,
            "membersParty": [],
            "averageVotesWhithParty" : 0, //third function.
            "membersVoteForTheirParty": [], //miembros que suelen votar por sus propios partidos.
        },
            {
            "abreviation": "R",
            "party": "republicans",
            "numberOfRepublicans": 0,
            "membersParty": [],
            "averageVotesWhithParty" : 0, //third function.
        },
            {
            "abreviation": "I",
            "party": "independents",
            "numberOfIndependents": 0,
            "membersParty": [],
            "averageVotesWhithParty" : 0, //third function. 
        }],
    "whoMissedTheLeastVotes": [], // Arr general de miembros que perdieron la menor cantidad de votos.
    "whoMissedTheMostVotes": [], // Arr general de miembros que perdideron la mayor cantidad de los votos.
    "pctWhoMissedTheLeastVotes": [], // Arr general de miembros que suelen votar por sus propios partidos.
    "pctWhoMissedTheMostVotes": [] // Arr general de miembros que no suelen votar por sus partidos.
    }]};
