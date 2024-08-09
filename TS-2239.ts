

function findClosestNumber(nums: number[]): number {
    let res = nums[0];
    let ld = Math.abs(res);
    for(let i = 1; i< nums.length;i++){
        if(Math.abs(nums[i]) <ld){
            res = nums[i];
            ld = Math.abs(nums[i]);
        }
        else if(Math.abs(nums[i]) === ld && nums[i]>res){
            res = nums[i];
            ld = Math.abs(nums[i]);
        }
    }
    return res;
};

// function findClosestNumber(nums: number[]): number {
//   let res = nums[0];
//   let ld = Math.abs(res); //longest distance
//   for (let i = 1; i < nums.length; i++) {

//     let ldi = Math.abs(nums[i]); // longest distance i

//     if (ldi < ld) {
//       res = nums[i];
//       ld = ldi;
//     } else if (ldi === ld && nums[i] > res) {
//       res = nums[i];
//       ld = ldi;
//     }
//   }
//   return res;
// }