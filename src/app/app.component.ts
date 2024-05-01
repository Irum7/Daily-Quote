import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'daily-cookie';
  jsonData: any; // Variable to store the retrieved JSON data
  searchText: string = '';
  filteredItems: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.getDataFromUrl();
  }
  // getDataFromUrl(): void {
  //   const url = 'https://dummyjson.com/quotes'; // Replace with your JSON data URL
  //   this.http.get(url).subscribe((data: any) => {
  //     this.jsonData = data; // Assign the retrieved JSON data to the variable
  //     this.filteredItems = this.jsonData.quotes; // Initialize the filtered items with all items
  //   });
  // }

  // applyFilter(): void {
  //   this.filteredItems = this.jsonData.quotes.filter((item: any) => {
  //     return (
  //       item.quote.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //       item.author.toLowerCase().includes(this.searchText.toLowerCase())
  //     );
  //   });
  // }
}
