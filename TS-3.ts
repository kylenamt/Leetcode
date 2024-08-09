
// Given a string s, find the length of the longest 
// substring without repeating characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s: string): number {
  let substring = new Map<string, number>();
  let start = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    let lastSeen: number = Number(substring.get(c));

    if (lastSeen >= start) {
      start = lastSeen + 1;
    }

    substring.set(c, i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}
//O(n)
