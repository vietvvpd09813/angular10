import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink  } from '@angular/router';



@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {

  }
  id:any;
  ngOnInit(): void {

  }
}
