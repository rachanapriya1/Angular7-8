// person-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
person: Person;

constructor(
  private route: ActivatedRoute,
  private personService: PersonService,
  private location: Location
) {
  this.person = { id: '', name: '', age: 0, gender: '', mobileNumber: '' };
}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.getPerson("id").subscribe(person => this.person = person);
  }

  save(): void {
    this.personService.updatePerson(this.person.id, this.person).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
