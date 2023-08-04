import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-my-quote',
  templateUrl: './my-quote.component.html',
  styleUrls: ['./my-quote.component.css'],
})
export class MyQuoteComponent implements OnInit {
  token: any;
  quotes: Quote[] = new Array();
  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
    if (this.token !== null) {
      this.quoteService.getAllQuotes().subscribe((response: Quote[]) => {
        this.quotes = response;
      });
    }
  }
  onDataChanged(data: Quote) {
    this.quoteService.createQuote(data).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
    });
  }
}
