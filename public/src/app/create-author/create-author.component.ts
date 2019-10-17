import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
  newAuthor: any;
  errormsg: string [] = [];
  constructor(private service: AuthorService, private router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: '', quote: ''};
  }
  onSubmitAuthor(): void {
    this.service.addAuthor(this.newAuthor)
    .subscribe({
      next: (author: any) => {
      console.log('added author', author);
      this.router.navigate(['/']);
      // Reset this.newAuthor to a new, clean object.
      this.newAuthor = { name: '', quote: '' };
    },
    error: (error) => {
      console.log('error is:', error);
      this.errormsg = error.error;
    }
  });
  }
}
