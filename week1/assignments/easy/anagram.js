function isAnagram(str1,str2){
    if(str1.length!==str2.length)return false
    const newstr=str1.toLowerCase().split('').sort()
    const newst2r=str2.toLowerCase().split('').sort()
   
   for(let i=0;i<newstr.length;i++){
    if(newstr[i]!==newst2r[i])return false

   }
   return true


}
const hi=isAnagram("name","ameh")
console.log(hi)