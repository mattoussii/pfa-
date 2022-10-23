import {loginPageForm} from "./login.page.form";
import { FormBuilder, FormGroup } from "@angular/forms";

describe ('loginPageForm', () => {
    
    let loginPageForm: loginPageForm;
    let form: FormGroup

    beforeEach(()=>{

        loginPageForm = new loginPageForm(new FormBuilder());
        form = loginPageForm.createForm();

    })

    it('should create login form empty',()=> {
        
        expect(form).not.toBeNull();
        expect(form.get("email")).not.toBeNull();
        expect(form.get('email').value).toEqual("");
        expect(form.get('eamil').valid).toBeFalsy();
        expect(form.get("password")).not.toBeNull();
        expect(form.get('password').value).toEqual("");
        expect(form.get('password').valid).toBeFalsy();
        
        

    })

    it('shoud have email invalide if email is not valide',()=>{

        form.get("email").setValue("invalid email");
        expect(form.get("email").valid).toBeFalsy();
    })


    it('shoud have email valide if email is  valide',()=>{

        form.get("email").setValue("valide@email.com");
        expect(form.get("email").valid).toBeTruthy();
    })
    
    it('should have a valide form',()=> {

        form.get('email').setValue('valid@email.com');
        form.get('password').setValue('any password');
        expect(form.valid).toBeTruthy();
    })





})  

function beforeEach(arg0: () => void) {
    throw new Error("Function not implemented.");
}
