import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// This is a singleton, means there only 1 instance of this class.

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  TOTALQUTOES = 1400;
  constructor(private http: HttpClient) { }

  // returns something u can observe/listen to when its done.
  getQuote(name:string): Observable <any> {
    let id = this.calculateQuoteId(name, new Date());
    // Replace this logic with your code to fetch a quote
    // For demonstration purposes, a static quote is used here
    // this.quote = 'This is a sample quote.'+ id;
    const url = 'https://dummyjson.com/quotes/' + id; 
    // this.http.get(url).subscribe((data: any) => {
    //   this.quote = data.quote;
    //   this.author = data.author;

    //   console.log(data);
    // })
    return this.http.get(url);
  }

  calculateQuoteId(name:string, date:Date): number{
    const currentDay =  Math.floor(date.getTime() /  (1000 * 60 * 60 * 24))
    const lowerName = name.toLowerCase();
    const finalNameVal = this.asignFinalValue(this.toASCII(lowerName));
    const combinedVal = finalNameVal + currentDay;
    return (combinedVal % this.TOTALQUTOES);
  }
 
  toASCII(name:string):number[] {
    let asciiValues  = []
    for(let i=0; i< name.length; i++){
      asciiValues [i] = name.charCodeAt(i);
    }
    return asciiValues;
  }

  asignFinalValue(values:number[]): number{
    let asignedValues  = []
    let finalValue = 0;
    for(let i = 0; i < values.length; i++){
      asignedValues [i] = values[i]*(i+1);
      finalValue += asignedValues[i];
    }
    return finalValue;
  }




}
