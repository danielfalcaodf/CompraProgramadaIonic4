
import { FormControl } from '@angular/forms';

export class ValidateConfirmPassword{
 static password(control: FormControl) {
  if (!control.root.value ) {
    return null;
  }
  if (control.value === control.root.value.password) {
    return null;
  } else {
    return { password: true };
  }
}
}
