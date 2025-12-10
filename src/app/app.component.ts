import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AppLayout} from './layout/app-layout/app-layout.component';
import {JournalList} from './ui/journal-list/journal-list.component';
import {JournalsService} from './core/journals.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'iw-root',
  imports: [AppLayout, JournalList, AsyncPipe],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {

  private readonly journalService = inject(JournalsService);

  protected readonly journals = this.journalService.getJournals();
}
