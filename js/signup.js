function Validate() 
{
    if (document.myForm.fname. value == "" ) 
    {
    alert( "Please provide your first name!" );
    return false;
    }

    if (document.myForm.lname. value == "") 
    {
    alert ( "Please provide your last name!" );
    return false;
    }

    if (document.myForm.email. value == "") 
    {
    alert ( "Please provide a valid email!" );
    return false;
    }

    if (document.myForm.password. value == "") 
    {
    alert ( "Please enter a strong password!" );
    return false;
    }

    if (document.myForm.cpassword. value == "") 
    {
    alert ( "Please confirm your password!" );
    return false;
    }
    
    return true;
}
    
