import { FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomerEmailValidator{


   static validateCustomerEmailAddress(formControl: AbstractControl){

    const emailControl = formControl.get('email');
    const confirmControl = formControl.get('confirmEmail');
  
    if (emailControl.pristine || confirmControl.pristine) {
      return null;
    }
  
    if (emailControl.value === confirmControl.value) {
      return null;
    }
    return { match: true };

  }
}



export class CustomerRatingValidator{
 
   static validateRatingRange(min: number, max: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
          if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { range: true };
          }
          return null;
        };
      }
 }

