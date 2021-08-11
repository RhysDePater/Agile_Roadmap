import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import api,{route} from "@forge/api";


/**
 * 
 * @param {*} jsonArray array to parse
 * @returns fixedVersion for issues.fields if exists else null
 */
export function getFixVersionsId(jsonArray){
    if(jsonArray[0] == undefined || null){
      return "null";
    }else{
      return jsonArray[0].id;
    }
  }

/**
   * 
   * @param {*} jsonValue JSON value to parse
   * @returns json value if exists else null
   */
export function checkDateValid(jsonValue){
    if(jsonValue == undefined || null){
        return "null"
    }else{
        return jsonValue
    }
}