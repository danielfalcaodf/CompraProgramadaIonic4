import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [{
  path: '',
  canActivateChild: [AuthGuard],
  children: [
 
    {
      path: 'cadastroplano/:idplano',
      loadChildren: './pages/cadastroplano/cadastroplano.module#CadastroplanoPageModule'
    },
    {
      path: 'contrato/:id/:checkbox',
      loadChildren: './pages/contrato/contrato.module#ContratoPageModule'
    },
    {
      path: 'extrato',
      loadChildren: './pages/extrato/extrato.module#ExtratoPageModule'
    },
    {
      path: 'pagamentos',
      loadChildren: './pages/pagamentos/pagamentos.module#PagamentosPageModule'
    },
    {
      path: 'comprovante/:idPg',
      loadChildren: './pages/pg-comprovante/pg-comprovante.module#PgComprovantePageModule'
    },
    {
      path: 'pagamento/:idPg',
      loadChildren: './pages/pagamento/pagamento.module#PagamentoPageModule'
    },

    {
      path: 'planos/:help',
      loadChildren: './pages/planos/planos.module#PlanosPageModule'
    },
    {
      path: '',
      loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'
    }

  ]
},]  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
