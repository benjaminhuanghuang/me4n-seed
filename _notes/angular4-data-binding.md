# One-way binding
{{ message.content }}

# Two-way binding
in template
<input type="text" [(ngModel)]="message.content">

in app.module.ts
import { FormsModule } from '@angular/forms';
imports: [BrowserModule, FormsModule],
