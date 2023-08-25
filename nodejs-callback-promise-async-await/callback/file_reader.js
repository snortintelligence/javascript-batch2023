const fs = require("fs");
function fileReader(file_location, callbackFunc){
    fs.readFile(file_location, 'utf8', (err, data)=>{
        if(err)
        {console.log('error : ',err);}
        else{
            callbackFunc(data);
        }
    }); //end of file reading
}//end of fileReader function

//callbackFunc
function printFileData(data){
    console.log('file data : ',data);
}

fileReader('./file1.txt', printFileData);