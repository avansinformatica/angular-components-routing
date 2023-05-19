import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AComponent } from "./pages/a/a.component";
import { BComponent } from "./pages/b/b.component";
import { ColumnsComponent } from "./pages/entity/columns.component";
import { DetailComponent } from "./pages/entity/detail/detail.component";
import { EditComponent } from "./pages/entity/edit/edit.component";
import { ListComponent } from "./pages/entity/list/list.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "component-a" },
    { path: "component-a", component: AComponent },
    { path: "component-b", pathMatch: "full", component: BComponent },
    { path: "users", pathMatch: "full", component: ListComponent },
    // users/new moet voor users/:id, omdat new anders als de id wordt gezien.
    // Volgorde is belangrijk in routing.
    { path: "users/new", pathMatch: "full", component: EditComponent },
    { path: "users/:id", pathMatch: "full", component: DetailComponent },
    { path: "users/:id/edit", pathMatch: "full", component: EditComponent },
    {
        path: "columns",
        component: ColumnsComponent,
        children: [
            { path: "new", pathMatch: "full", component: EditComponent },
            { path: ":id", pathMatch: "full", component: DetailComponent },
            { path: ":id/edit", pathMatch: "full", component: EditComponent },
        ],
    },
    // Catch-all route: als er geen URL match is gaan we naar component-a (of dashboard, of naar 404)
    { path: "**", redirectTo: "component-a" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
