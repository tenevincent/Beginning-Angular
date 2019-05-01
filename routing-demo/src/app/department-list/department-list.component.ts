import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"},
    {"id": 6, "name": "Blazor"},
    {"id": 7, "name": "Aps.net Core MVC"},
    {"id": 8, "name": "µServices"},
    {"id": 9, "name": "Wpf Developer"},
    {"id": 10, "name": "Python"}

  ]


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    
    } );    
  }

  onSelect(department) {
    this.selectedId = department.id;
    //this.router.navigate(['/departments', department.id]);
  //  console.log("navigatiogn away");
    // relative navigation...
     this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department) { 
    return department.id === this.selectedId; 
  }

  

}
