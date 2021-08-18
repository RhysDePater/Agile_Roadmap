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


  export function testParse(jsonArray){
    var result = [];
    console.log(JSON.parse(jsonArray[id]))
  }