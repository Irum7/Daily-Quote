import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { DialogData } from 'src/app/pages/home-page/home-page.component';
import { QuoteService } from 'src/app/services/quote.service';


export interface DialogData {
  userName: string;
}

@Component({
  selector: 'app-quote-dialog',
  templateUrl: './quote-dialog.component.html',
  styleUrls: ['./quote-dialog.component.scss']
})

export class QuoteDialogComponent implements OnInit {

  quote: string | undefined;
  author: string | undefined;

  constructor(private quoteService: QuoteService, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    console.log(this.data);
        this.quoteService.getQuote(this.data.userName).subscribe((data: any) => {
        this.quote = data.quote;
        this.author = data.author;

        console.log(data);
      });
  }
 
}
