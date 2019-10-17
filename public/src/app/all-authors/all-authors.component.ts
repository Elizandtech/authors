import { Component, OnInit } from '@angular/core';
import { AuthorService} from '../author.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  authors: any;
  editAuthor: any;
  constructor(private service: AuthorService, private router: Router) {}

  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors(): void {
    console.log('in getAllAuthors all-authors-comp');
    this.service.getAuthor()
    .subscribe((allauthors: any) => {
      console.log('all authors data: ', allauthors);
      this.authors = allauthors;
      // console.log('this.authors:', this.authors);
    });
  }
  onDelete(id: any): void {
    console.log('onDELETE all-authors-comp');
    console.log('id to delete', id);
    this.service.deleteAuthor(id)
    .subscribe(deleted => {
      console.log('deleted author', deleted);
      this.getAllAuthors();
    });
  }
  // onEdit(author: any): void {
  //   console.log('in onEdit all-authors-comp');
  //   // console.log('author to edit', author);
  //   this.editAuthor = author;
  //   console.log('this.editAuthor', this.editAuthor);
  //   this.router.navigate(['/edit/' + author._id]);
  // }
}
