import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { JournalEntriesComponent } from './journal/journal-entries.component'
import { JournalEntryComponent } from './journal/journal-entry.component'

const routes: Routes = [
  { path: '', redirectTo: '/journal', pathMatch: 'full' },
  { path: 'journal', component: JournalEntriesComponent },
  { path: 'journal/new', component: JournalEntryComponent },
  { path: 'journal/:id', component: JournalEntryComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}