import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { JournalEntry } from './journal-entry.model';
import { JournalService } from './journal.service';

@Component({
  selector: 'ns-journal-entry',
  templateUrl: './journal-entry.component.html',
})
export class JournalEntryComponent implements OnInit {
  entry: JournalEntry = {
    id: 0,
    date: new Date(),
    mood: '',
    content: '',
  };
  isEditing = false;

  constructor(
    private journalService: JournalService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    if (id) {
      this.isEditing = true;
      const existingEntry = this.journalService.getEntry(id);
      if (existingEntry) {
        this.entry = { ...existingEntry };
      }
    }
  }

  onSaveTap(): void {
    if (this.isEditing) {
      this.journalService.updateEntry(this.entry);
    } else {
      this.journalService.addEntry(this.entry);
    }
    this.routerExtensions.back();
  }

  onBackTap(): void {
    this.routerExtensions.back();
  }
}