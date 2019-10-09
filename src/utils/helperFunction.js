export function getIFSCCode(records){
    let ifscList = [];
    records.forEach((record)=>{
        ifscList.push({ key: record.ifsc, value:record.ifsc, text:record.ifsc}); 
    });
    return ifscList;
}