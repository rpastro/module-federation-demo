import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [{
    path: 'payment',
    loadChildren: () => import('payment/Module').then(m => m.PaymentModule)
    //loadChildren: () => loadRemoteModule({
    //    type: 'module',
    //    remoteEntry: 'http://localhost:4202/remoteEntry.js',
    //    exposedModule: './Module'
    //}).then(m => m.PaymentModule)
},
{
    path: 'billing',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module'
    }).then(m => m.BillingModule)
},];
