

function superbowlWin(array){

    const winYear = array.find(record => record.result === "W");
    
    if (!!winYear){
        return winYear.year;
    } else {
        return undefined;
    }
    
}
