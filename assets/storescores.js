const ScoresText = document.querySelector("#high-scores");
let ScoresTag = '';


for (let i = 0; i < localStorage.length; i++) {
    ScoreData = JSON.parse(localStorage.getItem(i+1));
    const scoreArray = ['</br><div id="high-scores">' + ScoreData.initials + "   " + "=" + "   " + ScoreData.score + '</div>']
    ScoresTag = ScoresTag.concat(scoreArray);
    };




//function showScores() {
//        var scoreBoard = document.createElement("ol");
//        for (let i = 0; i < localStorage.length; i++) {
//
//            let ScoreData = JSON.parse(localStorage.getItem(i+1));
//            if (ScoreData !== null) {
//                var initials = initials[i].initials
//                var score = score[i].score;
//                var savedScore = document.createElement("li");
//                savedScore.innerHTML = initials + " " + score;
//                scoreBoard.appendChild(savedScore);
//        }
//        ScoresText.appendChild(scoreBoard);
//    }  
//}

//showScores();

ScoresText.innerHTML = ScoresTag;