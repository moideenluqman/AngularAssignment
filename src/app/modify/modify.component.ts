import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.sass']
})
export class ModifyComponent implements OnInit {
  // Validators.pattern('[a-zA-Z ]*')
  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
    ]),
    website: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(125)
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    dob: new FormControl('', [
      Validators.required
    ])
  });

  isModify: boolean = false;
  updateIndex: any = null;


  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.updateFormValues();
    this.route.params.subscribe(params => {
      // this.id = params['id'];
      if (params['id']) {
        this.isModify = true;
        this.updateIndex = params['id'];
        this.updateFormValues(this.dataService.getSingleItem(this.updateIndex));
      }

    });
  }

  onSubmit() {
    if (this.isModify) {
      console.log("update")
      this.dataService.modifyUser(this.updateIndex, this.profileForm.value)
    }
    else {
      console.log("added");
      this.dataService.addUser(this.profileForm.value);
    }
    console.log("onSubmit called->", this.profileForm);
    this.router.navigate(['list'])

  }

  updateFormValues(item: any) {
    this.profileForm.patchValue(item)
  }

  getClass(name: string) {
    //validate each component
    if (this.profileForm.controls[name].touched) {
      if (this.profileForm.controls[name].valid) {
        return 'is-valid';
      }
      else if (!this.profileForm.controls[name].valid) {
        return 'is-invalid'
      }
    }
  }

}
