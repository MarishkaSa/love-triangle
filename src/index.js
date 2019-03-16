/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count=0;
  let lovers=0;
  
  for(let s=0; s<preferences.length;s++){  
       let loverOne=preferences[s];     
       let loverTwo=preferences[loverOne-1];       
       let loverThree=preferences[loverTwo-1];         
     loverThree == s+1 ? count ++ : ''; 
         count==3 ? lovers++ : '';
         count==3 ? count = 0 : '';     
            }     
  return lovers;
 }

