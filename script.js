function openingCeremony(score,callbackfun){
    console.log("Let the games begin");
    setTimeout(() => {
        Race100M(score, callbackfun);
    }, 1000);
}

function Race100M(score, callbackfun){
    const time ={"red":getRandomScore(),"blue":getRandomScore(),"green":getRandomScore(),"yellow":getRandomScore()};
    console.log("Race 100M times:", time);
    const scorebycolor = Object.keys(time).sort((a,b) => time[a]-time[b]);
    score[scorebycolor[0]] += 50; 
    score[scorebycolor[1]] += 25; 
    console.log("100meter running scores:", score);

    setTimeout(() => {
        LongJump(score, callbackfun);
    }, 2000);
}

function LongJump(score, callbackfun){
    const color = getRandomColor();
    score[color] += 150;
    console.log("winner in LongJump:", color);
    console.log("Updated scores:", score);
    setTimeout(() => {
        HighJump(score, callbackfun);
    },3000);
}
function HighJump(score, callbackfun){
    const prompt = require('prompt-sync')();
    const colorenterd = prompt("What colour secured the highest jump?");
    if(colorenterd === "red" || colorenterd === "blue" || colorenterd === "green" || colorenterd === "yellow"){
        score[colorenterd] +=100;
        console.log("winner in HighJump:",colorenterd);
        console.log("Updated scores:", score);
    }
    else{
        console.log("Event was cancelled");
    }
    AwardCeremony(score);
}

function AwardCeremony(score){
    const sortedColors = Object.keys(score).sort((a,b) => score[b]-score[a]);
    console.log(`First_Place: ${sortedColors[0]} came first with ${score[sortedColors[0]]} points.`);
    console.log(`Second_Place: ${sortedColors[1]} came second with ${score[sortedColors[1]]} points.`);
    console.log(`Third_Place: ${sortedColors[2]} came third with ${score[sortedColors[2]]} points.`);
}

function getRandomScore(){
    return Math.floor((Math.random()*6)+10);
}
function getRandomColor(){
    const colors = ["red","blue","green","yellow"];
    return colors[Math.floor(Math.random()*4)];
}
const score = {"red":0,"blue":0,"green":0,"yellow":0};
openingCeremony(score, Race100M);
