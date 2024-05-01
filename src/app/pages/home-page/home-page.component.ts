import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from 'src/app/services/quote.service';

import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuoteDialogComponent } from 'src/app/components/quote-dialog/quote-dialog.component';

// import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit{
  title = 'home';
  jsonData: any; // Variable to store the retrieved JSON data
  searchText: string = '';
  filteredItems: any[] = [];
  userName: string = '';
  isLoggedIn: boolean = false;
  // @ViewChild('inputBox') inputBox: ElementRef;

  private readonly localStrgNameKey = "name";

  // day: number;

  constructor(private quoteService: QuoteService, public dialog: MatDialog) {}
  ngOnInit(): void {
    if(localStorage.getItem(this.localStrgNameKey)){
      this.isLoggedIn = true;
      // @ts-ignore
      this.userName = localStorage.getItem(this.localStrgNameKey);
      this.openDialog()
    }
    // else {
    //   setTimeout(()=>{ // this will make the execution after the above boolean has changed
    //     this.inputBox.nativeElement.focus();
    //   },0);  
    // }
  }

  // ngOnInit(): void {
  //   this.getDataFromUrl();
  // }
  // getDataFromUrl(): void {
  //   const url = 'https://dummyjson.com/quotes'; // Replace with your JSON data URL
  //   this.http.get(url).subscribe((data: any) => {
  //     this.jsonData = data; // Assign the retrieved JSON data to the variable
  //     this.filteredItems = this.jsonData.quotes; // Initialize the filtered items with all items
  //   });
  // }
  //   applyFilter(): void {
  //   this.filteredItems = this.jsonData.quotes.filter((item: any) => {
  //     return (
  //       item.quote.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //       item.author.toLowerCase().includes(this.searchText.toLowerCase())
  //     );
  //   });
  // }

  clearName(): void {
    localStorage.setItem(this.localStrgNameKey , '');
  }

  handleKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      localStorage.setItem(this.localStrgNameKey, this.userName); 
      this.openDialog();
    }
  }


  private openDialog() {
    this.dialog.open(QuoteDialogComponent, { data: { userName: this.userName } });
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '550px',
  //     data: {name: this.userName}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.userName = result;
  //   });
  // }



  // getQuote(): void {
  //   // Replace this logic with your code to fetch a quote
  //   // For demonstration purposes, a static quote is used here
  //   this.jsonData = {
  //     quotes: [{ quote: 'This is a sample quote.', author: 'Sample Author' }]
  //   };
  //   this.filteredItems = this.jsonData.quotes;
  // }

  // // get current date from browser
  // getDate(): void{
  //   const date =  new Date();
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();
  // }
}
