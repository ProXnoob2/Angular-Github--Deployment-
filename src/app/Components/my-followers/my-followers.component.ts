import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/errors/app-error';
import { BadRequestError } from 'src/app/common/errors/bad-request-error';
import { NotFoundError } from 'src/app/common/errors/not-found-error';
import { MyFollowersService } from 'src/app/Services/my-followers/my-followers.service';

@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.scss']
})
export class MyFollowersComponent implements OnInit {

  followers!: any;

  constructor(private service: MyFollowersService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (followers) => {
        this.followers = followers;
      },
      error: (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('Could Not Find Followers');
        if (error instanceof BadRequestError)
          alert('Bad Request');
        else throw error;
      }
    })
  }

}
