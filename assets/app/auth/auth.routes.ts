import { Routes, RouterModule } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

// Export as a sub routing
export const AUTH_ROUTES: Routes = [
    { path: "", redirectTo: 'signup', pathMatch: 'full' },   // NOT "/signup"
    { path: "signup", component: SignupComponent },
    { path: "signin", component: SigninComponent },
    { path: "logout", component: LogoutComponent },
]
