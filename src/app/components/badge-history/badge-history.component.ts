import { Component } from '@angular/core';

interface Badge {
  name: string;
  description: string;
  earnedDate: Date;
}

@Component({
  selector: 'app-badge-history',
  templateUrl: './badge-history.component.html',
  styleUrls: ['./badge-history.component.css']
})
export class BadgeHistoryComponent {
  badges: Badge[] = [
    {
      name: 'Badge 1',
      description: 'Descrição do badge 1',
      earnedDate: new Date('2023-01-01'),
    },
    {
      name: 'Badge 2',
      description: 'Descrição do badge 2',
      earnedDate: new Date('2023-02-15'),
    },
    {
      name: 'Badge 3',
      description: 'Descrição do badge 3',
      earnedDate: new Date('2023-05-10'),
    },
  ];
}
