import { Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {}
