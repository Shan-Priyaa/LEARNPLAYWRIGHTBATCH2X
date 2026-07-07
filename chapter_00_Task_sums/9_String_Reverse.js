// const s1="madam";
// let s2="";
// for(i=s1.length-1;i>=0;i--)
//     {
//  //   s2=s1.charAt(i)+s2; 
//  s2+=s1[i];
//     }
//      console.log(s2);
// if(s1===s2)
// {
//     console.log("String is Palindrome");
// }
// else
//     {
//      console.log("String is not a Palindrome");
//     }

   // with built in

   let s1="Madem";
    let s2="";
    s1=s1.toLowerCase();
    s2=s1.split('').reverse().join('');
    console.log(s2);
if(s1===s2)
{
    console.log("String is Palindrome");
}
else
    {
     console.log("String is not a Palindrome");
    }
