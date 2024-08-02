import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  questions: any[] = [];
  newQuestion = { question: '', options: [] };

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.adminService.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }

  addQuestion() {
    this.adminService.addQuestion(this.newQuestion).subscribe(() => {
      this.loadQuestions();
      this.newQuestion = { question: '', options: [] };
    });
  }
}
