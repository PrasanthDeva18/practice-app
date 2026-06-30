*** Reactive Form

First import and config it in component Reactive form module
and then based on the mapping the value as formarray, formgroup and formControl

formarray for array
formgroup for objectjs
formcontrol for string, boolean number 


  hierarchy will be the 

  formGroup 
    formControl / formArray


    formControl -> ['']  / new FormControl('')

formGroup({
    name : [''],
    empInfo : formGroup({
        skills : formArray([

        ])
    })
})


if single based datatype singlequotes for string
if its number 0


in html


formGroup, formControlName, formGroupName


<form [formGroup]="empForm">
    <div  formGroupName="personalInfo"> 
        <label>Name</label>
        <input  formControlName="name"/>
        // For Select -> to give the formControlName in in the select tag
        // For Radio -> give the same formControlName in the all the input elements, here we want to pass value
        // For Checkbot -> same like that radio, return only boolean, here we dont need to pass value
    </div>
</form>