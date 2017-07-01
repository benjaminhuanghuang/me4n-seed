# One-way binding
{{ message.content }}

# Two-way binding
in template
<input type="text" [(ngModel)]="message.content">

in app.module.ts
import { FormsModule } from '@angular/forms';
imports: [BrowserModule, FormsModule],


# Property and Event Binding
    [property]="expression"
    property is default HTML element, directive property (e.g. ngStyle) or property of component
    <my-component [propertyName] = "expression">

    (event) = "expression"
    Dom events, Directive event or component event
    <my-component (eventName) = "expression">
