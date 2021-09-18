
/**
 * 
 * @param {*} jsonArray array to parse
 * @param {*} fieldToReturn json field to return value of
 * @param {*} tertiaryField fieldValue for going an extra array level deep
 * @returns single field value from dynamic length json array
 */
 export function getSingleValueFromJsonArray(jsonArray, fieldToReturn, tertiaryField) {
  const fieldArray = [];
  if (tertiaryField == null || undefined) {
    for (let i = 0; i < jsonArray.length; i++) {
      if (jsonArray[i] == undefined || null) {
        return "null";
      } else {
        fieldArray.push(jsonArray[i][fieldToReturn]);
      }
    }
    return fieldArray;
  } else {

    for (let i = 0; i < jsonArray.length; i++) {
      if (jsonArray[i] == undefined || null) {
        return "null";
      } else {
        const temp = jsonArray[i][tertiaryField];
        fieldArray.push(temp[fieldToReturn]);
      }
    }
    return fieldArray;
  }
}

/**
 * 
 * @param {*} jsonArray issueLinks array to check for values issue key and the relative state
 * @returns array of initiative childrens if they are not a a blocked state
 */
export function getChildIfNotBlocked(jsonArray){
  const status = getSingleValueFromJsonArray(jsonArray,"name", "type");
  const childKey = getSingleValueFromJsonArray(jsonArray, "key", "inwardIssue")
  let toReturn = [];
  try{
    status.map((state , i) => {
      if(state == "Blocks"){
      }else{   
        toReturn.push(childKey[i])
      }    
    })
  }catch(e){
    console.log(e)
  }
  return toReturn
}

/**
   * 
   * @param {*} jsonValue JSON value to parse
   * @returns returns value is exists
   */
export function checkIfValueExists(jsonValue) {
  if (jsonValue == undefined || null) {
    return "null"
  } else {
    return jsonValue
  }
}

