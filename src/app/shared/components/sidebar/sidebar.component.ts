import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gisfService: GifService) {}

  get tags(): string[] {
    return this.gisfService.tagsHistory;
  }

  searchGif(tag: string): void {
    this.gisfService.searchTag(tag);
    console.log(this.gisfService.tagsHistory);
  }
}
