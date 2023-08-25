console.log('start')
const fs = require("fs");
function fileReader(file_location, callbackFunc){
    fs.readFile(file_location, 'utf8', (err, data)=>{
        if(err)
        {
        callbackFunc(null, err);
        }
        else{
            callbackFunc(data, null);
        }
    }); //end of file reading
}//end of fileReader function

//callbackFunc
// function printFileData(data, err){
//     if (err) {
    // Throwing an error in a callback can disrupt the normal control flow of your program and make it harder to handle errors gracefully.
//         throw new Error('File reading failed!');
//     }
//     console.log('file data : ',data);
// }

// function that handles the error without throwing an error
function printFileData(data, err) {
    if (err) {
      console.error('File reading failed:', err);
    } else {
      console.log('File data:', data);
    }
  }
  

fileReader('./file12.txt', printFileData);
console.log('end')