import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.userId = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
    });
  }
}
