// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

//LOGIC
//if temp cant merge: first end < second start => 
//add temp to res, and assign the new value to temp 
//   if temp can merge:first end >= second start =>
//         +case 1: partially merge: second end >= first end -> keep the start of temp, take the 
//         +case 2: fully merge: second end < first end
//         Since the intervals are sorted => first start always smaller than second start

function merge(intervals: number[][]): number[][] {
    const sortedIntervals = intervals.sort((a,b)=>{
        if(a[0]-b[0]){
            return a[0] - b[0];
        }else{
            return a[1] - b[1];
        }
    })
    let res: number[][] = [];
    let temp = sortedIntervals[0];
    for(const time of sortedIntervals){
        if(temp[1]< time[0]){
            res.push(temp);
            temp = time;
        } else{
            temp[1] = Math.max(time[1], temp[1]);
        }
    }
    res.push(temp);
    return res;
};