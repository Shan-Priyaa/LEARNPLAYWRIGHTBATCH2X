let s1="eat";
let s2="Tea";
s1=s1.toLowerCase();
s2=s2.toLowerCase();

if(s1.length===s2.length)
{
    s1=s1.split('').sort().join('');//('')is to separate as characters
    
    s2=s2.split('').sort().join('');
    console.log(s1,s2);
    if (s1===s2)
        console.log("It is Java Anagram");

}
else
    {
        console.log("Not a Java Anagram");
    }