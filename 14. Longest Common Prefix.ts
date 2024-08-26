// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.


//version 1
function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    for(let j = 1; j< strs.length;j++){
        let word = strs[j];
        for(let i = 0; i< Math.max(word.length,prefix.length);i++){
            if(word[i] != prefix[i]){
                prefix = prefix.substring(0,i);
                break;
            }
        }
    }
    return prefix;
};

// function longestCommonPrefix(strs: string[]): string {
//     if(strs.length === 0){
//         return "";
//     }
//     let prefix = "";
//     const minLength = Math.min(...strs.map(w => w.length));

//     for(let i = 0; i<minLength;i++){

//         const char = strs[0][i];
//         if(strs.every(word => word[i]==char)){
//             prefix+=char;
//         }
//         else{
//             break;
//         }
//     }
//     return prefix;
// };