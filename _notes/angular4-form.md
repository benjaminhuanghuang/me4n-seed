ReactiveFormsModule

<form [formGroup]="myForm"] (ngSubmit)="onSubmit()">



## Validation
    email: new FormControl(null, [Validators.required,
            Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
            ]),
        
    <button class="btn btn-primary" type="submit" [disabled]="!myForm.valid">Submit</button>