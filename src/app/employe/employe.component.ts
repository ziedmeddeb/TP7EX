import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  fonctions:string[]=["Ingénieur", "Directeur", "PDG", "Secrétaire", "Technicien"];
  constructor(private service:FormBuilder) { }
   empForm!:FormGroup;
  ngOnInit(): void {
    this.empForm=this.service.nonNullable.group(
      {
          matricule:[0],
          nom:[''],
          fonction:['Directeur'],
          dep:['IT']

      


      }
    )

  }
}
