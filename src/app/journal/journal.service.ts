import { Injectable } from '@angular/core';
import { JournalEntry } from './journal-entry.model';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private entries: JournalEntry[] = [];

  getEntries(): JournalEntry[] {
    return this.entries;
  }

  getEntry(id: number): JournalEntry | undefined {
    return this.entries.find(entry => entry.id === id);
  }

  addEntry(entry: Omit<JournalEntry, 'id'>): JournalEntry {
    const newEntry = {
      ...entry,
      id: this.entries.length + 1,
    };
    this.entries.push(newEntry);
    return newEntry;
  }

  updateEntry(updatedEntry: JournalEntry): void {
    const index = this.entries.findIndex(entry => entry.id === updatedEntry.id);
    if (index !== -1) {
      this.entries[index] = updatedEntry;
    }
  }
}