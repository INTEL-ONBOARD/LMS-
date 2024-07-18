function Validate() 
{
    if (document.myForm.email. value == "" ) 
    {
    alert( "Please provide your Email!" );
    return false;
    }
    if (document.myForm.password. value == "") 
    {
    alert ( "Please enter valid password!" );
    return false;
    }
    
    return true;
}
    
