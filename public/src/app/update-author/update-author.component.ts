import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Params, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  authorId: any;
  author: any;
  errormsg: string [] = [];
  constructor(private service: AuthorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((parameter: Params) => {
      console.log('author id update-author-comp', parameter['id']);
      this.authorId = parameter['id'];
      this.getAuthor();
    });
  }
  getAuthor(): void {
    console.log('getAuthor update-comp');
    this.service.getOneAuthor(this.authorId)
    .subscribe((data: any) => {
      console.log('author to edit:', data);
      this.author = data;
    });
  }
  onEdit(form): void {
    console.log('form', form.value);
    this.service.editAuthor(form.value)
    .subscribe({
      next: (edited: any) => {
      console.log('in next:');
      console.log('edits made: ', edited);
      this.router.navigate(['/']);
      },
      error: (error) => {
        console.log('error is:', error);
        this.errormsg = error.error;
      }
    });
  }
}
