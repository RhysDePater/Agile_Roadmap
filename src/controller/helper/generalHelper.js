
/**
 * 
 * @param {*} data json data to search through
 * @param {*} fieldName field to check value against
 * @param {*} fieldValue field value to check against json fieldName
 * @returns array of selected values based on if fieldName == fieldValue
 */
export function filterJsonDataByFieldValue(data, fieldName, fieldValue){
    fieldValue = fieldValue.toLowerCase();
    const response = [];
    data.map((issue) => {
        // console.log( issue[fieldName] + " : " + fieldValue )
        if(issue[fieldName].toLowerCase() == fieldValue.toLowerCase()){
            response.push(issue)   
        }    
    })
    console.log(response)
    return response;
}
