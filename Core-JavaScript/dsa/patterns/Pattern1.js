for(let row=1; row<=4; row++){
    let pattern = '';
    for(let col=1; col<=row; col++){
        pattern += '* ';    
    }//end of inner loop
    console.log(pattern);
}//end of outer loop


//don't do : console.log('* ') inside the inner loop, which adds a newline after each asterisk.
//solution : concatination of pattern and print once final output

// *
// * *
// * * *
// * * * *