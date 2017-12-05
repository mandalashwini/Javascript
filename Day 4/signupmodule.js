var signup_module = (function(){
    var fname,lname, address,mobilenumber,gender,dob,emailid, profession,  password, reenterpassword;
    var emailvalid;
    console.log("in getData ");
        
        var fetchDetails = function (){
        
          
            fname=document.getElementById('firstname').value;
            lname=document.getElementById('lastname').value;
            address=document.getElementById('address').value;
            mobilenumber=document.getElementById('mobilenumber').value;
            gender=document.getElementById('gender').value;
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
            else
            {
                alert("Enter valid email Id..");
                return;
                
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
                return false;
            }
        }

        return {
            fetchDetails: fetchDetails
         };
         
})();
