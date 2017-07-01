#  Directives are instructions Angular will execute
Attribute directives:    
    [ngStyle]="{backgroundColor:color}" (mouseenter)="color='green'"

Structural directive: 
    <app-message [message]='message' (editClicked)="message.content=$event" *ngFor="let message of messages"></app-message> 

Component directives

Directives use selectors to let Angular know which parts of the HTML code represent instructions. 