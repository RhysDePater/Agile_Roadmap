export function parseIssues(issuesData){
    var temp_array = [];
    for(let i = 0; i < issuesData[0].length; i++){
        var element = issuesData[0][i];
        temp_array.push(element);
    }
    return temp_array;
}

export function parseInitiatives(parsedIssuesData){
    var temp_array = [];
    for(let i = 0; i < parsedIssuesData.length; i++){
        if(parsedIssuesData[i][2] == "Initiative" || parsedIssuesData[i][2] == "initiative"){
            var element = parsedIssuesData[i];
            temp_array.push(element);
        }
    }
    return temp_array;
}

export function parseEpicsWithFV(fixedVersions, issuesData){
    console.log("entered something loop")
    var temp_array = [];
    for(let i = 0; i < fixedVersions.length; i ++){
        for(let j = 0; j < issuesData.length; j ++){
            if(issuesData[j][3] == fixedVersions[i][0]){                    
                if(issuesData[j][2] == "Epic" || issuesData[j][2] == "epic" ){
                    var element = issuesData[j];
                    temp_array.push(element);
                }
            }
        }
    }
    return temp_array;
}
