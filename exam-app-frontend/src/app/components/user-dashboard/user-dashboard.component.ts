import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  questions: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.userService.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }
}
