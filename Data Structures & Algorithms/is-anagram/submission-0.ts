class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false; 

        const a = [...s].sort((a,b) => a.localeCompare(b)); 
        const b = [...t].sort((a,b) => a.localeCompare(b)); 

         for(let i = 0; i < s.length; i++) {
            if(a[i] !== b[i]) return false; 
         }
         return true; 
        
    }
}
