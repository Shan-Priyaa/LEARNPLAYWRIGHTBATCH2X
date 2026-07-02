let status_code=200;
if (status_code>=500)
    {
        console.log("Server Error");
    }
    
 if (status_code>=400)
 {
    console.log("Client Error");
 } 
     else if (status_code>=300)
{
    console.log("Ridirection");
}
   else if (status_code>=200)
    {
    console.log("success");
    }

else
{
    console.log("Invalid");
}
