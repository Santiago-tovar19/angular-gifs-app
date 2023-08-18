import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  constructor(private gisfService: GifService) {}

  // searchTag(newTag: String) {
  //   console.log(newTag);
  // }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gisfService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
    console.log({ tagsHistory: this.gisfService.tagsHistory });
  }
}
