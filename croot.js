export function getDateFromId(stringID){
    return new Date(parseInt(stringID.substr(0,8), 16)*1000);
}