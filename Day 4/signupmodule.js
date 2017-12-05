var signup_module = (function(){
    var fname,lname, address,mobilenumber,gender,dob,emailid, profession,  password, reenterpassword;
    var emailvalid,success;
    console.log("in getData ");
        
        var fetchDetails = function (){
        
          
            fname=document.getElementById('firstname').value;
            lname=document.getElementById('lastname').value;
            address=document.getElementById('address').value;
            mobilenumber=document.getElementById('mobilenumber').value;
            gender=document.getElementById('gender').checked;
            emailid=document.getElementById('emailid').value;
            profession=document.getElementById('profession').value;
            password=document.getElementById('password').value;
            ppass=document.getElementById('rpassword').value;
             
            validation();
            
            
        };

        function validation()
        {
            var fields=[
                {
                    fieldname:"Enter first name",
                    fieldvalue:fname
                },
                {
                    fieldname:"Enter last name",
                    fieldvalue:lname
                },
                {
                    fieldname:"Enter address",
                    fieldvalue:address
                },
                {
                    fieldname:"Enter Mobile number",
                    fieldvalue:mobilenumber
                },
                {
                    fieldname:"Enter emailid",
                    fieldvalue:emailid
                },
                {
                    fieldname:"Enter profession",
                    fieldvalue:profession
                },
                {
                    fieldname:"Enter password",
                    fieldvalue:password
                },
                {
                    fieldname:"Enterst re-enter password",
                    fieldvalue:password
                }
            ];
            for(var i=0;i<8;i++)
            {
                if(fields[i].fieldvalue=="")
                {
                alert(fields[i].fieldname);
                }
            }
            if(validate_email())
            {
                emailvalid=true;

            }
            if(validate_mobilenumber())
            {
               valid_mbn=true;
            }
            if(validate_prof())
            {
                valid_prof=true;
            }
            if(password.localeCompare(ppass)==0)
            {
                success=true;
            }
            else
            {
                alert("re entered password not match");  
            }
            if((gender[0].checked==false) && (gender[0].checked==false) )
            {
                alert("select gender");
            }
        }

        function validate_email()
        {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(emailid))
            {
              
                return true;

            }
            else
            {
                alert("Enter valid email Id..");
                return false;
            }
        }
        function validate_mobilenumber()
        {
            var phoneno = /^\d{10}$/;  
            if(mobilenumber.match(phoneno))
            {
                return true;  
            }
             else  
              {  
                alert("Enter correct contact number");  
                 return false;  
               }  
          
        }
        function validate_prof()
        {
            if(profession.localeCompare("student")==0||profession.localeCompare("student")==0)
            {
                return true;
            }
            else
            {
                alert("Enter profession student or teacher");
                return false;
            }

        }


        return {
            fetchDetails: fetchDetails
         };
         
})();
