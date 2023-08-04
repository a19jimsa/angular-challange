import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<Quote>();
  token: any;
  quoteForm = new FormGroup({
    quote: new FormControl('', Validators.required),
  });

  constructor(private quoteService: QuoteService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.newItemEvent.emit({
      id: 0,
      text: this.quoteForm.controls['quote'].value as string,
    });
  }
}
