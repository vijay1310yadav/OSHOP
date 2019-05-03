import { AbstractControl, ValidationErrors } from '@angular/forms';



export class UserNameValidators {

    static noSpaces(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { noSpaces: true };

        return null;
    }


    static UniqueUsername(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'username')
                    resolve({ UniqueUsername: true });
                else resolve(null);
            }, 2000);

        });

    }
}
