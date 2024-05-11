const { default: fetch } = require("node-fetch");
const { MOEIN_URL,MOEIN_Token} = process.env;
 
const sepidarFetch=async(param,action)=>{
    var header = MOEIN_Token
    var response = ''; 
    try{    response = await fetch(MOEIN_URL+action+"?"+param,
            {method: 'GET' ,headers:JSON.parse(header)});
        //console.log(response)
        const result = await response.json();
        return(result) 
    }
    catch(error){ 
        console.log(error)
        return({error:response&&response.status,
            error_description:response&&(response.status+" "+response.statusText)})
    }
  }
module.exports =sepidarFetch