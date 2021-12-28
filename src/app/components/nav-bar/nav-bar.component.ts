import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  iconSearch = faSearch;
  searchText: string;
  @Output() onSearch?: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchText = "";
  }

  onSearchPress() {
    if (this.onSearch) {
      this.onSearch.emit(this.searchText);
    }
  }

}
