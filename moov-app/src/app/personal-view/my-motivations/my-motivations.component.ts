import { Component, OnInit } from '@angular/core';
import { PersonalUserDataService } from 'src/app/personal-user-data.service';
import { PersonalUserData } from '../../personal-user-data';

@Component({
  selector: 'app-my-motivations',
  templateUrl: './my-motivations.component.html',
  styleUrls: ['./my-motivations.component.scss']
})
export class MyMotivationsComponent implements OnInit {
  userId: string;
  userDetails: PersonalUserData;

  constructor(private readonly personalUserDataService: PersonalUserDataService) {
    this.userId = "blabla@blalba.com";
    this.userDetails = { "id": "sdfsdf", "name": "shaul.ben.maor@gmail.com", "orgId": "e0c19e01-8e9a-4a8e-a15c-dea461b76acf", "mail": "", "role": 2, "managerId": "b0317aca-d4a4-40ef-bcc4-9f47364a8f4d", "status": "new", "currentIssue": "ee728c15-c04a-4ecf-9c19-2a07ed37b65a", "trainingStage": "1", "userAttributes": { "People Oriented": "2", "Negative Feedback Gap": "3", "Care for the team": "2" }, "courseLesson": "1" }
  }

  async ngOnInit(): Promise<void> {
    const result = await this.personalUserDataService.getUserDetails(this.userId);
    console.log(result);

  }

}
