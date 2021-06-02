

function superbowlWin(records){

    const winYear = records.find(record => record.result === "W");
//     return winYear ? record.year : undefined
// }
    if (!!winYear){
        return winYear.year;
    } else {
        return undefined;
    }
    
}
