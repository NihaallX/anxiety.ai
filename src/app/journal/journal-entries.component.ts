import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { JournalEntry } from './journal-entry.model';
import { JournalService } from './journal.service';

@Component({
  selector: 'ns-journal-entries',
  templateUrl: './journal-entries.component.html',
})
export class JournalEntriesComponent implements OnInit {
  journalEntries: JournalEntry[] = [];

  constructor(
    private journalService: JournalService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.journalEntries = this.journalService.getEntries();
  }

  onAddTap(): void {
    this.routerExtensions.navigate(['/journal/new']);
  }
}